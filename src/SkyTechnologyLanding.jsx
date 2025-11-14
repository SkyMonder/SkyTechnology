import React from "react";

export default function SkyTechnologyLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-sky-100 text-slate-900 antialiased">
      
      {/* Header */}
      <header className="max-w-7xl mx-auto px-6 py-8 flex items-center justify-between">
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
          <a href="#team" className="hover:underline">Команда</a>
          <a href="#projects" className="hover:underline">Проекты</a>
          <a href="#timeline" className="hover:underline">История</a>
          <a href="#blog" className="hover:underline">Блог</a>
          <a href="#contact" className="hover:underline">Контакт</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-16">
        <div className="md:w-1/2">
          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            SkyTechnology — компактная, быстрая и умная IT-компания
          </h2>
          <p className="text-lg text-slate-700 mb-8">
            Создана и вдохновлена SkyMonder. Мы делаем цифровые решения, которые работают. Небольшая команда — большие идеи.
          </p>
          <div className="flex flex-wrap gap-3">
            <div className="px-4 py-2 bg-white/70 backdrop-blur rounded-full shadow">Основатель: <strong>SkyMonder</strong></div>
            <div className="px-4 py-2 bg-white/70 backdrop-blur rounded-full shadow">Основана: <strong>Июнь 2025</strong></div>
            <div className="px-4 py-2 bg-white/70 backdrop-blur rounded-full shadow">Сотрудников: <strong>1 (на 14.11.2025)</strong></div>
            <div className="px-4 py-2 bg-white/70 backdrop-blur rounded-full shadow">Модель: <strong>Создано бесплатно, без вложений</strong></div>
          </div>
          <div className="mt-8">
            <a href="#projects" className="inline-block px-6 py-3 bg-sky-600 text-white rounded-2xl font-medium shadow hover:scale-[1.02] transition">Посмотреть проекты</a>
          </div>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <div className="w-full max-w-md p-6 rounded-3xl bg-white shadow-xl animate-fadeIn">
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

      {/* About Company */}
      <section id="about" className="py-12 bg-sky-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">О компании</h2>
          <p className="text-slate-700 mb-4">SkyTechnology создаёт цифровые решения с минимальными затратами, фокусируясь на веб и мобильных прототипах. Мы ценим скорость, качество и инновации.</p>
          <ul className="list-disc list-inside text-slate-700 space-y-2">
            <li>Миссия: упрощать жизнь через технологии</li>
            <li>Ценности: качество, креатив, открытость</li>
            <li>Технологии: React, Node.js, облачные сервисы</li>
          </ul>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Команда</h2>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img src="/uploads/sky-monder.png" alt="SkyMonder" className="w-32 h-32 rounded-full shadow"/>
            <div>
              <h3 className="text-xl font-semibold">SkyMonder</h3>
              <p className="text-slate-700">Основатель и ведущий разработчик SkyTechnology. Эксперт в веб и мобильной разработке, создаёт проекты с нуля.</p>
              <p className="mt-2 text-slate-500 text-sm">Навыки: React, Node.js, Tailwind CSS, UI/UX дизайн</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-12 bg-sky-100">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-2xl font-bold mb-2">Успешные проекты</h3>
          <p className="text-slate-600 mb-6">Несколько реализованных проектов — от концепта до релиза:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <article className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition transform hover:-translate-y-1">
              <h4 className="font-semibold">SkyNotes</h4>
              <p className="mt-2 text-sm text-slate-600">Минималистичные заметки с облачной синхронизацией.</p>
              <div className="mt-4 text-xs text-slate-500">Статус: успешный запуск</div>
            </article>

            <article className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition transform hover:-translate-y-1">
              <h4 className="font-semibold">SkyCAD</h4>
              <p className="mt-2 text-sm text-slate-600">Простой облачный CAD‑редактор для быстрых эскизов.</p>
              <div className="mt-4 text-xs text-slate-500">Статус: успешный запуск</div>
            </article>

            <article className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition transform hover:-translate-y-1">
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

            <article className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition transform hover:-translate-y-1">
              <h4 className="font-semibold">SkyText</h4>
              <p className="mt-2 text-sm text-slate-600">Лёгкий текстовый редактор с экспортом в облако.</p>
              <div className="mt-4 text-xs text-slate-500">Статус: успешный запуск</div>
            </article>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section id="timeline" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-2xl font-bold mb-6">Краткая история</h3>
          <ol className="mt-6 space-y-6">
            <li className="flex gap-4">
              <div className="min-w-[48px] text-sm font-medium text-sky-700">Июнь 2025</div>
              <div>
                <div className="font-semibold">Основание SkyTechnology</div>
                <div className="text-slate-600 text-sm mt-1">SkyMonder инициировал проект — официальное начало деятельности.</div>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="min-w-[48px] text-sm font-medium text-sky-700">Лето 2025</div>
              <div>
                <div className="font-semibold">Первое портфолио</div>
                <div className="text-slate-600 text-sm mt-1">Запуск нескольких небольших продуктов и прототипов.</div>
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
        </div>
      </section>

      {/* Blog / News */}
      <section id="blog" className="py-12 bg-sky-50">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-2xl font-bold mb-6">Блог и новости</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <article className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition transform hover:-translate-y-1">
              <h4 className="font-semibold">Как мы создали SkyCAD за 1 неделю</h4>
              <p className="mt-2 text-sm text-slate-600">Подробности о процессе разработки и используемых технологиях.</p>
            </article>
            <article className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition transform hover:-translate-y-1">
              <h4 className="font-semibold">SkyNotes — минимализм и скорость</h4>
              <p className="mt-2 text-sm text-slate-600">О том, как наши решения упрощают повседневные задачи пользователей.</p>
            </article>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
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

      {/* Footer */}
      <footer className="mt-12 border-t pt-6 bg-sky-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-slate-600">© 2025 SkyTechnology — все права защищены.</div>
          <div className="text-sm text-slate-600">Создано бесплатно • Основание: SkyMonder • 14.11.2025 — команда: 1</div>
        </div>
      </footer>
    </div>
  );
}
