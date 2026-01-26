import mongoose from 'mongoose';

const { Schema } = mongoose

const postSchema = new Schema({
    user:{
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    title:{
        type: String,
        required: true,
    },
    slug:{
        type: String,
        required: true,
        unique: true
    },
    coverimg: String,
    shortDesc:String,
    category:{
        type: String,
        default: 'general',
    },
    content:{
        type: String,
        required: true,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    visit: {
      type: Number,
      default: 0,
    },
},{timestamps: true})

export default mongoose.models.Post || mongoose.model('Post',postSchema)