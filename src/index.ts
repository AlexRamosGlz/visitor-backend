import "reflect-metadata";
import express from "express";
import router from "@routes/router";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", router);

app.listen(process.env.API_PORT || 8000, () => {
  console.log("Server is running on port " + (process.env.API_PORT || 8000));
});
