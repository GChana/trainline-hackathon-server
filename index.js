import express from "express";
import cors from "cors";
import exampleRoute from "./routes/exampleRoute.js";

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/example", exampleRoute);

app.get("/api/test", (req, res) => {
  res.send("Hello Trains Over Plains Final Test!");
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
