import mongoose from 'mongoose';

const { Schema } = mongoose

const commentSchema = new Schema({
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

export default mongoose.models.Comment || mongoose.model('Comment',commentSchema)