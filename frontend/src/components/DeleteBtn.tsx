import React from "react";
import axios from "axios";
import { Delete } from "@/images";
import dotenv from "dotenv";
dotenv.config();

export const DeleteBtn = ({ val }: any) => {
  const URL = process.env.NEXT_PUBLIC_MONGO_CONNECTION;
  const deleteItem = async (id: Number) => {
    try {
      const items = await axios.delete(`${URL}/products/${id}`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <button className="flex" onClick={() => deleteItem(val)}>
        <Delete />
      </button>
    </div>
  );
};
