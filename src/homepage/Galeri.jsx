import React, { Component } from "react";
import check from "./../assets/check.png";
import gorroNegro from "./../assets/002.jpg";
import saco from "./../assets/0001.jpg";
import gorra from "./../assets/003.jpg";
import gorraBlanca from "./../assets/007.jpg";
import base from "./../assets/base.jpg";
import base2 from "./../assets/base2.jpg";

export default class Galeri extends Component {
  render() {
    return (
      <section className="flex flex-col lg:flex-row pb-10" id="productos">
        <div className="p-[80px] mt-10 max-w-[500px] ">
          <h1 className="text-2xl font-bold ">Productos</h1>

          <p className="my-2">
            Descubre el poder de nuestros productos deportivos de alto
            rendimiento.
          </p>
          <ul className="my-8 mx-3 ">
            <li>
              <Icon /> Calidad garantizada.
            </li>
            <li>
              <Icon /> Diversos estilos.
            </li>
            <li>
              <Icon /> Economicos.
            </li>
          </ul>
          <a href="/buy">
            <button className="bg-[#383838] px-5 py-3 text-white hover:bg-[#555] ">
              Pide el tuyo
            </button>
          </a>
        </div>
        <div className="w-[100%] flex flex-col sm:flex-row ">
          <div className="w-[100%] sm:w-[50%] h-auto p-4 box-border">
            <Img gorro={gorroNegro} />
            <Img gorro={saco} />
            <Img gorro={gorra} />
          </div>
          <div className="w-[100%] sm:w-[50%] h-auto p-4 box-border">
            <Img gorro={base} />
            <Img gorro={gorraBlanca} />
            <Img gorro={base2} />
          </div>
        </div>
      </section>
    );
  }
}

function Img({ gorro }) {
  return (
    <div className={` overflow-hidden rounded-[20px] w-[100%] mt-5 `}>
      <img src={gorro} alt="product" className=" w-[100%] h-auto " />
    </div>
  );
}

class Icon extends Component {
  render() {
    return (
      <img
        src={check}
        alt="check"
        className="w-[15px] h-[15px] inline my-2 mr-2  "
      />
    );
  }
}
