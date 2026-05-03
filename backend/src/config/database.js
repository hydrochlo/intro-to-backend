import mongoose from "mongoose";

const connectDB = async () => {
    try {
        console.log("Attempting to connect to URI:", process.env.MONGODB_URI); // Add this!
        // If MONGODB_URI already ends with a slash, this creates a double slash //
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}`);
        console.log(`\n MongoDB connected! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB CONNECTION ERROR (inside database.js): ", error);
        process.exit(1);
    }
};

export default connectDB;