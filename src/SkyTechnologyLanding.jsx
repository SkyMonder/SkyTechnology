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
          <a href="#projects" className="hover:underline">Проекты</a>
          <a href="#team" className="hover:underline">Команда</a>
          <a href="#timeline" className="hover:underline">История</a>
          <a href="#blog" className="hover:underline">Блог</a>
          <a href="#contact" className="hover:underline">Контакт</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-16">
        <div className="md:w-1/2">
          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            SkyCitadel — цифровая крепость, которая не сдаётся
          </h2>
          <p className="text-lg text-slate-700 mb-8">
            Открытая экосистема с мессенджером, видеохостингом, соцсетью, картами, музыкой, ТВ, ИИ-ассистентом и поиском. Без слежки, без рекламы, с шифрованием.
          </p>
          <div className="flex flex-wrap gap-3">
            <div className="px-4 py-2 bg-white/70 backdrop-blur rounded-full shadow">Основатель: <strong>SkyMonder</strong></div>
            <div className="px-4 py-2 bg-white/70 backdrop-blur rounded-full shadow">Основана: <strong>Июнь 2025</strong></div>
            <div className="px-4 py-2 bg-white/70 backdrop-blur rounded-full shadow">Проектов: <strong>12+</strong></div>
            <div className="px-4 py-2 bg-white/70 backdrop-blur rounded-full shadow">Модель: <strong>Open Source + Donation</strong></div>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="https://skycitadel.cc.cd" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 bg-sky-600 text-white rounded-2xl font-medium shadow hover:scale-[1.02] transition">
              🏰 Перейти в крепость
            </a>
            <a href="https://github.com/SkyMonder/SkyCitadel" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 bg-slate-800 text-white rounded-2xl font-medium shadow hover:scale-[1.02] transition">
              🐙 GitHub
            </a>
          </div>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <div className="w-full max-w-md p-6 rounded-3xl bg-white shadow-xl animate-fadeIn">
            <h3 className="text-xl font-semibold">Что такое SkyCitadel</h3>
            <p className="mt-4 text-slate-700">Это экосистема для тех, кто ценит приватность и свободу. Всё на одном аккаунте SkyID, с открытым кодом и без рекламы.</p>
            <ul className="mt-6 space-y-3 text-slate-700">
              <li>• 💬 Мессенджер с E2EE-шифрованием</li>
              <li>• 🎬 Видеохостинг без цензуры</li>
              <li>• 👥 Соцсеть с постами и комментариями</li>
              <li>• 🗺️ Карты с маршрутами</li>
              <li>• 🎵 Музыка (SoundCloud / Яндекс.Музыка)</li>
              <li>• 📺 Телевидение (SkyTV)</li>
              <li>• 🤖 ИИ-ассистент</li>
              <li>• 📧 Почта с модерацией</li>
            </ul>
          </div>
        </div>
      </section>

      {/* About Company */}
      <section id="about" className="py-12 bg-sky-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">О компании</h2>
          <p className="text-slate-700 mb-4">SkyTechnology — небольшая, но амбициозная IT-команда, создающая цифровые решения с минимальными затратами. Главный проект — SkyCitadel, открытая экосистема для приватного общения и контента.</p>
          <ul className="list-disc list-inside text-slate-700 space-y-2">
            <li>Миссия: дать людям цифровую свободу без слежки</li>
            <li>Ценности: приватность, открытость, качество</li>
            <li>Технологии: React, Node.js, WebSocket, AES-256-GCM</li>
          </ul>
        </div>
      </section>

      {/* Projects (SkyCitadel) */}
      <section id="projects" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-2xl font-bold mb-2">Проекты экосистемы</h3>
          <p className="text-slate-600 mb-6">Все сервисы SkyCitadel работают на одном аккаунте SkyID:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'SkyMessage', desc: 'Мессенджер с E2EE-шифрованием, аудио/видеозвонками и WebRTC.', status: '✅ Работает' },
              { name: 'SkyVideo', desc: 'Видеохостинг без цензуры с загрузкой, стримингом и модерацией.', status: '✅ Работает' },
              { name: 'SkySocial', desc: 'Соцсеть с постами, комментариями, лайками и банами.', status: '✅ Работает' },
              { name: 'SkyNotes', desc: 'Заметки с облачной синхронизацией и шифрованием.', status: '✅ Работает' },
              { name: 'SkyMail', desc: 'Почта с модерацией и админ-панелью.', status: '✅ Работает' },
              { name: 'SkyTV', desc: 'Телевидение с плеером на hls.js и каналами.', status: '✅ Работает' },
              { name: 'SkyMusic', desc: 'Музыкальный центр с SoundCloud и Яндекс.Музыкой.', status: '✅ Работает' },
              { name: 'SkySearch', desc: 'Поисковик на OpenSERP и DuckDuckGo.', status: '✅ Работает' },
              { name: 'SkyAI', desc: 'ИИ-ассистент на базе Llama и DeepSeek.', status: '✅ Работает' },
              { name: 'SkyChess', desc: 'Мультиплеерные шахматы (в разработке).', status: '🚧 В разработке' },
              { name: 'SkyGames', desc: 'Мини-игры (крестики-нолики, виселица).', status: '🚧 В разработке' },
              { name: 'SkyID', desc: 'Единая система идентификации для всех сервисов.', status: '✅ Работает' },
            ].map((project, index) => (
              <article key={index} className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition transform hover:-translate-y-1 border border-slate-200">
                <h4 className="font-semibold text-lg">{project.name}</h4>
                <p className="mt-2 text-sm text-slate-600">{project.desc}</p>
                <div className="mt-4 text-xs text-slate-500">{project.status}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-12 bg-sky-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Команда</h2>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img src="https://avatars.githubusercontent.com/u/138232262?v=4" alt="SkyMonder" className="w-32 h-32 rounded-full shadow" />
            <div>
              <h3 className="text-xl font-semibold">SkyMonder</h3>
              <p className="text-slate-700">Основатель и ведущий разработчик. Создаёт проекты с нуля, отвечает за архитектуру, дизайн и развитие экосистемы.</p>
              <p className="mt-2 text-slate-500 text-sm">Навыки: React, Node.js, WebSocket, Tailwind CSS, UI/UX</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section id="timeline" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-2xl font-bold mb-6">История развития</h3>
          <ol className="mt-6 space-y-6">
            <li className="flex gap-4">
              <div className="min-w-[48px] text-sm font-medium text-sky-700">Июнь 2025</div>
              <div>
                <div className="font-semibold">Основание SkyTechnology</div>
                <div className="text-slate-600 text-sm mt-1">SkyMonder начинает путь — созданы первые прототипы.</div>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="min-w-[48px] text-sm font-medium text-sky-700">Август 2025</div>
              <div>
                <div className="font-semibold">Первый релиз — SkyNotes</div>
                <div className="text-slate-600 text-sm mt-1">Запущены заметки с облачной синхронизацией.</div>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="min-w-[48px] text-sm font-medium text-sky-700">Апрель 2026</div>
              <div>
                <div className="font-semibold">Рождение SkyCitadel</div>
                <div className="text-slate-600 text-sm mt-1">Экосистема объединяет мессенджер, видео, соцсеть и карты.</div>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="min-w-[48px] text-sm font-medium text-sky-700">Август 2026</div>
              <div>
                <div className="font-semibold">Блокировка Render и обход</div>
                <div className="text-slate-600 text-sm mt-1">Проект пережил блокировку и переехал на Cloudflare Worker.</div>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="min-w-[48px] text-sm font-medium text-sky-700">Сегодня</div>
              <div>
                <div className="font-semibold">12+ сервисов, 1 человек, открытый код</div>
                <div className="text-slate-600 text-sm mt-1">Экосистема продолжает расти, опираясь на донаты сообщества.</div>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* Blog / News */}
      <section id="blog" className="py-12 bg-sky-50">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-2xl font-bold mb-6">Блог и новости</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <article className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition transform hover:-translate-y-1">
              <h4 className="font-semibold">Как SkyCitadel пережил блокировку Render</h4>
              <p className="mt-2 text-sm text-slate-600">История о том, как проект нашёл способ остаться доступным для пользователей из России.</p>
              <div className="mt-4 text-xs text-slate-500">Читать →</div>
            </article>
            <article className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition transform hover:-translate-y-1">
              <h4 className="font-semibold">Почему я выбрал открытый код</h4>
              <p className="mt-2 text-sm text-slate-600">Размышления о доверии, прозрачности и ответственности перед сообществом.</p>
              <div className="mt-4 text-xs text-slate-500">Читать →</div>
            </article>
            <article className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition transform hover:-translate-y-1">
              <h4 className="font-semibold">SkyCitadel в СМИ</h4>
              <p className="mt-2 text-sm text-slate-600">Публикации о проекте на vc.ru, Habr, Dev.to и Product Hunt.</p>
              <div className="mt-4 text-xs text-slate-500">Читать →</div>
            </article>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <h3 className="text-2xl font-bold">Связаться</h3>
            <p className="mt-3 text-slate-600">Если хотите узнать больше о проектах, предложить сотрудничество или просто поддержать — напишите основателю <strong>SkyMonder</strong>.</p>
            <div className="mt-6 space-y-3 text-sm text-slate-700">
              <div>📧 <a href="mailto:skymonder@yandex.ru" className="text-sky-600 hover:underline">skymonder@yandex.ru</a></div>
              <div>🐙 <a href="https://github.com/SkyMonder" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">github.com/SkyMonder</a></div>
              <div>☕ <a href="https://www.donationalerts.com/r/skycitadel" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">Поддержать проект</a></div>
              <div>🔗 <a href="https://skycitadel.cc.cd" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">skycitadel.cc.cd</a></div>
            </div>
          </div>
          <form className="p-6 bg-white rounded-2xl shadow" action="mailto:skymonder@yandex.ru" method="POST" encType="text/plain">
            <label className="block text-sm font-medium">Имя</label>
            <input className="mt-2 w-full p-3 rounded-md border" placeholder="Ваше имя" />
            <label className="block text-sm font-medium mt-4">Почта</label>
            <input className="mt-2 w-full p-3 rounded-md border" placeholder="you@example.com" />
            <label className="block text-sm font-medium mt-4">Сообщение</label>
            <textarea className="mt-2 w-full p-3 rounded-md border" rows={4} placeholder="Коротко о запросе" />
            <div className="mt-4">
              <button type="submit" className="w-full px-4 py-3 bg-sky-600 text-white rounded-2xl font-medium hover:bg-sky-700 transition">
                Отправить
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-12 border-t pt-6 bg-sky-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-slate-600">© 2025–2026 SkyTechnology — все права защищены.</div>
          <div className="text-sm text-slate-600 flex flex-wrap gap-3 items-center">
            <span>Создано бесплатно</span>
            <span>•</span>
            <a href="https://www.donationalerts.com/r/skycitadel" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">☕ Поддержать</a>
            <span>•</span>
            <a href="https://github.com/SkyMonder/SkyCitadel" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">🐙 GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
