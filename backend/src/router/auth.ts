import express from "express";

import { createUser, deleteUser, getAllUser, getUser, logIn, updateUser } from "../controller/auth";

const user = express.Router();

user.route("/logIn").post(logIn)
user.route("/").post(createUser).get(getAllUser)
user.route("/one").post(getUser);
user.route("/:id").put(updateUser).delete(deleteUser);

export { user };