import React, { useEffect, useRef, useState } from "react";
import teamTetsu from "./../assets/teamtetsu2.jpg";
import monster from "./../assets/tetsumonster.jpg";
import family from "./../assets/tetsufamily.jpg";
import teamback from "./../assets/teamtetsu.jpg";
import { content } from "./content.js";

export default function Team() {
  const [win, setwin] = useState(window.innerWidth);
  const box = useRef(null);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setwin(window.innerWidth);
    });

    box.current.style.scrollBehavior = "smooth";
  }, []);

  return (
    <section
      className="w-[100%] flex flex-col justify-center items-center p-[40px] "
      id="conocenos"
    >
      <div className="w-[100%] flex justify-center flex-col items-center ">
        <h1 className="text-4xl font-bold mt-5 ">Familia Tetsu</h1>
        <p className="w-[80%] sm:w-[600px] text-center mt-5 ">
          {content.title}
        </p>
      </div>
      <div
        className="w-[100%] overflow-x-hidden pt-[50px] transition  "
        ref={box}
      >
        <div className=" w-[360vw] md:w-[185vw] grid grid-cols-4 md:grid-cols-2 ">
          {win > 1024 ? (
            <>
              <div className=" w-[100%] flex flex-row justify-around ">
                <Box link={teamTetsu} text={content.contentOne} />
                <Box link={monster} text={content.contentTwo} />
                <Box link={family} text={content.contentThree} />
              </div>
              <div className=" w-[100%] flex flex-row justify-around ">
                <Box link={teamback} text={content.title} />
              </div>
            </>
          ) : win > 768 && win < 1024 ? (
            <>
              <div className=" w-[100%] flex flex-row justify-around ">
                <Box link={teamTetsu} text={content.contentOne} />
                <Box link={monster} text={content.contentTwo} />
              </div>
              <div className=" w-[100%] flex flex-row justify-around ">
                <Box link={family} text={content.contentThree} />
                <Box link={teamback} text={content.contentFour} />
              </div>
            </>
          ) : (
            <>
              <div className=" w-[100%] flex flex-row justify-center">
                <Box link={teamTetsu} text={content.contentOne} />
              </div>
              <div className=" w-[100%] flex flex-row justify-center">
                <Box link={monster} text={content.contentTwo} />
              </div>
              <div className=" w-[100%] flex flex-row justify-center">
                <Box link={family} text={content.contentThree} />
              </div>
              <div className=" w-[100%] flex flex-row justify-center">
                <Box link={teamback} text={content.contentFour} />
              </div>
            </>
          )}
        </div>
      </div>
      <div className="w-[80px] md:w-[40px] h-[20px] flex justify-between  ">
        <Carrosel win={win} box={box} />
      </div>
    </section>
  );
}

function Carrosel({ win, box }) {
  const [smart, setSmart] = useState([
    {
      couter: 0,
      active: true,
    },
    {
      couter: 1,
      active: false,
    },
    {
      couter: 2,
      active: false,
    },
    {
      couter: 3,
      active: false,
    },
  ]);

  function click(couter) {
    box.current.scrollLeft = (box.current.scrollWidth * couter) / 4;
    let temporal = [...smart];
    temporal.forEach((state) => {
      state.active = false;
    });
    temporal[couter].active = true;
    setSmart(temporal);
  }

  return (
    <>
      {win > 768 ? (
        <>
          <Point
            active={smart[0].active}
            couter={smart[0].couter}
            click={click}
          />
          <Point
            active={smart[3].active}
            couter={smart[3].couter}
            click={click}
          />
        </>
      ) : (
        <>
          <Point
            active={smart[0].active}
            couter={smart[0].couter}
            click={click}
          />
          <Point
            active={smart[1].active}
            couter={smart[1].couter}
            click={click}
          />
          <Point
            active={smart[2].active}
            couter={smart[2].couter}
            click={click}
          />
          <Point
            active={smart[3].active}
            couter={smart[3].couter}
            click={click}
          />
        </>
      )}
    </>
  );
}

function Point({ active, click, couter }) {
  return (
    <div
      className={`w-3 h-3 rounded-2xl cursor-pointer ${
        active ? "bg-slate-700" : "bg-slate-500"
      } `}
      onClick={() => {
        click(couter);
      }}
    />
  );
}

function Box({ link, text }) {
  return (
    <div className=" w-[60%] md:w-[33%]  mr-[40px] ">
      <div className="w-[100%]">
        <img src={link} alt="TeamTetsu" className="w-[100%] h-auto " />
      </div>
      <p className="px-8 py-5 "> {text} </p>
    </div>
  );
}
