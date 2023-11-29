import React, { useState } from "react";
import { products } from "./products";
import activeStart from "../assets/activeStart.png";
import unactiveStart from "../assets/unactiveStart.png";
import check from "../assets/check.png";

export default function Product() {
  return (
    <section className=" flex justify-center items-center bg-gray-300 pb-10 flex-col ">
      <div className="mt-[100px] rounded-lg p-5 grid grid-cols-2 pt-10 pb-10 gap-5 w-[90%] bg-white  ">
        <div className=" flex flex-col col-span-2">
          <h1 className=" font-bold text-3xl  pl-10 ">{products[0].title}</h1>
          <div className=" w-[100%] h-[2px] bg-gray-500 mt-2 " />
        </div>
        <div className=" w-[100%] overflow-hidden  flex pl-10 ">
          <img
            src={products[0].img}
            alt="product"
            className="w-[300px] rounded-lg"
          />
        </div>
        <div className=" grid grid-cols-2 grid-rows-[1fr_1fr_1fr] pt-10 ">
          <h1 className="text-3xl max-h-3 ">{products[0].precio}</h1>
          <Score />
          <p className=" col-span-2 "> {products[0].description} </p>
          <div className=" col-span-2 flex flex-wrap ">
            <div className="flex ">
              <img src={check} alt="check" className="w-[20px] h-[20px] " />
              <h1 className="text-lg relative bottom-1 pl-2 min-w-[200px] ">
                100% Algodon
              </h1>
            </div>
            <div className="flex ">
              <img src={check} alt="check" className="w-[20px] h-[20px] " />
              <h1 className="text-lg relative bottom-1 pl-2 min-w-[200px] ">
                Alto (cm) 30cm
              </h1>
            </div>
            <div className="flex ">
              <img src={check} alt="check" className="w-[20px] h-[20px] " />
              <h1 className="text-lg relative bottom-1 pl-2 min-w-[200px] ">
                Ancho (cm) 20cm
              </h1>
            </div>
            <div className="flex ">
              <img src={check} alt="check" className="w-[20px] h-[20px] " />
              <h1 className="text-lg relative bottom-1 pl-2 min-w-[200px] ">
                Color : Negro
              </h1>
            </div>
          </div>
        </div>
        <div className="px-10 py-5 flex items-end col-span-2 justify-end ">
          <div>
            <h1>Cantidad: </h1>
            <input
              type="number"
              name="cantidad"
              className="p-2 rounded-xl border-2 border-gray-400 "
            />
          </div>
          <button className=" rounded-xl font-bold p-3 bg-slate-600 text-white ml-10 ">
            AGREGAR
          </button>
        </div>
      </div>
      <Catalogo />
    </section>
  );
}

function Catalogo() {
  return (
    <section className="max-w-[90%]  text-center pt-10 flex flex-wrap justify-around ">
      <h1 className="font-bold text-xl w-[100%] mb-10 ">
        EXPLORA MAS PRODUCTOS
      </h1>
      {products.map((product, index) => {
        return (
          <div
            key={index}
            className="bg-[#b8b7b7] hover:scale-105 transition-all rounded-2xl max-w-[300px] min-w-[240px] p-4 m-5 relative flex flex-col items-start"
          >
            <div className="cursor-pointer">
              <img src={product.img} alt="productos" />
            </div>
            <h1 className="font-semibold text-2xl cursor-pointer mt-5 ">
              {product.title}
            </h1>
            <p className="text-left ">{product.description}</p>
            <h2 className="font-bold text-2xl text-green-950 mt-2 ">
              {product.precio}
            </h2>
          </div>
        );
      })}
    </section>
  );
}

function Score() {
  const starts = [true, true, true, true, false];

  return (
    <div className=" flex flex-row ">
      {starts.map((item, index) => {
        return (
          <div key={index} className="w-[35px] h-[35px] cursor-pointer ">
            <img
              src={!item ? unactiveStart : activeStart}
              alt="Start"
              className="w-[100%] h-auto "
            />
          </div>
        );
      })}
    </div>
  );
}
