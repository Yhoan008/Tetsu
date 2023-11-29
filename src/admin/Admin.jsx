import React, { useState, useContext } from "react";
import { AdminContext } from "../App";
import { useNavigate } from "react-router-dom";

function Admin(props) {
  const { validadmin, setValidadmin } = useContext(AdminContext);
  const [user, setUser] = useState(null);
  const [pass, setPass] = useState(null);

  const navigate = useNavigate();

  const changeuser = (event) => {
    setUser(event.target.value);
  };
  const changepass = (event) => {
    setPass(event.target.value);
  };

  const validate = async(event) => {
    event.preventDefault();
    const data = {
      user: user,
      pass: pass,
    };

    await fetch("http://localhost:3000/validateAdmin", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8 ",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setValidadmin(data.user);
      })
      .catch((error) => {
        console.log(error);
      });

    if (validadmin) {
      navigate("/admincontrol");
    }
  };

  return (
    <div
      className="mt-[90px] mb-10 w-[100%] h-auto flex justify-center items-center h-[60vh]"
      onSubmit={validate}
    >
      <form className="w-[50%] p-4 gap-3 flex flex-col " action="/admin">
        <h1 className="font-bold ">Usuario:</h1>
        <input
          onChange={changeuser}
          type="text"
          placeholder="User"
          className="p-2 rounded-xl border-2 border-gray-500 "
        />
        <h1 className="font-bold ">Contraseña:</h1>
        <input
          onChange={changepass}
          type="password"
          placeholder="Password"
          className="p-2 rounded-xl border-2 border-gray-500 "
        />
        <button className="p-2 border-2 bg-indigo-500 w-[20%] min-w-[90px] font-bold rounded-lg ">
          ENVIAR
        </button>
      </form>
    </div>
  );
}

export default Admin;
