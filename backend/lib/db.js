import mongoose from "mongoose";

const connectDB = async () => {
    try {
        if(!process.env.MONGO_URL) throw new Error('MONGO_URL not defined in env')
        const mongo = await mongoose.connect(process.env.MONGO_URL,{
                            dbName:'ghost'
                        })
        console.log('Mongo db connected to',mongo.connection.host)
    } catch (error) {
        console.log(error)
    }
}

export default connectDB