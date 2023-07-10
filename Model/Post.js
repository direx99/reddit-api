const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    community:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true
    },
    comments:{
        type:Number,
        required:false
    },
    likes:{
        type:Number,
        required:false
    },
    user:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }

})
 







const Post = mongoose.model("Post",postSchema);
module.exports=Post;
