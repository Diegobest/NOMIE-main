import "dotenv/config";
import express from "express";
import cors from "cors";
import jwt from "express-jwt";
import router from "./router.js";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());
app.use(jwt({secret: process.env.ACCESS_TOKEN_SECRET, algorithms: ['HS256']}).unless({path: ["/launch", "/createaccount", "/signin","/profileonboard", "/profilecreate", "/joinspace", "/Final", "/"]}));
app.use(router);

app.listen(PORT, () => console.log(`server running at http://localhost:${PORT}`));