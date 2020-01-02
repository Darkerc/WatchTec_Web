const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    username: {  required:"Username is required" ,type: String },
    password: { required: "Password is required", type:"String" },
    email: { required:"email is required" , type: String, unique: true },
    user_image: { type: String, default:"/image_default.jpg" },
    list_friends: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
    ], 
    last_ubication:{ type: Date , default: Date.now }
});

module.exports = mongoose.model("User",User);