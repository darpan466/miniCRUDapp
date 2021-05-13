import express from "express";
import {createUser, updateUser, getUser, deleteUser, getAllUser} from "../controllers/user.js";
const router = express.Router();

router.post("/create", createUser);
router.put("/update/:id", updateUser);
router.get("/get/:id", getUser);
router.get("/getAll", getAllUser);
router.delete("/delete/:id", deleteUser); 

export default router;
