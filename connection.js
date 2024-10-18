import mysql2 from "mysql2";

const connection = mysql2.createConnection ({
    host:"127.0.0.1",
    user: "nomieAdmin",
    password: "rosemont22%",
    database: "NomieDB"
});

connection.connect(function (err) {
    if (err) {
        console.error("error connecting:" + err.stack);
        return;
    }
    console.log("Database connected");
});

export default connection;
