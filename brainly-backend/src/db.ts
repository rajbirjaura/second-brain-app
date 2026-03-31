import mongoose, { model, Model,Schema } from "mongoose";
import dotenv from "dotenv";
dotenv.config();
mongoose.connect(process.env.MONGO_URL as string)



const UserSchema = new Schema({
    username:{type:String,unique:true},
    password: {type:String}
})

export const userModel = model("User",UserSchema)

const ContentSchema = new Schema({
    title:String,
    link:String,
    tags:[{type:mongoose.Types.ObjectId,ref:'Tag'}],
    userId:{type:mongoose.Types.ObjectId,ref:'User',required:true}
})

const LinkSchema = new Schema({
    hash:String,
    userId:{type:mongoose.Types.ObjectId,ref:'User',required:true,unique:true}
})

export const linkModel = model("Link",LinkSchema);
export const contentModel = model("Content",ContentSchema);