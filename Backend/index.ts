import "./database/connect";
import express from "express";
import cors from "cors";
import infoRouter from "./router/info.router";
import bodyParser from "body-parser";

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/info", infoRouter);
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

export default app;
