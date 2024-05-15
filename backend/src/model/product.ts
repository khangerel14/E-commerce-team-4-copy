import mongoose from 'mongoose'

const ProductSchema = new mongoose.Schema({
    productName: String,
    categoryId: String,
    price: Number,
    qty: Number,
    productCode: Number,
    thumbnails: String,
    images: [String],
    coupon: String,
    salePercent: Number,
    description: String,
    viewsCount: Number,
    residual: Number,
    sold: Number,
    mainCate: String,
    subCate: String,
    createdAt: {
        type: Date,
        default: () => Date.now()
    },
    updatedAt: {
        type: Date,
        default: () => Date.now()
    },
});

const ProductModel = mongoose.model("product", ProductSchema);

export { ProductModel }