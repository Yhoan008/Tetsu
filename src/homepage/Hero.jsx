import React, { useState } from "react";
import ReactPlayer from "react-player";
import power1 from "./../assets/power.mp4";
import power2 from "./../assets/power2.mp4";
import power3 from "./../assets/power3.mp4";

export default function Hero() {
  return (
    <div className="w-[100vw] h-auto bg-black p-[50px] mt-[50px]">
      <div className="text-white flex justify-around flex-col md:flex-row   p-10 ">
        <div className="max-w-[50%] ">
          <h1 className="font-extrabold text-5xl my-8">
            Sé imparable. Supera tus límites.
          </h1>
          <p className="text-xl">
            Proveemos productos deportivos de calidad, asesoramiento experto,
            entrenamientos personalizados y promovemos un estilo de vida activo
            y saludable.
          </p>
        </div>
        <div className="relative w-[190px] h-[340px] mt-[50px] lg:mt-[0px]  rounded-[20%] bg-black  self-start ">
          <div className="absolute w-[105%] h-[101%] z-20 shadow-inset " />
          <Player/>
        </div>
      </div>
    </div>
  );
}

function Player() {
  const power = [power1, power2, power3];
  const [video, setVideo] = useState(0);

  return (
    <ReactPlayer
      url={power[video]}
      playing
      muted
      width={190}
      height={340}
      onEnded={() => {
        video == 0
          ? setVideo(1)
          : video == 1
          ? setVideo(2)
          : video == 2
          ? setVideo(0)
          : "";
      }}
      className="absolute z-10 bg-black"
    />
  );
}
