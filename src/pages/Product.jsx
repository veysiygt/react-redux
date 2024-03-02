import React from "react";
import ProductCard from "../components/ProductCard";
import { useSelector } from "react-redux";
import Modal from "../components/Modal";

const Product = () => {
  const { modal } = useSelector(state => state.modal);
  console.log(modal);

  const buttonFunc = () => {

  }

  return (
    <div>
      <ProductCard />
      {modal && <Modal title={"Urun olustur"} btnText={"olustur"} btnFunc={buttonFunc} />}
    </div>
  );
};

export default Product;
