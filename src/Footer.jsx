import React from "react";
import {Link} from 'react-router-dom';
import face from "./assets/facebook.png";
import insta from "./assets/instagram.png";
import youtube from "./assets/youtube.png";

export default function Footer() {
  const redes = [face, insta, youtube];

  return (
    <section className="w-[100%] px-[20px] py-[30px] grid grid-cols-2 grid-rows-2 gap-10 absolute bottom-0 ">
      <div className="h-[30px] flex justify-start col-span-2 ">
        {redes.map((red, index) => {
          return (
            <li className="list-none max-w-[50px] mx-5" key={index}>
              <a href="#" className="h-[100%]">
                <img
                  src={red}
                  alt="Redes Sociales"
                  className={`h-[100%] ${red == youtube ? "scale-y-125" : ""} `}
                />
              </a>
            </li>
          );
        })}
      </div>
      <p className=" col-span-2 order-3 md:order-2 md:col-span-1 ">
        <Link to='/admin' className="cursor-pointer" >©</Link >
        2022 Company name. All rights reserved
      </p>
      <div className="flex gap-4 order-2 md:order-3 justify-start md:justify-end align-bottom  ">
        <li className="list-none underline">
          <a href="#">Terms Of Use</a>
        </li>
        <li className="list-none underline ">
          <a href="#">Privacy Policy</a>
        </li>
      </div>
    </section>
  );
}
