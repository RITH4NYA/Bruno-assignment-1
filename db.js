
const mongoose = require('/mongoose');
const connectDB = async() => {
    try{
    await connectDB(process.env.MONGO_URL);
    console.log('DataBase is Connected');
}catch(err){
    console.log('DataBase is not connected');
}

}
module.export = connectDB;
