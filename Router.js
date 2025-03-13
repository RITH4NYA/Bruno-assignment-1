const express = require ('express');
const {bcrypt} = require ('bcrypt');
const router = express.Router();

router.post('/signup',async(req,res)=>{
    const {email,password,name} = req.body
    const useremail = await user.findOne{email:email};
    if (usermail){
        return res(200).json({message:"user already exist"});
    }
    const salt = await bcrypt.gensalt(10);
    const pass = await bcrypt.hash(password,salt);
    const user =({email:email,password: password,name: name});
     users.create(user);
})
