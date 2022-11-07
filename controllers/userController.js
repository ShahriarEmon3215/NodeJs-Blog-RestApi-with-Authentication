import { db } from "../db.js";
import jwt from "jsonwebtoken";

export var getUserData = function(req,res){
    // if (req.header('auth-token')) {
        var authorization = req.header('auth-token'),decoded;
        try {
            decoded = jwt.verify(authorization, "secretkey");
        } catch (e) {
            return res.status(401).json("unauthorized");
        }
        var user = decoded;
        var query = "SELECT * FROM `users` WHERE id = ?";
        db.query(query, user.id, function(error, data){
            res.status(200).json(data);
        })
     
    // }else{
    //     res.status(404).json("Error");
    // }
}