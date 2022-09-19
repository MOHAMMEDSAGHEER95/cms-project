const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    title:{
        required:true,
        type: String
    },
    description:{
        required: false,
        type: String
    },
    price:{
        required:true,
        type:Number
    }
})

module.exports = mongoose.model('inventory', productSchema)