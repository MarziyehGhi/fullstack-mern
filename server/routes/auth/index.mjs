import { Router } from "express";
import { SignUpSchema, User } from "../../models/index.mjs";
import bcrypt from 'bcryptjs';

export const AuthRoutes = Router();

export const validate = (schema) => async (req, res, next) => {
    try {
        await schema.validate({
            body: req.body,
            query: req.query,
            params: req.params,
        });
        return next();
    } catch (err) {
        res.status(400).json(err)
    }
};

AuthRoutes.post('/sign-up', validate(SignUpSchema), async (req, res) => {
    const isUser = await User.findOne({ email: req.body.email });
    if (isUser) return res.status(400).json({
        msg: 'user with this email already exists!'
    });
    try {
        const password = await bcrypt.genSalt(10);
        const hashed = await bcrypt.hash(process.env.SECRET_KEY, password);
        const { repeatPassword, ...restBody } = req.body;
        const user = await new User({ ...restBody, password: hashed });
        await user.save();
        res.status(201).json({
            user,
            msg: "user created successfully!"
        })
    } catch (err) {
        res.status(400).json(err)
    }
})