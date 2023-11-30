import mongoose from "moongoose";
import {settingDotEnvDb} from "../config/config.js";

const { db } = settingDotEnvDb();

export const connectDB =  async () => {
    try {
        await mongoose.connect(db.localhost);
        console.log("La base de datos está conectada")
    } catch (error) {
        console.log(error);
    }
};