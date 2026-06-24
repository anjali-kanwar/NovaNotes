import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import {connectDB} from "./config/db.js";
import dotenv from "dotenv";
import dns from "dns";

dns.setServers(["1.1.1.1","8.8.8.8"]);

dotenv.config();

const app=express();
const PORT=process.env.PORT || 5001;

// middleware
app.use(express.json()); // this middleware will parse JSON bodies: req.body

// simple middleware

// app.use((req, res, next) => {
//     console.log("We just got a new req");
//     next();
// });

app.use("/api/notes",notesRoutes);

connectDB().then(()=>{
    app.listen(PORT, ()=>{
    console.log("Server is started on PORT:", PORT);
});
});