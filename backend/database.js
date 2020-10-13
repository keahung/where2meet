const mongoose = require('mongoose')
const connection = "mongodb+srv://dbAdmin:asSR5yi1j6Ff272g@cluster0.qealu.mongodb.net/db1?retryWrites=true&w=majority"
mongoose.connect(connection, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err))
