import mongoose from "mongoose";

const dbConnect = async () => {
    try {
        console.log(process.env.MONGO_URI);
        const Conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${Conn.connection.host}`);
    } catch (error) {
        console.error(`Error Connecting database: ${error.message}`);
    }
}

export default dbConnect;