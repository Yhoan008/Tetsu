import React from "react";
import { useState, useEffect } from "react";
import { products } from "./products";
import sum from "../assets/sum.png";
import gym from "../assets/gym.jpg";
import search from "../assets/search.png";
import fire from "../assets/fire.png";
import juan from "../assets/juan.jpg";
import sellcar from "../assets/sellcar.png";

export default function Buy() {
  const [pantalla, setpantalla] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setpantalla(window.innerWidth);
    });
  });
  return (
    <section className=" flex flex-col mt-[100px] items-center justify-center ">
      <Fond pantalla={pantalla} setpantalla={setpantalla} />
      <div
        className={`self-start mx-[5%] my-10 w-[90%] flex justify-between md:flex-row flex-col  `}
      >
        <div className="max-h-[40px] w-[100%] flex ">
          <h1 className="text-2xl font-bold ">
            CONOCE NUESTROS PRODUCTOS
            <img
              src={fire}
              alt="fireIcon"
              className="h-[100%] max-h-[40px] inline relative bottom-1 ml-2 "
            />
          </h1>
        </div>
        <div className=" relative w-[400px] h-[40px] flex flex-row mt-16 md:mt-0  ">
          <div
            className=" w-auto h-[100%] cursor-pointer "
            onClick={() => {
              console.error("Peticion de Busquda hecha");
            }}
          >
            <img src={search} alt="searchIcon" className="h-[100%] w-auto " />
          </div>
          <input
            type="text"
            className="h-[100%] md:w-[80%] w-[50%] ml-2 border-2 border-gray-500 rounded-xl px-2 "
          />
        </div>
      </div>
      <div className="flex justify-around items-start flex-wrap w-[100%]">
        <Boxes />
      </div>
      <Sellcar />
    </section>
  );
}

function Sellcar() {
  return (
    <div className=" w-[80px] w-[80px] fixed bottom-8 right-8 cursor-pointer ">
      <img src={sellcar} alt="sellCar " className="w-[100%] " />
    </div>
  );
}

function Fond({ pantalla }) {
  return (
    <div
      className={` w-[90%] max-h-[200px] h-auto rounded-3xl overflow-hidden w-[100%] relative   `}
    >
      <img
        src={pantalla < 550 ? juan : gym}
        alt="gym"
        className=" w-[100%] relative "
      />
    </div>
  );
}

function Boxes() {
  return products.map((product) => {
    return (
      <div
        key={product.id}
        className="bg-[#cacaca] hover:scale-105 transition-all rounded-2xl max-w-[300px] min-w-[240px] p-4 m-5 relative mx-5 my-4 "
      >
        <div>
          <img src={product.img} alt="gorra negra" />
        </div>
        <h1 className="font-semibold text-2xl ">{product.title}</h1>
        <p>{product.description}</p>
        <h2 className="font-bold text-2xl text-green-950 my-2 ">
          {product.precio}
        </h2>
        <div className="absolute bottom-0 right-0 max-w-[40px] m-2 cursor-pointer hover:bg-[#e0e0e0] rounded-full ">
          <img src={sum} alt="icon" className="relative scale-110 " />
        </div>
      </div>
    );
  });
}
