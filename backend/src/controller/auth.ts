import { Request, Response } from "express";
import { UserModel } from "../model/auth";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

type UserType = {
  email: String;
  name: String;
  password: string;
  shopInformation: String;
  city: String;
  district: String;
  khoroo: String;
  exprience: String;
  product: String;
  role: string;
};

const createUser = async (req: Request, res: Response) => {
  try {
    const {
      email,
      name,
      password,
      shopInformation,
      city,
      district,
      khoroo,
      exprience,
      product,
      role,
    }: Required<UserType> = req.body;
    const createUser = await UserModel.create({
      email: email,
      name: name,
      password: password,
      shopInformation: shopInformation,
      city: city,
      district: district,
      khoroo: khoroo,
      exprience: exprience,
      product: product,
      role: role,
    });
    res.status(201).send({ success: true, createUser });
  } catch (error) {
    res.status(500).send({ success: false, error });
  }
};

const logIn = async (req: Request, res: Response) => {
  try {
    const { email, password }: Required<UserType> = req.body;
    const user = await UserModel.findOne({
      email: email,
      password:password
    }).select("+password");

    if (!user) {
      return res.status(404).send({ msg: "user not found" });
    }

    const isValid = bcrypt.compare(password, user.password as string);

    if (!isValid) {
      return res.status(400).send({ msg: "Email or password incorrect" });
    }

    const token = jwt.sign({ user }, "MY_SECRET_KEY");

    return res.status(200).send({ success: true, token, email});
  } catch (error) {
    res.status(500).send(error);
  }
};

const getUser = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    const getUser = await UserModel.findOne({ email: email });
    res.status(200).send({ success: true, getUser });
  } catch (error) {
    res.status(500).send({ success: false, error });
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    const updateId = req.params.id;
    const { email, name, shopInformation } = req.body;
    const updateUser = await UserModel.findByIdAndUpdate(updateId, {
      email: email,
      name: name,
      shopInformation: shopInformation,
    });
    res.status(201).send({ success: true, updateUser });
  } catch (error) {
    res.status(500).send({ success: false, error });
  }
};

const getAllUser = async (req: Request, res: Response) => {
  try {
    const getAll = await UserModel.find();
    res.status(200).send({ success: true, getAll });
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    const deleteId = req.body.id;
    const deleteUser = UserModel.findByIdAndDelete(deleteId);
    res.status(200).send({ success: true, deleteUser });
  } catch (error) {
    res.status(500).send({ success: false, error });
  }
};

export { createUser, getUser, updateUser, deleteUser, getAllUser, logIn };