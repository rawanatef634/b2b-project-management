import mongoose from "mongoose"
import { config } from "./app.config"

const connectDB = async () => {
    try {
        await mongoose.connect(config.MONGO_URI);
        console.log("Connected to MongoDB");
    } catch (err) { 
        console.error(err);
        process.exit(1);
    }
}

export default connectDB;