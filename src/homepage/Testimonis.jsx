import React from "react";
import { persona } from "./content";
import monster from "./../assets/tetsumonster.jpg";
import drake from "./../assets/drake-min.jpg";
import josh from "./../assets/0002.jpg";

export default function Testimonis() {
  return (
    <section className="flex flex-col text-center ">
      <h2 className=" font-bold text-3xl ">Testimonios</h2>
      <div className="flex justify-between md:flex-row flex-col ">
        {persona.map((person, index) => {
          const names = [monster, drake, josh];
          return (
            <div key={index} className=" border-[1px] border-slate-200 p-3 m-5">
              <p>{person.test}</p>
              <div className="flex flex-row items-center justify-start md:justify-center mt-5 bg-slate-200 py-4 px-5 md:px-1">
                <img
                  src={names[person.foto]}
                  alt="perfil"
                  className="w-[60px] h-auto rounded-full  mr-5"
                />
                <h2 className="text-lg font-semibold ">{person.name}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
