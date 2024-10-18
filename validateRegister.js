import db from "../database/connection.js";

const validateRegister = (req,res,next) => {
    //if names are too long
    if (req.body.firstName.length > 16) {
        return res.status(400).send({
            msg: 'First name must be no more than 16 characters long'
          });
    }
    if (req.body.lastName.length > 16) {
        return res.status(400).send({
            msg: 'Last name must be no more than 16 characters long'
          });
    }
    //if password is wrong length
    if (req.body.password.length < 6 || req.body.password.length > 30) {
        return res.status(400).send({
          msg: 'Password must be between 6 and 30 chars'
        });
      }
      // password (confirm) does not match
      if (
        !req.body.confirm_password ||
        req.body.password != req.body.confirm_password
      ) {
        return res.status(400).send({
          msg: 'Both passwords must match'
        });
      }
      //check if user's email has already been used to create an account
      db.query(
        `SELECT * from users WHERE email = ${req.body.email}`,
        function (error, results) {
          if (results) {
            console.log(results);
            return res.status(409).send({msg: 'This email already has an account associated with it'});
          }
        }
      )
      next();
}

export default validateRegister