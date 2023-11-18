import React from "react";
import { products } from "./products";
import sum from "../assets/sum.png";

export default function Buy() {
  return (
    <section className=" flex">
      <div className="flex justify-around items-start flex-wrap w-[100%]">
        <Boxes />
      </div>
      <div className="bg-black w-[30%] ">hola mundo</div>
    </section>
  );
}

function Boxes() {
  return products.map((product) => {
    return (
      <div
        key={product.id}
        className=" bg-[#cacaca] hover:scale-105 transition-all rounded-2xl max-w-[300px] min-w-[240px] p-4 m-5 relative mx-5 my-4 "
      >
        <div>
          <img src={product.img} alt="gorra negra" />
        </div>
        <h1 className="font-semibold text-2xl ">{product.title}</h1>
        <p>{product.description}</p>
        <h2 className="font-bold text-2xl text-green-950 my-2 ">{product.precio}</h2>
        <div className="absolute bottom-0 right-0 max-w-[40px] m-2 cursor-pointer hover:bg-[#e0e0e0] rounded-full ">
          <img src={sum} alt="icon" className="relative scale-110 " />
        </div>
      </div>
    );
  });
}
