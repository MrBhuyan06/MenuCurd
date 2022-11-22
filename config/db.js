const mongoose=require('mongoose');
const {MONGO_DB}=process.env

exports.connect=() =>
{
    mongoose.connect(MONGO_DB).then((conn) =>
    {
        console.log(`Coonection Db ${conn.connection.host}`);
    }).catch((err) =>
    {
        console.log(err.message);
    })
}