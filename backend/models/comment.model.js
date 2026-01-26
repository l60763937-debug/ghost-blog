import mongoose from 'mongoose';

const { Schema } = mongoose

const userSchema = new Schema({
    user:{
        type: Schema.Types.ObjectId,
        required: true,
        ref:"User"
    },
    post:{
        type: Schema.Types.ObjectId,
        required: true,
        ref:"Post"
    },
     desc: {
      type: String,
      required: true,
    },
},{timestamps: true})

export default mongoose.models.User || mongoose.model('User',userSchema)