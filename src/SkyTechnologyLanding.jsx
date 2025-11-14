import React from "react";

export default function SkyTechnologyLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-sky-100 text-slate-900 antialiased">
      <header className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-sky-500 to-indigo-600 flex items-center justify-center shadow-lg">
            <span className="text-white font-extrabold">ST</span>
          </div>
          <div>
            <h1 className="text-xl font-semibold">SkyTechnology</h1>
            <p className="text-sm text-slate-600">Идеи. Прототипы. Результат.</p>
          </div>
        </div>
        <nav className="text-sm text-slate-700 hidden md:flex gap-6">
          <a href="#about" className="hover:underline">О компании</a>
          <a href="#projects" className="hover:underline">Проекты</a>
          <a href="#timeline" className="hover:underline">История</a>
          <a href="#contact" className="hover:underline">Контакт</a>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-6">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">SkyTechnology — компактная, быстрая и умная IT-компания</h2>
            <p className="mt-6 text-lg text-slate-700">Создана и вдохновлена SkyMonder. Мы делаем цифровые решения, которые работают. Небольшая команда — большие идеи.</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <div className="px-4 py-2 bg-white/70 backdrop-blur rounded-full shadow">Основатель: <strong>SkyMonder</strong></div>
              <div className="px-4 py-2 bg-white/70 backdrop-blur rounded-full shadow">Основана: <strong>Июнь 2025</strong></div>
              <div className="px-4 py-2 bg-white/70 backdrop-blur rounded-full shadow">Сотрудников: <strong>1 (на 14.11.2025)</strong></div>
              <div className="px-4 py-2 bg-white/70 backdrop-blur rounded-full shadow">Модель: <strong>Создано бесплатно, без вложений</strong></div>
            </div>

            <div className="mt-8">
              <a href="#projects" className="inline-block px-6 py-3 bg-sky-600 text-white rounded-2xl font-medium shadow hover:scale-[1.02] transition">Посмотреть проекты</a>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="w-full max-w-md p-6 rounded-3xl bg-white shadow-xl">
              <h3 className="text-xl font-semibold">Кто мы</h3>
              <p className="mt-4 text-slate-700">SkyTechnology — это небольшая, но амбициозная IT-команда, ориентированная на скорые прототипы и работающие продукты. Базируемся в облаках — от идеи до запуска.</p>

              <ul className="mt-6 space-y-3 text-slate-700">
                <li>• Фокус на веб и мобильных прототипах</li>
                <li>• Быстрое тестирование гипотез</li>
                <li>• Вся разработка с минимальными затратами</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="projects" className="py-12">
          <h3 className="text-2xl font-bold">Успешные проекты</h3>
          <p className="mt-2 text-slate-600">Несколько реализованных проектов — от концепта до релиза. Ниже примеры (иллюстративно):</p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <article className="p-6 bg-white rounded-2xl shadow">
              <h4 className="font-semibold">SkyNotes</h4>
              <p className="mt-2 text-sm text-slate-600">Минималистичные заметки с облачной синхронизацией.</p>
              <div className="mt-4 text-xs text-slate-500">Статус: успешный запуск</div>
            </article>

            <article className="p-6 bg-white rounded-2xl shadow">
              <h4 className="font-semibold">SkyCAD</h4>
              <p className="mt-2 text-sm text-slate-600">Простой облачный CAD‑редактор для быстрых эскизов.</p>
              <div className="mt-4 text-xs text-slate-500">Статус: успешный запуск</div>
            </article>

            <article className="p-6 bg-white rounded-2xl shadow">
              <h4 className="font-semibold">SkyConvenience</h4>
              <p className="mt-2 text-sm text-slate-600">Набор утилит для комфортной цифровой работы.</p>
              <div className="mt-4 text-xs text-slate-500">Статус: пилот, положительная обратная связь</div>
              <div className="mt-4">
                <a
                  href="https://sites.google.com/view/skyosmain"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-sky-600 text-white rounded-2xl font-medium shadow hover:scale-[1.02] transition"
                >
                  Перейти на SkyConvenience
                </a>
              </div>
            </article>

            <article className="p-6 bg-white rounded-2xl shadow">
              <h4 className="font-semibold">SkyText</h4>
              <p className="mt-2 text-sm text-slate-600">Лёгкий текстовый редактор с экспортом в облако.</p>
              <div className="mt-4 text-xs text-slate-500">Статус: успешный запуск</div>
            </article>
          </div>
        </section>

        <section id="timeline" className="py-12">
          <h3 className="text-2xl font-bold">Краткая история</h3>
          <ol className="mt-6 space-y-6">
            <li className="flex gap-4">
              <div className="min-w-[48px] text-sm font-medium text-sky-700">Июнь 2025</div>
              <div>
                <div className="font-semibold">Основание SkyTechnology</div>
                <div className="text-slate-600 text-sm mt-1">SkyMonder инициировал проект — официальное начало деятельности в июне 2025.</div>
              </div>
            </li>

            <li className="flex gap-4">
              <div className="min-w-[48px] text-sm font-medium text-sky-700">Лето 2025</div>
              <div>
                <div className="font-semibold">Первое портфолио</div>
                <div className="text-slate-600 text-sm mt-1">Запуск нескольких небольших продуктов и прототипов — успешные трёхэтапные релизы.</div>
              </div>
            </li>

            <li className="flex gap-4">
              <div className="min-w-[48px] text-sm font-medium text-sky-700">14.11.2025</div>
              <div>
                <div className="font-semibold">Текущее состояние</div>
                <div className="text-slate-600 text-sm mt-1">В компании работает 1 человек. Все разработки выполнены бесплатно, без денежных вложений.</div>
              </div>
            </li>
          </ol>
        </section>

        <section id="contact" className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div>
              <h3 className="text-2xl font-bold">Связаться</h3>
              <p className="mt-3 text-slate-600">Если хотите узнать больше о проектах или обсудить сотрудничество — напишите основателю <strong>SkyMonder</strong>.</p>

              <div className="mt-6 space-y-3 text-sm text-slate-700">
                <div>Статус команды: 1 сотрудник (по состоянию на 14.11.2025)</div>
                <div>Финансирование: проекты созданы бесплатно, без инвестиций</div>
              </div>
            </div>

            <form className="p-6 bg-white rounded-2xl shadow" action="mailto:skyhelporig@mail.ru" method="POST" encType="text/plain">
              <label className="block text-sm font-medium">Имя</label>
              <input className="mt-2 w-full p-3 rounded-md border" placeholder="Ваше имя" />

              <label className="block text-sm font-medium mt-4">Почта</label>
              <input className="mt-2 w-full p-3 rounded-md border" placeholder="you@example.com" />

              <label className="block text-sm font-medium mt-4">Сообщение</label>
              <textarea className="mt-2 w-full p-3 rounded-md border" rows={4} placeholder="Коротко о запросе" />

              <div className="mt-4">
                <button type="button" className="w-full px-4 py-3 bg-indigo-600 text-white rounded-2xl">Отправить</button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="mt-12 border-t pt-6">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-slate-600">© 2025 SkyTechnology — все права защищены.</div>
          <div className="text-sm text-slate-600">Создано бесплатно • Основание: SkyMonder • 14.11.2025 — команда: 1</div>
        </div>
      </footer>
    </div>
  );
}

