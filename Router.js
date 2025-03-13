const express = require ('express');
const {bcrypt} = require ('bcrypt');
const router = express.Router();

router.post('/signup',async(req,res)=>{
    const {name,email,password} = req.body
    const useremail = await users.findOne{email:email};
    if (usermail){
        return res(200).json({message:"user already exist"});
    }
    const salt = await bcrypt.gensalt(10);
    const pass = await bcrypt.hash(password,salt);
    const user = new users({
        name:name,
        email:email,
        password:password
    })
    await user.save();
    
})
module.exports = Router;
