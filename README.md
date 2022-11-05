# NodeJs Blog RestApi with Authentication

    Authentication 

    ------ for register user -------
    
       endpoint: /api/v1/auth/register
       body json :
        {
         "username: "your_name"
         "email": "your_email"
         "password": "your_password"
        }
        
        

        ----- for login ---------
        
       endpoint: /api/v1/auth/login
       body json :
        {
         "email": "your_email"
         "password": "your_password"
        }
        
        
        

     Blog post

       endpoints:
        get all post    : /api/v1/posts/
        get single post : /api/v1/posts/id/:id
        create new post : /api/v1/posts/create
        update post     : /api/v1/posts/update/id/:id
        delete post     : /api/v1/posts/delete/id/:id

        -----  body json for create and update post -----
        {
          "title" : "enter_title",
          "description" : "enter_description",
          "user_id": "enter_logged_in_user_email",
          "posted_at": "enter_date",
          "img": "enter_img_url"
        }
