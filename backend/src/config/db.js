import mongoose from "mongoose"

export const connectDB = async() => {
    try{
        await mongoose.connect(process.env.MONGO_URI);

        console.log("MONDODB CONNECTED SUCCESSFULLY!");
    } catch(error) {
        console.log("Error connecting to MONGODB",error);
    }
};