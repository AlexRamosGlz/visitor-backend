import express, { json } from "express";
import cors from "cors";
import router from "./routes/router.js";
import { reqID } from "./middleware/reqID.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/", reqID);
app.use("/app", router);

app.listen(8080, (req, res) => {
  console.log("Servel Listening...");
});

export default app;
