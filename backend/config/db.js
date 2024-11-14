import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://IvanParra:000111@cluster0.4tuwh.mongodb.net/E-COMMERCE-COMIDAS');
        console.log("Base de datos conectada");
    } catch (error) {
        console.error("Error de conexión a la base de datos:", error.message);
        process.exit(1);
    }
};