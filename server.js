import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/user.js";

dotenv.config();
const App = express();

App.use(express.json());
App.use(express.urlencoded({extended: true}));
App.use("/api/user", userRoutes);

const PORT = process.env.CONNECTION_URL ?? 3000;
const CONNECTION_URL = process.env.MONGO_DB_URL;

(async () => {
  const mongooseConfigOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  }; 
  try {
    await mongoose.connect(CONNECTION_URL, mongooseConfigOptions);
    App.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
      console.log(`Database is running on ${CONNECTION_URL}`);
    });
  } catch(error) {
    console.log(error);
  }
})();





