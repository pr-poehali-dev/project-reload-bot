export default function HeroContent() {
  return (
    <main className="absolute bottom-8 left-8 z-20 max-w-lg">
      <div className="text-left">
        <div
          className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm mb-4 relative"
          style={{
            filter: "url(#glass-effect)",
          }}
        >
          <div className="absolute top-0 left-1 right-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full" />
          <span className="text-white/90 text-xs font-light relative z-10">Minecraft сервер — PixelCore</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl md:leading-16 tracking-tight font-light text-white mb-4">
          <span className="font-medium italic">Получи</span> власть
          <br />
          <span className="font-light tracking-tight text-white">над сервером</span>
        </h1>

        {/* Description */}
        <p className="text-xs font-light text-white/70 mb-4 leading-relaxed">
          Три уровня привилегий: Creator, LMode и GOD. Уникальные возможности, команды и статус,
          которые выделят тебя среди остальных игроков PixelCore.
        </p>

        {/* Buttons */}
        <div className="flex items-center gap-4 flex-wrap">
          <button
            onClick={() => document.getElementById('privileges')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 rounded-full bg-transparent border border-green-400/40 text-white font-normal text-xs transition-all duration-200 hover:bg-green-400/10 hover:border-green-400/60 cursor-pointer"
          >
            Привилегии
          </button>
          <a
            href="https://t.me/DIMAS_3108"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full bg-green-500 text-black font-semibold text-xs transition-all duration-200 hover:bg-green-400 cursor-pointer"
          >
            Купить
          </a>
        </div>
      </div>
    </main>
  )
}