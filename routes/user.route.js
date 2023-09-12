import express from "express";
import { createUser, deleteUser, getUserById, updateUser } from "../controller/user.controller.js";


const userRoute = express.Router();

//create user
 userRoute.post("/", createUser);
 userRoute.get("/:Id", getUserById);
 userRoute.delete("/:Id", deleteUser);
 userRoute.put("/:userId", updateUser)


export default userRoute;