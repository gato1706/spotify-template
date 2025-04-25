import React from "react";
import {
  Home as HomeIcon,
  Search,
  Library,
  ChevronLeft,
  ChevronRight,
  Play,
  Shuffle,
  SkipBack,
  SkipForward,
  Repeat,
  Mic2,
  LayoutList,
  Laptop2,
  Volume,
  Fullscreen,
  Maximize2,
} from "lucide-react";
import Image from "next/image";

const Mix = () => {
  return (
    <div className="grid grid-cols-8 gap-4 mt-4">
      <a
        href=""
        className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2"
      >
        <Image
          className="w-2xl"
          src="/albumMix/tudoTeu.jpg"
          alt="capa do album"
          width={110}
          height={110}
        />{" "}
        <strong className="font-semibold">Daily mix 1</strong>
        <span className="text-sm text-zinc-500">DROPS - Tudo é Teu</span>
      </a>
      <a
        href=""
        className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2"
      >
        <Image
          className="w-2xl"
          src="/albumMix/oficina.jpg"
          alt="capa do album"
          width={110}
          height={110}
        />{" "}
        <strong className="font-semibold">Daily mix 2</strong>
        <span className="text-sm text-zinc-500">Oficina G3 - Indiferença</span>
      </a>
      <a
        href=""
        className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2"
      >
        <Image
          className="w-2xl"
          src="/albumMix/maranata.jpg"
          alt="capa do album"
          width={110}
          height={110}
        />{" "}
        <strong className="font-semibold">Daily mix 3</strong>
        <span className="text-sm text-zinc-500">Alessando Vilas Boas - Maranata</span>
      </a>
      <a
        href=""
        className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2"
      >
        <Image
          className="w-2xl"
          src="/albumMix/nx.jpg"
          alt="capa do album"
          width={110}
          height={110}
        />{" "}
        <strong className="font-semibold">Daily mix 4</strong>
        <span className="text-sm text-zinc-500">NxZero - Onde Estiver</span>
      </a>
      <a
        href=""
        className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2"
      >
        <Image
          className="w-2xl"
          src="/albumMix/jorge.jpg"
          alt="capa do album"
          width={110}
          height={110}
        />{" "}
        <strong className="font-semibold">Daily mix 5</strong>
        <span className="text-sm text-zinc-500">Jorge Vercilo</span>
      </a>
    </div>
  );
};

export default Mix;
