import express from 'express';
import multer from 'multer';
import authRoute from './routes/auth.route.js';
import postRoute from './routes/post.route.js';
import userRoute from './routes/user.route.js';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import cors from 'cors';

var app = express(); 

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(cors());


// multer for uploading files
var storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, 'uploads');
    },
    filename: function (req, file, cb){
        cb(null, Date.now() + file.originalname);
    },
    
});

// multer file filter
var fileFilter = function (req, file, cb){
    if(file.mimetype == "image/jpeg" || file.mimetype == "image/png" || file.mimetype == "image/jpg"){
        cb(null, true);
    }else{
        cb(null, false);
    }
};


//routes
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/posts", postRoute);
app.use("/api/v1/user", userRoute);


const server = app.listen(2023, function (error){
    console.log(error);
  console.log("Server is running at port 2023");
})
