import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { BsThreeDots } from "react-icons/bs";
import { deleteDataFunc } from "../redux/dataSlice";

const ProductCard = ({ dt }) => {
  const [openEdit, setOpenEdit] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className="w-[200px] h-[200px] relative m-2 rounded-md">
      <img className="w-full h-full rounded-md" src={dt?.url} alt="img" />
      <div className="absolute left-0 bottom-0 bg-indigo-600 text-white w-full px-2">
        <div className="text-lg font-semibold">{dt?.name}</div>
        <div>{dt?.price}$</div>
      </div>
      <div
        onClick={() => setOpenEdit(!openEdit)}
        className="absolute top-0 right-2 cursor-pointer"
      >
        <BsThreeDots color="white" size={24} />
      </div>

      {openEdit && (
        <div className="bg-black border border-white text-white absolute top-5 right-2 p-2 text-sm">
          <div onClick={() => dispatch(deleteDataFunc(dt?.id))} className="cursor-pointer">Sil</div>
          <div className="cursor-pointer">Düzenle</div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
