import express from "express";
import {
  createOrder,
  deleteOrder,
  getAllOrder,
  getOneOrder,
  updateOrder,
} from "../controller/order";
const order = express.Router();
order.route("/").post(createOrder).get(getAllOrder);
order.route("/:id").put(updateOrder).delete(deleteOrder).get(getOneOrder);
export { order };
