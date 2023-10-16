import Image from "next/image";
import celular from '../assets/celular.png'
import cuadrado from '../assets/cuadrado.jpeg'
import { Button } from "@nextui-org/react";

export default function Home() {
  return (
    <div className="w-full h-screen relative">
      <Image src={celular} alt="fondo" className="w-full h-full object-cover absolute top-0"/>
      <div className="w-full h-screen flex flex-col justify-center items-center">
      <Button radius="full" variant="shadow" className="uppercase  bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-xl shadow-black">
      Registrarse
    </Button>
      </div>

    </div>
  );
}
