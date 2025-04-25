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
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Mix from "./components/Mix";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 p-6">
          <div className="flex items-center gap-3">
            <button className="p-1 rounded-full bg-black/40">
              <ChevronLeft />
            </button>

            <button className="p-1 rounded-full bg-black/40">
              <ChevronRight />
            </button>
          </div>

          <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <a
              href=""
              className="bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors"
            >
              <Image
                src="/album-morada.jpeg"
                alt="capa do album"
                width={110}
                height={110}
              />{" "}
              <strong>ELE É</strong>
              <button className="w-12 h-12  flex items-center justify-center  rounded-full bg-green-700 text-black ml-auto mr-8 invisible group-hover:visible ">
                <Play fill="bg-black" />
              </button>
            </a>
            <a
              href=""
              className="bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors"
            >
              <Image
                src="/album-rodolfo.jpeg"
                alt="capa do album"
                width={110}
                height={140}
              />{" "}
              <strong>R.A.B.T</strong>
              <button className="w-12 h-12  flex items-center justify-center  rounded-full bg-green-700 text-black ml-auto mr-8 invisible group-hover:visible ">
                <Play fill="bg-black" />
              </button>
            </a>
            <a
              href=""
              className="bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors"
            >
              <Image
                src="/album-vilasboas.jpeg"
                alt="capa do album"
                width={110}
                height={110}
              />{" "}
              <strong>CRISTO</strong>
              <button className="w-12 h-12  flex items-center justify-center  rounded-full bg-green-700 text-black ml-auto mr-8 invisible group-hover:visible ">
                <Play fill="bg-black" />
              </button>
            </a>
            <a
              href=""
              className="bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors"
            >
              <Image
                src="/album-djavan.jpeg"
                alt="capa do album"
                width={110}
                height={110}
              />{" "}
              <strong>MPB</strong>
              <button className="w-12 h-12  flex items-center justify-center  rounded-full bg-green-700 text-black ml-auto mr-8 invisible group-hover:visible ">
                <Play fill="bg-black" />
              </button>
            </a>
            <a
              href=""
              className="bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors"
            >
              <Image
                src="/album-fhop.jpg"
                alt="capa do album"
                width={110}
                height={110}
              />{" "}
              <strong>MEIA NOITE</strong>
              <button className="w-12 h-12  flex items-center justify-center  rounded-full bg-green-700 text-black ml-auto mr-8 invisible group-hover:visible ">
                <Play fill="bg-black" />
              </button>
            </a>
            <a
              href=""
              className="bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors"
            >
              <Image
                src="/album-foo.jpeg"
                alt="capa do album"
                width={110}
                height={110}
              />{" "}
              <strong>FOO FIGHTERS</strong>
              <button className="w-12 h-12  flex items-center justify-center  rounded-full bg-green-700 text-black ml-auto mr-8 invisible group-hover:visible ">
                <Play fill="bg-black" />
              </button>
            </a>
          </div>

          <h2 className="font-semibold text-2xl mt-10">Made for Thiago</h2>

          <Mix />
        </main>
      </div>
      <Footer />
    </div>
  );
}
