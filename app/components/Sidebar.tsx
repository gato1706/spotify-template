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

const Sidebar = () => {
  return (
    <aside className="w-72 bg-zinc-950 p-6">
    <div className="flex items-center gap-2">
      <div className="w-3 h-3 bg-red-500 rounded-full" />
      <div className="w-3 h-3 bg-yellow-500 rounded-full" />
      <div className="w-3 h-3 bg-green-500 rounded-full" />
    </div>

    <nav className="space-y-5 mt-10">
      <a
        href=""
        className="flex item-center gap-3 text-sm font-semibold text-zinc-200"
      >
        <HomeIcon />
        Home
      </a>

      <a
        href=""
        className="flex item-center gap-3 text-sm font-semibold text-zinc-200"
      >
        <Search />
        Search
      </a>

      <a
        href=""
        className="flex item-center gap-3 text-xs font-semibold text-zinc-200"
      >
        <Library />
        Your Library
      </a>
    </nav>

    <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">
      <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
        MORADA
      </a>
      <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
        Rodolfo Abrantes
      </a>
      <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
        Alessando Livas Boas
      </a>
      <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
        MPB
      </a>
      <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
        FHOP
      </a>
      <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
        Foo Fighters
      </a>
    </nav>
  </aside>
  )
}

export default Sidebar