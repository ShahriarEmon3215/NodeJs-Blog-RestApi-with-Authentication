import { db } from "../db.js";
import jwt from "jsonwebtoken";

export var getAllPosts = function (req, res) {
    var query = "SELECT * FROM `posts`";

    db.query(query, function (error, data) {
        if (error) {
            return res.status(500).json({ error: error });
        } else {
            return res.status(200).json(data);
        }
    })
}


export var getSinglePost = function (req, res) {
    var query = "SELECT * FROM `posts` WHERE id = ?";
    db.query(query, req.params.id, function (error, data) {
        if (error) {
            return res.status(500).json({ error: error });
        } else {
            return res.status(200).json(data);
        }
    })
}

export var createPost = function (req, res){
    var query = "INSERT INTO `posts`(`title`, `description`, `user_id`, `posted_at`, `img`) VALUES (?,?,?,?,?)";

    db.query(query, [req.body.title, req.body.description, req.body.user_id, req.body.posted_at, req.body.img], function(error, data){
        if (error) {
            return res.status(500).json({ error: error });
        } else {
            return res.status(200).json("Post created!");
        }
    })
}



export var updatePost = function (req, res){
    var query = "UPDATE `posts` SET `title`= ?, `description`= ?,`user_id`= ?,`posted_at`= ?,`img`= ? WHERE id = ?";

    db.query(query, [req.body.title, req.body.description, req.body.user_id, req.body.posted_at, req.body.img, req.params.id], function(error, data){
        if (error) {
            return res.status(500).json({ error: error });
        } else {
            return res.status(200).json("Post updated!");
        }
    })
}



export var deletePost = function(req, res){
    var query = "DELETE FROM `posts` WHERE id = ?";
    db.query(query, req.params.id, function(error, data){
        if (error) {
            return res.status(500).json({ error: error });
        } else {
            return res.status(200).json("Post deleted!");
        }
    })
}