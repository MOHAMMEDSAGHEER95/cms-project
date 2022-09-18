const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    title:{
        required:true,
        type: String
    },
    body: {
        required: false,
        type: String
    }
});

module.exports = mongoose.model('Article', articleSchema)