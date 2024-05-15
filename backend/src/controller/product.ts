import { Request, Response } from "express";
import { ProductModel } from "../model/product";

type ProductType = {
  productName: String;
  categoryId: String;
  price: Number;
  qty: Number;
  productCode: Number;
  thumbnails: String;
  images: String;
  coupon: String;
  salePercent: Number;
  description: String;
  viewsCount: Number;
  residual: Number;
  sold: Number;
  mainCate: String;
  subCate: String;
  createdAt: Date;
  updatedAt: Date;
};

const createProduct = async (req: Request, res: Response) => {
  try {
    const {
      productName,
      categoryId,
      price,
      qty,
      productCode,
      thumbnails,
      images,
      coupon,
      salePercent,
      description,
      viewsCount,
      residual,
      sold,
      mainCate,
      subCate,
    }: Required<ProductType> = req.body;
    const Product = await ProductModel.create({
      productName: productName,
      categoryId: categoryId,
      price: price,
      qty: qty,
      productCode: productCode,
      thumbnails: thumbnails,
      images: images,
      coupon: coupon,
      salePercent: salePercent,
      description: description,
      viewsCount: viewsCount,
      residual: residual,
      sold: sold,
      mainCate: mainCate,
      subCate: subCate,
    });
    res.status(201).send({ success: true, Product });
  } catch (error) {
    res.status(500).send({ success: false, error });
  }
};

const getAllProduct = async (req: Request, res: Response) => {
  try {
    const getAll = await ProductModel.find();
    res.status(200).send({ success: true, getAll });
  } catch (error) {
    res.status(500).send({ success: false, error });
  }
};

const getProduct = async (req: Request, res: Response) => {
  try {
    const getId = req.params.id;
    const getData = await ProductModel.findById(getId);
    res.status(200).send({ success: true, getData });
  } catch (error) {
    res.status(500).send({ success: false, error });
  }
};

const deleteById = async (req: Request, res: Response) => {
  try {
    const deleteId = req.params.id;
    const Response = await ProductModel.findByIdAndDelete(deleteId);
    res.status(200).send({ success: true, Response });
  } catch (error) {
    res.status(500).send({ success: false, error });
  }
};

const updateById = async (req: Request, res: Response) => {
  try {
    const updateProduct = req.params.id;
    const {
      productName,
      categoryId,
      price,
      qty,
      productCode,
      thumbnails,
      images,
      coupon,
      salePercent,
      description,
      viewsCount,
      residual,
      sold,
      mainCate,
      subCate,
    } = req.body;
    const Response = await ProductModel.findByIdAndUpdate(updateProduct, {
      productName,
      categoryId,
      price,
      qty,
      productCode,
      thumbnails,
      images,
      coupon,
      salePercent,
      description,
      viewsCount,
      residual,
      sold,
      mainCate,
      subCate,
    });
    res.status(200).send({ success: true, Response });
  } catch (error) {
    res.status(500).send({ success: false, error });
  }
};

export { createProduct, getAllProduct, deleteById, updateById, getProduct };
