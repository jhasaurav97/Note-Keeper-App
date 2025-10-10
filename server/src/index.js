import app from "./app.js";
import dotenv from "dotenv";
import connectDB from "./db/connect.db.js";

dotenv.config({
    path: "./.env"
});

const port = process.env.PORT || 3000;

connectDB()
    .then(() => {
        app.listen(port, () => {
            console.log(`Server is listening on port http://localhost:${port}`);
        })
    })
    .catch((err) => {
        console.error("❌ MongoDB connection failed", err);
        process.exit(1);
    })