import express from "express";
import cors from "cors";
import { connectDatabase } from "./utils/database";
import { user } from "./router/auth";
import { product } from "./router/product";
import { order } from "./router/order";
import dotnev from "dotenv";

dotnev.config();
connectDatabase();

const PORT = 8000;
const app = express();

app.use(cors({ origin: "*" }));

app.use(express.json());
app.get("/", (req: any, res: any) => {
  res.status(200).send({ success: true, message: "hello world" });
});
app.use("/products", product);
app.use("/user", user);
app.use("/order", order);

app.listen(PORT, () => {
  console.log("Server running");
});
