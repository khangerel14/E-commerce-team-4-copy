import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  orderNumber: String,
  status: {
    type: String,
    enum: [
      "Шинэ захиалга",
      "Бэлтгэгдэж байна",
      "Хүргэлтэгд гарсан",
      "Хүргэгдсэн",
      "Цуцлагдсан",
    ],
    default: "Шинэ захиалга",
  },
  phoneNumber: String,
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: "user",
    require: true,
  },
  deliveryDate: {
    type: Date,
    default: () => Date.now(),
  },
  amountPaid: Number,
  amountToBePaid: Number,
  quantity: Number,
  address: String,
  city: String,
  apartment: String,
  firstName: String,
  lastName: String,
  coupon: {
    type: String,
    default: 0,
  },
  description: String,
  details: [
    {
      type: mongoose.Types.ObjectId,
      ref: "product",
      require: true,
    },
  ],

  createdAt: {
    type: Date,
    default: () => Date.now(),
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(),
  },
});

const OrderModel = mongoose.model("order", OrderSchema);

export { OrderModel };