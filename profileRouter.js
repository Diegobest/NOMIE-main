import express from "express"
import db from "./database/connection.js";

const profileRouter = express.Router()

/**Submit a profile **/
profileRouter.post("/Final", (req, res) => {
    db.query(
      "INSERT INTO profile (first_name, profession, pronoun, about, activity, imageurl) VALUES (?,?,?,?,?,?)",
      [req.body.PreferredName, req.body.Profession, req.body.Pronoun, req.body.Comments, req.body.Topic, req.body.ImageUrl],
      function (error, results, fields) {
        if (error) throw error;
        return res.status(201).send(results);
      }
    );
  });
  
  //**View All Profiles**/
  profileRouter.get("/", function (req, res) {
      db.query(
        "SELECT * FROM profile",
        function (error, results, fields) {
          if (error) throw error;
          return res.status(200).send(results);
        }
      );
  });

  /**View Indiviual Profile**/
  profileRouter.get("/:id", (req, res) => {
    db.query(
      `SELECT * FROM profile WHERE profile_id=${req.params.id}`,
      function (error, results, fields) {
        if (error) throw error;
        return res.status(200).send(results);
      }
    );
  });
  
  /**Delete Indiviual Profile**/
  profileRouter.delete("/:id", (req, res) => {
    db.query(
      `DELETE FROM profile WHERE profile_id=${req.params.id}`,
      function (error, results, fields) {
        if (error) throw error;
        return res.status(200).send(results);
      }
    );
  });
  
  /**Edit Indiviual Profile */
  profileRouter.put("/:id", (req, res) => {
    const {profilePreferredName, profileProfession, profilePronoun, profileComments, profileTopic, profileImage, profileImageUrl} = req.body;
    db.query(
      `UPDATE profile SET profilePreferredName="${profilePreferredName}",profileProfession="${profileProfession}",profilePronoun="${profilePronoun}",profileComments="${profileComments}",profileTopic="${profileTopic}",profileImage="${profileImage}",profileImageUrl="${profileImageUrl}" WHERE profile_id="${req.params.id}"`,
      function (error, results, fields) {
        if (error) throw error;
        return res.status(200).send(results);
      }
    );
  });
  
  export default profileRouter;