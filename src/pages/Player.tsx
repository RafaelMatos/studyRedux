import { ChevronDown, MessageCircle, VideoIcon } from 'lucide-react'
import ReactPlayer from 'react-player'

const Player = () => {
  return (
    <div className="bg-zinc-950 h-screen text-zinc-50 flex justify-center items-center">
      <div className="flex w-[1100px] flex-col gap-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-bold">Fundamentos do Redux</h1>
            <span className="text-sm text-zinc-400">
              Módulo &quot;Desvendando o Redux&quot;
            </span>
          </div>

          <button className="flex gap-2 items-center rounded bg-violet-500 px-3 py-2 text-sm font-medium hover:bg-violet-600">
            <MessageCircle className="w-4 h-4" />
            Deixar feedback
          </button>
        </div>
        <main className="relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow h-80">
          <div className="flex-1">
            <div className="w-full aspect-video bg-zinc-950">
              <ReactPlayer
                width="100%"
                height="100%"
                controls
                url="https://www.youtube.com/watch?v=7w5Vfjozzb8"
              />
            </div>
          </div>
          <aside className="w-80 border-l border-l-zinc-800 bg-zinc-900">
            <button className="flex w-full items-center gap-3 bg-zinc-800 p-4">
              <div className="flex h-10 w-10 rounded-full items-center justify-center bg-zinc-950 text-xs">
                1
              </div>
              <div className="flex flex-col gap-1 text-left">
                <strong className="text-sm">Desvendado o Redux</strong>
                <span className="text-xs text-zinc-400">12 aulas</span>
              </div>

              <ChevronDown className="w-5 h-5 ml-auto text-zinc-400" />
            </button>
            <nav className="relative flex flex-col gap-4 p-6">
              <button className="flex items-center gap-3 text-sm text-zinc-400 hover:text-zinc-300">
                <VideoIcon className="w-4 h-4 text-zinc-500" />
                <span className="">Fundamentos do Redux</span>
                <span className="ml-auto font-mono text-xs text-zinc-500">
                  09:13
                </span>
              </button>
              <button className="flex items-center gap-3 text-sm text-zinc-400 hover:text-zinc-300">
                <VideoIcon className="w-4 h-4 text-zinc-500" />
                <span className="">Usando reducers do Redux</span>
                <span className="ml-auto font-mono text-xs text-zinc-500">
                  07:45
                </span>
              </button>
              <button className="flex items-center gap-3 text-sm text-zinc-400 hover:text-zinc-300">
                <VideoIcon className="w-4 h-4 text-zinc-500" />
                <span className="">Actions no Redux</span>
                <span className="ml-auto font-mono text-xs text-zinc-500">
                  11:31
                </span>
              </button>
            </nav>
          </aside>
        </main>
      </div>
    </div>
  )
}

export default Player
