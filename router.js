import express from "express";
import db from "./database/connection.js";
import validateRegister from "./Middleware/validateRegister.js";
import argon2 from "argon2";
import { createAccessToken, 
        sendAccessToken } from "./tokens.js";

const router = express.Router();

router.get('/profileonboard', (req,res) => {
    db.query(
        'SELECT * FROM (SELECT G.group_id, M.member_id, P.profile_id, P.first_name, P.image_url, P.pronoun, M.leader FROM (( NomieDB.groupmembers AS M INNER JOIN NomieDB.group AS G ON M.group_id = G.group_id) INNER JOIN NomieDB.profile AS P ON M.profile_id = P.profile_id)) AS newtable WHERE leader=true',
        function(error, results) {
            if (error) throw error;
            return res.status(200).send(results)
        }
    )
});

router.post('/createaccount', validateRegister, async (req,res) => {
    const {firstName, lastName, email, password, confirm_password} = req.body;
            try {const hashedPwd = await argon2.hash(password, {
                type: argon2.argon2id
                });

                db.query(
                `INSERT INTO NomieDB.users (first_name, last_name, email, password) VALUES (${db.escape(firstName)}, ${db.escape(lastName)}, ${db.escape(email)}, ${db.escape(hashedPwd)})`,
                function(error, results) {
                if (error)  throw error;
                return res.status(201).send(results)
                }
                )   
            } catch (err){
                return res.status(500).send({msg: err})
            
        };
    });

router.post('/signin', (req,res) => {
    const {email, password} = req.body;
    console.log(req.body);
    db.query(
        `SELECT * FROM users WHERE email = '${email}'`,
        async (error, result) => {
            if (error) throw error;
            if (!result) throw new Error ("User does not exist");    
            try {    
                 console.log(result);
                const valid = await argon2.verify(result[0].password, password);
                if (!valid) throw new Error ("Password not correct");
                //else, create JWT tokens for user with valid password
                const accessToken = createAccessToken(result[0].user_id);
                //and send these tokens
                sendAccessToken(req, res, accessToken);
             }  catch (err) {
            res.send({error: `${err.message}`})
            }
         }
    )
})

export default router;