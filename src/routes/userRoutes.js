import express from "express";
import userController from "../controllers/userController.js";

const route = express.Router();

route.get("/", userController.getUserData);
route.get("/:id", userController.getUserById);

export default route;
