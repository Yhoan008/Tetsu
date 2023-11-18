import React from "react";
import { useState, useEffect } from "react";
import logo from "./assets/marca.png";
import settin from './assets/settin.png';

export default function Navbar() {
  const [nav, setNav] = useState(window.innerWidth <= 980 ? false : true);

  useEffect(() => {
    window.addEventListener("resize", () => {
      window.innerWidth <= 980 ? setNav(false) : setNav(true);
    });
  });

  return (
    <header className="w-[100%] bg-[black] flex justify-between px-[20px] py-4 fixed top-0 z-30 ">
      <div>
        <a href="/">
          <img
            src={logo}
            alt="logo"
            className="w-[90%] min-w-[200px] cursor-pointer "
          />
        </a>
      </div>
      {nav ? <NavUnactive /> : <NavActive />}
    </header>
  );
}

function NavActive() {
  const [active, setActive] = useState(false);

  return (
    <div
      className={`w-[40px] h-[40px] cursor-pointer`}
      onClick={() => {
        setActive(!active);
      }}
    >
      <div className="w-[100%] h-[100%] relative " >
        <img src={settin} alt="settingIcon" />
      </div>
      <ul
        className={` absolute w-[100vw] h-[70px] bg-[#555] top-[85px] left-[0px] ${
          active == true ? "flex" : "hidden"
        } justify-around p-3 text-white `}
      >
        <li className=" my-[auto] mx-[20px] text-center cursor-pointer">
          <a 
            href="/#conocenos"
          >
            Conocenos
          </a>
        </li>
        <li className="my-[auto] mx-[20px]  text-center cursor-pointer">
          <a href="/buy">Productos</a>
        </li>
        <button className="bg-[#333] mx-10 p-3 hover:bg-[#555] rounded-md  ">
          <a 
            href="/#contacto"
          >
            CONTACTANOS
          </a>
        </button>
      </ul>
    </div>
  );
}

function NavUnactive() {
  return (
    <ul className="text-white flex ">
      <li className=" my-[auto] mx-[20px] text-center cursor-pointer">
        <a href="/#conocenos">Conocenos</a>
      </li>
      <li className="my-[auto] mx-[20px] mr-[100px] text-center cursor-pointer">
        <a href="/buy">Productos</a>
      </li>
      <button className="bg-[#333] mx-10 p-3 hover:bg-[#555] rounded-md  ">
        <a href="/#contacto">CONTACTANOS</a>
      </button>
    </ul>
  );
}
