import mongoose from 'mongoose';

const { Schema } = mongoose

const userSchema = new Schema({
    clerkUserId:{
        type: String,
        required: true,
        unique: true,
    },
    username:{
        type: String,
        required: true,
        unique: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    img: String,
    savedPosts:{
        type: [String],
        default: []
    }
},{timestamps: true})

export default mongoose.models.User || mongoose.model('User',userSchema)