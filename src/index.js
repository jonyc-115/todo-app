import express from "express";
import usersRouter from "./routes/auth.routes.js";
import tasksRouter from "./routes/tasks.routes.js";
import morgan from "morgan";
import { connectDB } from "./db.js";
import cors from "cors";

async function main() {
  await connectDB();
}

main();

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use("/api", usersRouter);
app.use("/api", tasksRouter);

app.listen(4000, () => {
  console.log("Server listen on port 4000");
});
