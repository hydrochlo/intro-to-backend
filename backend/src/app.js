import express from "express";
import userRouter from "./routes/user.route.js";
import postRouter from "./routes/post.route.js";

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));


app.use("/api/v1/users", userRouter);
app.use("/api/v1/posts", postRouter);


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ 
        message: err.message || "Internal Server Error" 
    });
});

export default app;