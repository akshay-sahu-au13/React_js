const express = require('express');
const Router = express.Router();
const User = require('../Model/users');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

Router.post('/signup', async(req, res)=> {
    const data = req.body;

    try {
        let user = User.findOne({email:req.body.email});
        if (user){
            return res.send({message:"User already exists, please login or signup with different email"})
        }
        user = new User(data);
        
        const hashedPwd = await bcrypt.hash(data.password, 10)
        user.password = hashedPwd;

        await user.save();

        res.send({ message: "User registered!", UserInfo: user })
    } catch (error) {
        if (error) {
            console.log(error.message)
            res.send({message:"Error while registering the user", error:error.message})
        }
    }

});

Router.post('/login', async(req, res)=> {

    try {
        if (req.body.email && req.body.password){
            const user = await User.findOne({email:req.body.email});
            console.log("user:", user);
            if (!user){
                return res.status(404).send({message:"This email is not registered. Kindly signup first!"})
            }
            const pwd = await bcrypt.compare(req.body.password, user.password);
            if (!pwd){
                return res.status(400).send({message:"Invalid password..."})
            }

            const token = await jwt.sign({id:user._id, email:user.email}, "my_login_secret")

            res.status(200).send({message: "Login Success", userInfo:user, token})

        } else {
            return res.status(400).send({message:"Enter both email and password!"})
        }
    } 
    catch (error) {
        console.log(error.message)
        res.send({message:"Error during Login", error:error.message});
    }
})

Router.get('/logout', (req, res)=> {

})



module.exports = Router;