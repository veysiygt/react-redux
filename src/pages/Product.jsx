import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import { useSelector, useDispatch } from "react-redux";
import Modal from "../components/Modal";
import Button from "../components/Button";
import Input from "../components/Input";
import { createDataFunc } from "../redux/dataSlice";
import { modalFunc } from "../redux/modalSlice";

const Product = () => {
  const { modal } = useSelector((state) => state.modal);
  const { data } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const [productInfo, setProductInfo] = useState({
    name: "",
    price: "",
    url: "",
  });

  const onChangeFunc = (e, type) => {
    if (type === "url") {
      setProductInfo((prev) => ({
        ...prev,
        [e.target.name]: URL.createObjectURL(e.target.files[0]),
      }));
    } else {
      setProductInfo((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    }
  };

  console.log("data:", data);

  const buttonFunc = () => {
    dispatch(createDataFunc(productInfo));
    dispatch(modalFunc());
  };

  const contentModal = (
    <>
      <Input
        type={"text"}
        placeholder={"urun ekle"}
        name={"name"}
        id={"name"}
        onChange={(e) => onChangeFunc(e, "name")}
      />
      <Input
        type={"text"}
        placeholder={"Fiyat ekle"}
        name={"price"}
        id={"price"}
        onChange={(e) => onChangeFunc(e, "price")}
      />
      <Input
        type={"file"}
        placeholder={"Resim Sec"}
        name={"url"}
        id={"url"}
        onChange={(e) => onChangeFunc(e, "url")}
      />
      <Button btnText={"Ekle"} onClick={buttonFunc} />
    </>
  );

  return (
    <div>
      <div className="flex items-center flex-wrap">
        {data?.map((dt, i) => {
          return <ProductCard key={i} dt={dt} />;
        })}
      </div>
      <ProductCard />
      {modal && <Modal title={"Urun olustur"} content={contentModal} />}
    </div>
  );
};

export default Product;
