import { Model } from "mongoose";

export const User = new Model({
    username: String,
    email: String,
    password: String,
    repeatPassword: String,
})