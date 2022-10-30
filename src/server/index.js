const express = require('express');
const db = require('./config/db')
const cors = require('cors')
const {request} = require("express");
const bodyParser = require("express");
const app = express();
const router = express.Router();
const createError = require('http-errors')
const path = require('path')

const PORT = 3002;
app.use(cors());
app.use(express.json())


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Route to get all posts
app.get("/api/get", (req, res) => {
    db.query("SELECT * FROM posts", (err, result) => {
            if (err) {
                console.log(err)
            }
            res.send(result);
        }
    );
    // res.end('Yes');
});

// Route to get one post
app.get("/api/getFromId/:id", (req, res) => {

    const id = req.params.id;
    db.query("SELECT * FROM posts WHERE id = ?", id, (err, result) => {
            if (err) {
                console.log(err)
            }
            res.send(result)
        }
    );
    res.end('Yes');
});


router.post('/api/create', (request, response) => {
//code to perform particular action.
//To access POST variable use req.body()methods.
    console.log(request.body)
    var username = request.body.userName;
    var title = request.body.title;
    var text = request.body.text;
    var price = request.body.price;

    console.log(username, title, text)

    db.query("INSERT INTO posts (title, post_text, username,price) VALUES (?,?,?,?)", [title, text, username,price], (err, result) => {
            if (err) {
                console.log(err)
            }
            console.log(result)
        }
    );
    response.end('Yes');
})

router.post('/api/register', (request, response) => {
//code to perform particular action.
//To access POST variable use req.body()methods.
    console.log(request.body)
    var name = request.body.name;
    var email = request.body.email;
    var password = request.body.password;

    // console.log(username, title, text)

    db.query("INSERT INTO users (name, email, password) VALUES (?,?,?)", [name, email, password], (err, result) => {
            if (err) {
                console.log(err)
            }
            console.log(result)
        }
    );
    response.end('Yes');
})



router.post('/api/sub', (request, response) => {
//code to perform particular action.
//To access POST variable use req.body()methods.
    console.log(request.body)
    var email = request.body.email;

    console.log(email)

    db.query("INSERT INTO subs (email) VALUES (?)", [email], (err, result) => {
            if (err) {
                console.log(err)
            }
            console.log(result)
        }
    );
    response.end('Yes');
})


// Route to delete a post
router.delete('/api/delete/:id', (req, res) => {
    const id = req.params.id;
    console.log(id)
    db.query("DELETE FROM posts WHERE id= ?", id, (err, result) => {
        if (err) {
            console.log(err)
        }
    })
    res.end('Yes');
})

router.put('/api/update/:id', (req, res) => {
    const id = req.params.id;
    const title = req.body.title
    const post_text = req.body.post_text
    console.log(id)
    db.query("UPDATE posts SET title = ?, post_text = ? WHERE id= ?", [title, post_text, id], (err, result) => {
            if (err) {
                console.log(err)
            }
        }
    )
    res.end('Yes');
})


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})

app.use("/", router);
