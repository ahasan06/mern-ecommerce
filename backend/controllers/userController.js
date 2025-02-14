
import bycrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import UserModel from "../models/userModel.js";
import { generateToken } from '../utils/generateToken.js';
import validator from 'validator'

export const loginUser = async (req, res) => {

    try {
        const { email, password } = req.body
        if (!email || !password) {

            return res.status(400).json({ error: "Fields are required!" })
        }
        if (!validator.isEmail(email)) {
            return res.status(400).json({ error: "Invalid email format" });
        }
        const user = await UserModel.findOne({ email })

        if (!user) {
            return res.status(401).json({ error: "Invalid email address!" });
        }

        const isPasswordValid = await bycrypt.compare(password, user.password)

        if (!isPasswordValid) {

            return res.status(401).json({
                error: "Invalid password!"
            })
        }
        // Generate JWT Token
        const token = generateToken(user._id, user.email);

        res.status(200).json({
            message: "Login successful",
            token
        })


    } catch (error) {
        console.error("Error in loginUser:", error);
        res.status(500).json({ error: "Internal Server Error" })
    }
};

export const registerUser = async (req, res) => {

    try {
        const { name, email, password } = req.body
        if (!name || !email || !password) {
            return res.status(400).json({ error: "All fields are required!" })
        }
        if (!validator.isEmail(email)) {
            return res.status(400).json({ error: "Invalid email format" });
        }
        if (password.length < 7) {
            return res.status(400).json({ error: "password should be at least 8 characters" })
        }

        // Check if user already exists
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: "Email is an already in use!" })
        }

        const salt = await bycrypt.genSalt(10)
        const hashPassword = await bycrypt.hash(password, salt)

        const newUser = new UserModel({
            name,
            email,
            password: hashPassword
        })
        await newUser.save()

        // Generate JWT Token
        const token = generateToken(newUser._id, newUser.email);

        res.status(201).json({
            message: "User Register Successfully",
            token
        })

    } catch (error) {
        console.error("Error in registerUser:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};


export const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const adminMail = process.env.ADMIN_EMAIL;
        const adminPass = process.env.ADMIN_PASSWORD;

        if (!email || !password) {
            return res.status(400).json({ error: "All fields are required!" });
        }

        if (email === adminMail && password === adminPass) {
            const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: "1h" });
            return res.status(200).json({ success: true, token });
        } else {
            return res.status(401).json({ error: "Invalid Credentials" });
        }
    } catch (error) {
        console.error("Error in adminLogin:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};