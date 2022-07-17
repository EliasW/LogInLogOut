const express = require("express")
const app = express()
const mongoose = require('mongoose')
const usermodel = require('./models/users')

const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose.connect(
    "mongodb+srv://elias:Home441243!@cluster0.qc9voiz.mongodb.net/?retryWrites=true&w=majority"
    );
//mongodb+srv://elias:<password>@cluster0.qc9voiz.mongodb.net/?retryWrites=true&w=majority
app.get("/getUsers", (req, res) => {
    usermodel.find({}, (err, result) => {
        if (err) {
            res.json(err);
            console.log("err", err)
        }
        else {
          //  console.log("respo", result)
            res.json(result)
        }
    });
});

app.post("/createUser", async (req, res) =>{
    const user = req.body
    const newUser = new usermodel(user)
    await newUser.save();

    res.json(user);
})

app.listen(3001, () => {
    console.log("server running")
});