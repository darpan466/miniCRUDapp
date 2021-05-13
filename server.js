/* Loading environment variables */
import dotenv from "dotenv";
dotenv.config();
/*****/

import express from "express";

const app = express();


app.get("/", (req, res) => res.send(process.env.MONGO_DB_URL));

const PORT = process.env.CONNECTION_URL ?? 3000;

app.listen(PORT, () => console.log(`Server running on: http://localhost:${PORT}`));



