const privileges = [
  {
    name: "Creator",
    description: "Для тех, кто создаёт и вдохновляет. Базовые возможности сервера с особым статусом.",
    image: "https://cdn.poehali.dev/projects/52dd2bc1-ab3e-4340-861e-f54c3b8af7a2/files/86b6a0e5-26a6-4d12-8092-6bc54a7b0cc4.jpg",
    features: ["Префикс [Creator]", "Доступ к /fly", "Цветной ник", "Приоритет входа"],
    color: "from-emerald-900/60 to-green-950/80",
    border: "border-emerald-600/40",
    badge: "bg-emerald-600/30 text-emerald-300",
    glow: "shadow-emerald-900/50",
  },
  {
    name: "LMode",
    description: "Продвинутый уровень с расширенными командами и уникальными возможностями сервера.",
    image: "https://cdn.poehali.dev/projects/52dd2bc1-ab3e-4340-861e-f54c3b8af7a2/files/9d288d40-78ee-47bf-89c2-36129ab91df0.jpg",
    features: ["Префикс [LMode]", "Все возможности Creator", "Доступ к /god", "Кастомные частицы", "Вип-чат"],
    color: "from-green-900/60 to-teal-950/80",
    border: "border-green-500/50",
    badge: "bg-green-600/30 text-green-300",
    glow: "shadow-green-900/50",
    popular: true,
  },
  {
    name: "GOD",
    description: "Абсолютная власть. Максимальные привилегии и уникальный статус среди всех игроков.",
    image: "https://cdn.poehali.dev/projects/52dd2bc1-ab3e-4340-861e-f54c3b8af7a2/files/00396f8f-eba3-47a1-86e4-6cc9fe6d39d2.jpg",
    features: ["Префикс [GOD]", "Все возможности LMode", "Неограниченные команды", "Особый эффект входа", "Личный регион"],
    color: "from-yellow-950/60 to-green-950/80",
    border: "border-yellow-500/50",
    badge: "bg-yellow-600/30 text-yellow-300",
    glow: "shadow-yellow-900/50",
  },
]

export default function PrivilegesSection() {
  return (
    <section id="privileges" className="relative z-10 py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-green-400/70 uppercase text-xs tracking-widest mb-3">PixelCore</p>
          <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight">
            Выбери свой <span className="font-semibold italic text-green-400">статус</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {privileges.map((priv) => (
            <div
              key={priv.name}
              className={`relative rounded-2xl border ${priv.border} bg-gradient-to-b ${priv.color} backdrop-blur-sm overflow-hidden shadow-xl ${priv.glow} flex flex-col`}
            >
              {priv.popular && (
                <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-green-500 text-black text-[10px] font-bold uppercase tracking-wider">
                  Популярный
                </div>
              )}

              <div className="relative h-48 overflow-hidden">
                <img
                  src={priv.image}
                  alt={priv.name}
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className={`absolute bottom-3 left-4 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest ${priv.badge}`}>
                  {priv.name}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <p className="text-white/60 text-xs leading-relaxed mb-5">{priv.description}</p>

                <ul className="space-y-2 mb-6 flex-1">
                  {priv.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-white/80 text-xs">
                      <span className="text-green-400">✦</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="https://t.me/DIMAS_3108"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-3 rounded-full bg-green-500 hover:bg-green-400 text-black font-semibold text-xs transition-all duration-200 cursor-pointer"
                >
                  Купить {priv.name}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
