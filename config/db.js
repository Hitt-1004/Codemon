const mongoose = require('mongoose')
const dbconfig = require('./dbconfig')
const connectDB = async() => {
    try{
        const conn = await mongoose.connect(dbconfig.database)
        console.log('MongoDB Connected: ' + conn.connection.host)
    }
    catch(err){
        console.log(err)
        process.exit(1)
    }
}

module.exports = connectDB

