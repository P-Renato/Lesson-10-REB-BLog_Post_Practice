import express from 'express';
import cors from "cors";
import usersRouter from "./routers/users"
import postsRouter from './routers/posts'

const app = express();

// middleware
app.use(express.json())
app.use(cors());

// routers
app.use("/users", usersRouter)
app.use("/posts", postsRouter)













const port = process.env.PORT || 5001;
app.listen(port, ()=> console.log("🚀 Server is on localhost: ", port));