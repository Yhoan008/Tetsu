import React from "react";
import { useContext } from "react";
import { AdminContext } from "../App";

export default function Protected({ children }) {
  const { validadmin } = useContext(AdminContext);
  return validadmin ? (
    children
  ) : (
    <div className="pt-[250px] text-center font-bold text-red-600 ">
      USER SIN ACCESO
    </div>
  );
}
