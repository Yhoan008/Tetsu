import React from "react";
import { useState, useEffect } from "react";
import marca from "./assets/marca.png";
import logo from "./assets/logo.png";
import settin from "./assets/settin.png";

import { Link } from "react-router-dom";

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
        <Link
          to="/"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <img
            src={window.innerWidth < 400 ? logo : marca}
            alt="logo"
            className="w-auto  max-h-[45px] cursor-pointer "
          />
        </Link>
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
      <div className="w-[100%] h-[100%] relative ">
        <img src={settin} alt="settingIcon" />
      </div>
      <ul
        className={` absolute w-[100vw] h-auto bg-[#555] top-[76px] left-[0px] ${
          active == true
            ? window.innerWidth < 450
              ? "flex flex-col gap-8 py-10 "
              : "flex"
            : "hidden"
        } justify-around p-3 text-white `}
      >
        <li className=" my-[auto] mx-[20px] text-center cursor-pointer">
          <Link
            to="/"
            onClick={() => {
              //2700 > 640
              window.scrollTo({
                top:
                  window.innerWidth > 640
                    ? 2550
                    : window.innerWidth < 400
                    ? 4300
                    : 5500,
                behavior: "smooth",
              });
            }}
          >
            Conocenos
          </Link>
        </li>
        <li className="my-[auto] mx-[20px]  text-center cursor-pointer">
          <Link to="/buy">Productos</Link>
        </li>
        <Link
          to="/"
          onClick={() => {
            window.scrollTo({
              top:
                window.innerWidth > 640
                  ? 4400
                  : window.innerWidth < 400
                  ? 6400
                  : 7200,
              behavior: "smooth",
            });
          }}
          className="flex justify-center"
        >
          <button className="bg-[#333] mx-10 p-3 hover:bg-[#555] rounded-md  ">
            CONTACTANOS
          </button>
        </Link>
      </ul>
    </div>
  );
}

function NavUnactive() {
  return (
    <ul className="text-white flex ">
      <li className=" my-[auto] mx-[20px] text-center cursor-pointer">
        <Link
          to="/"
          onClick={() => {
            window.scrollTo({ top: 1700, behavior: "smooth" });
          }}
        >
          Conocenos
        </Link>
      </li>
      <li className="my-[auto] mx-[20px] mr-[100px] text-center cursor-pointer">
        <Link to="/buy">Productos</Link>
      </li>
      <Link
        to="/"
        onClick={() => {
          window.scrollTo({ top: 2800, behavior: "smooth" });
        }}
      >
        <button className="bg-[#333] mx-10 p-3 hover:bg-[#555] rounded-md  ">
          CONTACTANOS
        </button>
      </Link>
    </ul>
  );
}
