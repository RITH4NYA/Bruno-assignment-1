const express = require('express'); 
const userRouter = express();
const model = require('./model');

userRouter.get('/get-user',async(res,req)=>{
try{
    const {mail , userName , password} = req.body
    const userFind = await model.findOne();
    const userOne = userFind.map((model)=>{
        return{
            userName:model.userName,
            mail:model.mail,
            password:model.password,
        }
    })
    res.status(200).json({model:model});
    

    
}
catch(err){
    res.status(500).json({message:'Internal Server Error'});
}
})
userRouter.post('/login',async(res,req)=>{
    try{
        const{mail,userName,password} = req.body;
const userFindOne = await model.findOne({mail});
if(!user){
res.send(404).json({message:'User not found'})
}    
if(!userName || !mail || !password){
    res.status(400).json({message:'fill out all fields'})
}
bcrypt.compare(password, check.password, function (err, result) {
    if (err) {
        return res.status(400).json({ message: "Invalid bcrypt compare" });
    }
    if (result) {
        jwt.sign({ mail: mail }, secret, (err, token) => {
            if (err) {
                return res.status(400).json({ message: "Invalid jwt" });
            }
            res.setHeader('Authorization', `Bearer ${token}`);
            console.log(token);
            res.status(200).json({ token: token });
        });
    }
}
    )
}catch(err){
res.status(500).json({message:'Internal Server Error'});
}

})
module.export = {userRouter};