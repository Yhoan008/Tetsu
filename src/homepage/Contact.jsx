import React from "react";

export default function Contact() {
  return (
    <section
      className="w-[100%] h-auto flex justify-center items-center py-[50px] "
      id="contacto"
    >
      <div className=" w-[70%] bg-[#bebebe] p-8 rounded-3xl ">
        <h2 className="text-black font-bold text-3xl mb-5 ">CONTACTO</h2>
        <form action="" className="grid grid-cols-2 gap-3 ">
          <label htmlFor="nombre" className="col-span-2 md:col-span-1 ">
            <Input name="nombre" place="Nombre" />
          </label>
          <label htmlFor="apellido" className="col-span-2 md:col-span-1 ">
            <Input name="apellido" place="Apellido" />
          </label>
          <label htmlFor="mail" className="col-span-2">
            <Input name="mail" place="Correo Electronico" />
          </label>
          <label htmlFor="coments" className="col-span-2">
            <Input name="coments" place="Me gustaria decirles ..." />
          </label>
          <input
            type="submit"
            value="Enviar"
            className="w-[100%] bg-[#3898ec]  col-span-2 text-white font-semibold p-2 cursor-pointer hover:bg-[#2a7ac0] "
          />
        </form>
      </div>
    </section>
  );
}

const Input = ({ name, place }) => {
  return name != "coments" ? (
    <input
      type="text"
      name={name}
      id=""
      className="w-[100%] px-2 py-2 focus:border-red-500 "
      placeholder={place}
    />
  ) : (
    <textarea
      name={name}
      id=""
      className="w-[100%] min-h-[100px] py-2 px-2 "
      placeholder={place}
    ></textarea>
  );
};
