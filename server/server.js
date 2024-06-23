
import dotenv from 'dotenv'
dotenv.config();
import express from 'express';
import cakeRoutes from './routes/cake.routes.js';
import mongoose  from 'mongoose';

const app = express();

app.use(express.json());
app.use("/api", cakeRoutes);

mongoose.connect(process.env.DB_URI).then(() => {
    console.log("Connection successfull");
    app.listen(8081 ,() => {
        console.log(`Listening on port: ${8081}`)
    });
}).catch(() => {
    console.log("error connecting to DB")
})
