import dotenv from 'dotenv';
dotenv.config();
import express from "express";
import { connectDB } from "./config/db";
import messageRoutes from "./routes/message.route";
import animationRoutes from "./routes/animation.route";


const app = express();
app.use( express.json({ limit: '50mb' }));

app.use("/messages", messageRoutes);
app.use("/animations", animationRoutes);

app.listen(process.env.PORT || 3000, () => {
    connectDB();
    console.log("Server is running on port 3000");
});
