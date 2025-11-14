import React from "react";

export default function SkyTechnologyLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-700 text-white">
      <header className="p-6 text-center">
        <h1 className="text-4xl font-bold">SkyTechnology</h1>
        <p className="text-slate-300 mt-2">
          IT‑компания, созданная SkyMonder в июне 2025
        </p>
      </header>

      <section className="max-w-4xl mx-auto p-6">
        <h2 className="text-2xl font-semibold mb-4">О компании</h2>
        <p className="text-slate-200 leading-relaxed">
          SkyTechnology — молодая IT‑компания, начавшая свою деятельность в июне 2025 года.
          Всё было создано полностью бесплатно, без единой копейки вложений.
          На дату 14.11.2025 в компании работает 1 человек.
        </p>
      </section>

      <section className="max-w-5xl mx-auto p-6">
        <h2 className="text-2xl font-semibold mb-6">Проекты</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {[
            { name: "SkyNotes", desc: "Минималистичные заметки с облачной синхронизацией." },
            { name: "SkyCAD", desc: "Простой облачный CAD‑редактор для быстрых эскизов." },
            { name: "SkyConvenience", desc: "Набор утилит для комфортной цифровой работы." },
            { name: "SkyText", desc: "Лёгкий текстовый редактор с экспортом в облако." }
          ].map((p) => (
            <div key={p.name} className="p-6 bg-white/10 backdrop-blur rounded-xl shadow">
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <p className="text-slate-300 mt-2">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto p-6">
        <h2 className="text-2xl font-semibold mb-4">Связаться</h2>
        <form
          className="p-6 bg-white/10 rounded-xl shadow flex flex-col gap-4"
          action="mailto:skyhelporig@mail.ru"
          method="POST"
          encType="text/plain"
        >
          <input
            type="text"
            name="name"
            placeholder="Ваше имя"
            className="p-3 rounded bg-white/20 text-white placeholder-slate-300"
          />
          <input
            type="email"
            name="email"
            placeholder="Ваш email"
            className="p-3 rounded bg-white/20 text-white placeholder-slate-300"
          />
          <textarea
            name="message"
            placeholder="Ваше сообщение"
            className="p-3 rounded bg-white/20 text-white placeholder-slate-300 h-28"
          ></textarea>
          <button
            type="submit"
            className="bg-white text-slate-900 px-4 py-2 rounded font-semibold"
          >
            Отправить
          </button>
        </form>
      </section>

      <footer className="text-center p-4 text-slate-400">
        © 2025 SkyTechnology. Все права защищены.
      </footer>
    </div>
  );
}
