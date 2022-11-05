import { db } from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export var registerUser = function (req, res) {
    var query = "SELECT * FROM `users` WHERE email = ?";
    db.query(query, req.body.email, function (error, data) {

        if (error) return res.status(500).json({ error: error });

        if (data.length) {
            return res.status(409).json("User already registered!")
        } else {

            var hash = bcrypt.hashSync(req.body.password, 10);

            var addUserQuery = "INSERT INTO `users`(`username`, `email`, `password`, `avatar`) VALUES (?, ?, ?, ?)";
            var values = [req.body.username, req.body.email, hash, req.body.avatar];
            db.query(addUserQuery, values, function (error, data) {
                if (error) {
                    return res.status(500).json(error);
                } else {
                    return res.status(200).json("New user created");
                }
            })

        }

    });
}


export var loginUser = function (req, res) {
    var query = "SELECT * FROM users WHERE email = ?";
    db.query(query, req.body.email, function (err, data) {
        if (err) {
            return res.status(500).json(err);
        }
        if (!data.length) {
            return res.status(404).json("User not found!");
        } else {
            // compare pass
            var checkPass = bcrypt.compareSync(req.body.password, data[0].password);
            if (!checkPass) {
                return res.status(400).json("Invalid password");
            } else {
                // create token
                var token = jwt.sign({id: data[0].id}, "secretkey");
                res.header('auth-token', token).json({ token: token, user: data[0]});
            }

        }


    })
}