import express from "express";
import cors from "cors";

const app = express();

// Basic config
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

// cors config
app.use(cors({
    origin: process.env.CORS_ORIGIN?.split(",") || "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));


// Import Routes
import authRouter from "./routes/auth.routes.js";
import notesRoutes from "./routes/note.routes.js";

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/notes", notesRoutes);


app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
        success: false,
        message: err.message || "Internal Server Error",
        errors: err.errors || [],
    })
})

app.get("/", (req, res) => {
    res.send("<h1>Note Keeper App</h1>")
});

export default app;