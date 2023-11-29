import React, { useState, useEffect } from "react";
import activeStart from "../assets/activeStart.png";
import unactiveStart from "../assets/unactiveStart.png";
import { catallog } from "./catallog";

export default function Catalogo() {
  const [starts, setStarts] = useState([false, false, false, false, false]);
  const formData = new FormData();

  const [name, setName] = useState(null);
  const [cost, setCost] = useState(null);
  const [descrip, setDescrip] = useState(null);
  const [score, setScore] = useState(null);
  const [images, setImages] = useState(null);

  const sendProduct = (e) => {
    e.preventDefault();

    if (
      name != null &&
      cost != null &&
      descrip != null &&
      score != null &&
      images != null
    ) {
      formData.append("name", `${name}`);
      formData.append("cost", cost);
      formData.append("descrip", `${descrip}`);
      formData.append("score", score);

      for (const image of images) {
        formData.append("images", image);
      }

      console.log(formData);

      fetch("http://localhost:3000/catallog", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  return (
    <section className="pt-20 w-[100%] flex justify-center mb-10 flex-col items-center ">
      <form
        className="max-w-[500px] grid sm:grid-cols-2 grid-cols-1 gap-2 items-start mt-10 bg-gray-300 rounded-xl py-10 px-10 "
        onSubmit={sendProduct}
      >
        <h1 className="font-bold">Nombre del producto:</h1>
        <input
          type="text  "
          className="p-1 border-2 border-slate-500 rounded-xl "
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <h1 className="font-bold">Precio:</h1>
        <input
          type="number"
          className="p-1 border-2 border-slate-500 rounded-xl "
          onChange={(event) => {
            setCost(event.target.value);
          }}
        />
        <h1 className="font-bold">Descripción:</h1>
        <textarea
          className=" border-2 border-slate-500 rounded-xl p-1 "
          cols="10"
          rows="5"
          onChange={(event) => {
            setDescrip(event.target.value);
          }}
        />
        <h1 className="font-bold">Puntuación:</h1>
        <Starts
          starts={starts}
          setStarts={setStarts}
          score={score}
          setScore={setScore}
        />
        <h1 className="font-bold mt-4 ">Imagenes:</h1>
        <input
          type="file"
          className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
          multiple="multiple"
          onChange={(event) => {
            setImages(event.target.files);
          }}
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-1 mt-10 rounded">
          AGREGAR
        </button>
      </form>
      <Catallog />
    </section>
  );
}

function Catallog() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/catallog", {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setProductos(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <section className="w-[100%] h-auto text-center pt-10 ">
      <h1 className="font-bold text-xl ">CATALOGO DE PRODUCTOS</h1>
      {catallog.map((product, index) => {
        console.log('./'+product.images[0])
        return (
          <div
            key={index}
            className="bg-[#cacaca] hover:scale-105 transition-all rounded-2xl max-w-[300px] min-w-[240px] p-4 m-5 relative mx-5 my-4 "
          >
            <div>
              <img src={`../${product.images[0]}`} alt="productos" />
            </div>
            <h1 className="font-semibold text-2xl ">{product.name}</h1>
            <p>{product.descrip}</p>
            <h2 className="font-bold text-2xl text-green-950 my-2 ">
              {product.cost}
            </h2>
          </div>
        );
      })}
    </section>
  );
}

function Starts({ starts, setStarts, score, setScore }) {
  return (
    <div className=" flex flex-row ">
      {starts.map((item, index) => {
        return (
          <div
            key={index}
            className="w-[50px] h-[50px] cursor-pointer "
            onMouseEnter={() => {
              if (score == null) {
                let arreglo = new Array(5).fill(false);
                for (let i = 0; i <= index; i++) {
                  arreglo[i] = true;
                }
                setStarts(arreglo);
              }
            }}
            onMouseLeave={() => {
              if (score == null) {
                let arreglo = new Array(5).fill(false);
                setStarts(arreglo);
              }
            }}
            onClick={() => {
              let arreglo = new Array(5).fill(false);
              for (let i = 0; i <= index; i++) {
                arreglo[i] = true;
              }
              let score = index + 1;
              setStarts(arreglo);
              setScore(score);
            }}
          >
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
