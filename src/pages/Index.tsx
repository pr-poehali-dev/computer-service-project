import { useState } from "react";
import Icon from "@/components/ui/icon";

 
type ModalDoc = "privacy" | "offer_service" | "offer_parts" | null;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyIcon = any;

const DOCS: Record<NonNullable<ModalDoc>, { title: string; content: string }> = {
  privacy: {
    title: "Политика конфиденциальности",
    content: `1. ОБЩИЕ ПОЛОЖЕНИЯ

Настоящая Политика конфиденциальности регулирует порядок обработки и использования персональных данных физических лиц (пользователей) сервисным центром ТЕХНОХАБ (далее — Оператор).

2. СБОР ПЕРСОНАЛЬНЫХ ДАННЫХ

Оператор собирает следующие персональные данные:
— Фамилия, имя, отчество;
— Контактный телефон;
— Адрес электронной почты;
— Описание проблемы (по желанию пользователя).

3. ЦЕЛИ ОБРАБОТКИ ДАННЫХ

Персональные данные используются исключительно для:
— Связи с пользователем по вопросам ремонта техники;
— Оформления договора на оказание услуг;
— Информирования об акциях и специальных предложениях (с согласия пользователя).

4. ХРАНЕНИЕ И ЗАЩИТА ДАННЫХ

Оператор принимает необходимые организационные и технические меры для защиты персональных данных от несанкционированного доступа, изменения, раскрытия или уничтожения. Данные хранятся не дольше, чем требуется для выполнения целей обработки.

5. ПЕРЕДАЧА ДАННЫХ ТРЕТЬИМ ЛИЦАМ

Оператор не передаёт персональные данные пользователей третьим лицам без их явного согласия, за исключением случаев, предусмотренных действующим законодательством РФ.

6. ПРАВА ПОЛЬЗОВАТЕЛЯ

Пользователь имеет право:
— Запросить информацию об обрабатываемых данных;
— Потребовать исправления или удаления своих данных;
— Отозвать согласие на обработку персональных данных.

7. КОНТАКТЫ

По всем вопросам, связанным с обработкой персональных данных, обращайтесь: info@technohub.ru

Дата последнего обновления: 1 апреля 2026 г.`,
  },
  offer_service: {
    title: "Публичная оферта на оказание услуг",
    content: `ПУБЛИЧНАЯ ОФЕРТА НА ОКАЗАНИЕ УСЛУГ ПО РЕМОНТУ И ТЕХНИЧЕСКОМУ ОБСЛУЖИВАНИЮ

Сервисный центр ТЕХНОХАБ (далее — Исполнитель) предлагает любому физическому или юридическому лицу (далее — Заказчик) заключить договор на оказание услуг на следующих условиях.

1. ПРЕДМЕТ ДОГОВОРА

1.1. Исполнитель обязуется оказать услуги по диагностике, ремонту и техническому обслуживанию компьютерной техники (компьютеры, ноутбуки, периферия).
1.2. Конкретный перечень работ согласовывается с Заказчиком до начала ремонта.

2. ПОРЯДОК ОКАЗАНИЯ УСЛУГ

2.1. Заказчик передаёт технику Исполнителю для диагностики.
2.2. После диагностики Исполнитель сообщает Заказчику перечень необходимых работ и их стоимость.
2.3. Работы выполняются только после письменного или устного согласования с Заказчиком.

3. СТОИМОСТЬ И ОПЛАТА

3.1. Стоимость услуг определяется согласно действующему прайс-листу Исполнителя.
3.2. Диагностика проводится бесплатно.
3.3. Оплата производится после выполнения работ — наличными или безналичным способом.

4. ГАРАНТИЙНЫЕ ОБЯЗАТЕЛЬСТВА

4.1. Гарантия на выполненные работы — 6 (шесть) месяцев.
4.2. В гарантийный период Исполнитель устраняет неисправности, возникшие по вине Исполнителя, бесплатно.
4.3. Гарантия не распространяется на повреждения, возникшие вследствие действий Заказчика или третьих лиц.

5. ОТВЕТСТВЕННОСТЬ СТОРОН

5.1. Исполнитель несёт ответственность за сохранность переданной техники.
5.2. В случае невозможности ремонта техника возвращается Заказчику в исходном состоянии.

6. АКЦЕПТ ОФЕРТЫ

Передача техники в сервисный центр является акцептом настоящей оферты.

Дата публикации: 1 апреля 2026 г.`,
  },
  offer_parts: {
    title: "Оферта на заказ комплектующих",
    content: `ПУБЛИЧНАЯ ОФЕРТА НА ПРОДАЖУ КОМПЛЕКТУЮЩИХ И ЗАПАСНЫХ ЧАСТЕЙ

Сервисный центр ТЕХНОХАБ (далее — Продавец) предлагает любому физическому или юридическому лицу (далее — Покупатель) приобрести комплектующие и запасные части на следующих условиях.

1. ПРЕДМЕТ ДОГОВОРА

1.1. Продавец обязуется передать Покупателю оригинальные комплектующие и запасные части для компьютерной техники.
1.2. Ассортимент, наличие и цены уточняются у менеджера.

2. ОФОРМЛЕНИЕ ЗАКАЗА

2.1. Заказ оформляется лично в сервисном центре, по телефону или через форму обратной связи на сайте.
2.2. После подтверждения наличия товара Покупатель вносит предоплату 50% от стоимости заказа.
2.3. Срок поставки под заказ — от 1 до 14 рабочих дней.

3. СТОИМОСТЬ И ОПЛАТА

3.1. Цены указываются в рублях РФ и включают НДС (при наличии).
3.2. Окончательная стоимость согласовывается с Покупателем до оформления заказа.
3.3. Оплата производится наличными или безналичным переводом.

4. ГАРАНТИЯ НА КОМПЛЕКТУЮЩИЕ

4.1. Гарантия на оригинальные комплектующие — 12 (двенадцать) месяцев с момента продажи.
4.2. Гарантия на совместимые (неоригинальные) запчасти — 6 (шесть) месяцев.
4.3. Гарантийный случай — производственный брак, выявленный при нормальной эксплуатации.

5. ВОЗВРАТ И ОБМЕН

5.1. Возврат или обмен товара надлежащего качества не производится (комплектующие относятся к категории технически сложных товаров).
5.2. При обнаружении производственного брака — замена на аналогичный товар или возврат денежных средств.

6. АКЦЕПТ ОФЕРТЫ

Внесение предоплаты или полной оплаты заказа является акцептом настоящей оферты.

Дата публикации: 1 апреля 2026 г.`,
  },
};

const HERO_IMG = "https://cdn.poehali.dev/projects/c5535973-b2b8-4d63-90a9-152bcbd82a97/files/2c9d0216-3c0e-4a63-9cf2-0f01bb1809ef.jpg";
const PARTS_IMG = "https://cdn.poehali.dev/projects/c5535973-b2b8-4d63-90a9-152bcbd82a97/files/5d31e387-e8c6-4e52-b608-d791b48336ad.jpg";

const NAV_LINKS = [
  { label: "Услуги", href: "#services" },
  { label: "Цены", href: "#prices" },
  { label: "Гарантии", href: "#guarantees" },
  { label: "О нас", href: "#about" },
  { label: "FAQ", href: "#faq" },
  { label: "Контакты", href: "#contacts" },
];

const SERVICES = [
  { icon: "Laptop", title: "Ремонт ноутбуков", desc: "Замена матриц, клавиатур, разъёмов питания, материнских плат. Ремонт любой сложности." },
  { icon: "Monitor", title: "Ремонт компьютеров", desc: "Диагностика и ремонт ПК: замена комплектующих, чистка от пыли, апгрейд системы." },
  { icon: "Zap", title: "Срочный ремонт", desc: "Восстановление в день обращения. Работаем без выходных — ваша техника не ждёт." },
  { icon: "Building2", title: "Корпоративное обслуживание", desc: "IT-аутсорсинг для юридических лиц. Выезд мастера, договор на обслуживание, акты." },
  { icon: "Package", title: "Оригинальные запчасти", desc: "Продажа и установка оригинальных комплектующих. Гарантия на все детали 12 месяцев." },
  { icon: "Cpu", title: "Апгрейд и модернизация", desc: "Увеличение RAM, замена HDD на SSD, установка дополнительного охлаждения." },
  { icon: "Shield", title: "Защита от вирусов", desc: "Удаление вирусов и вредоносных программ, установка антивирусной защиты." },
  { icon: "Settings", title: "Настройка ПО", desc: "Установка и настройка операционных систем, программ, принтеров и периферии." },
];

const PRICES = [
  { service: "Диагностика", price: "Бесплатно", time: "30 мин" },
  { service: "Чистка от пыли + термопаста", price: "от 800 ₽", time: "1-2 часа" },
  { service: "Замена матрицы ноутбука", price: "от 2 500 ₽", time: "1-3 часа" },
  { service: "Замена жёсткого диска / SSD", price: "от 1 200 ₽", time: "1 час" },
  { service: "Замена клавиатуры", price: "от 1 500 ₽", time: "1-2 часа" },
  { service: "Восстановление данных", price: "от 2 000 ₽", time: "1-24 часа" },
  { service: "Переустановка Windows", price: "от 1 500 ₽", time: "2-3 часа" },
  { service: "Ремонт материнской платы", price: "от 3 000 ₽", time: "1-5 дней" },
  { service: "Замена разъёма питания", price: "от 1 800 ₽", time: "2-3 часа" },
  { service: "Выезд мастера (Москва)", price: "от 500 ₽", time: "По договорённости" },
];

const GUARANTEES = [
  { icon: "BadgeCheck", title: "12 месяцев на запчасти", desc: "На все установленные запчасти предоставляется гарантия 12 месяцев. Бесплатное устранение заводского брака." },
  { icon: "Clock", title: "6 месяцев на работу", desc: "Гарантия на выполненные работы — 6 месяцев. При повторной неисправности — ремонт за наш счёт." },
  { icon: "Wallet", title: "Фиксированная стоимость", desc: "Цена озвучивается до начала ремонта и не меняется. Никаких скрытых платежей и неожиданных доплат." },
  { icon: "RefreshCw", title: "Возврат при отказе", desc: "Если ремонт невозможен или нецелесообразен — возвращаем технику бесплатно, без оплаты диагностики." },
];

const REVIEWS = [
  { name: "Алексей М.", rating: 5, text: "Принёс ноутбук с залитой клавиатурой — сделали за 2 часа! Цена адекватная, всё работает отлично. Рекомендую!", date: "15 марта 2026" },
  { name: "Ирина К.", rating: 5, text: "Обслуживаем через них всю офисную технику по договору. Быстро, надёжно, всегда есть нужные запчасти.", date: "2 марта 2026" },
  { name: "Дмитрий С.", rating: 5, text: "Восстановили данные с упавшего жёсткого диска, думал уже всё потеряно. Настоящие профессионалы!", date: "20 февраля 2026" },
  { name: "Наталья В.", rating: 4, text: "Быстро поменяли SSD и переустановили систему. Стало летать! Чуть дольше ждала, чем обещали, но результат отличный.", date: "10 февраля 2026" },
  { name: "Михаил Р.", rating: 5, text: "Диагностика бесплатно, починили блок питания за 1 500 рублей. Другие просили в 2 раза больше!", date: "5 февраля 2026" },
  { name: "Светлана Д.", rating: 5, text: "Привезли рабочую станцию из офиса — починили за день. Очень удобно, что работают без выходных.", date: "25 января 2026" },
];

const FAQ_ITEMS = [
  { q: "Сколько стоит диагностика?", a: "Диагностика бесплатная. Если по результатам диагностики вы отказываетесь от ремонта — всё равно ничего не платите." },
  { q: "Как быстро сделают ремонт?", a: "Большинство поломок устраняем в день обращения. Сложный ремонт занимает 1-3 дня. Восстановление данных — до 5 дней." },
  { q: "Вы выезжаете на дом?", a: "Да, выезжаем по Москве и ближайшему Подмосковью. Стоимость выезда от 500 ₽, при ремонте на сумму от 3 000 ₽ — выезд бесплатно." },
  { q: "Работаете с юридическими лицами?", a: "Да, заключаем договоры на IT-аутсорсинг. Предоставляем все закрывающие документы: акты, счета, счета-фактуры." },
  { q: "Какая гарантия на ремонт?", a: "На запасные части — 12 месяцев, на выполненные работы — 6 месяцев. Если проблема повторится в гарантийный период — устраняем бесплатно." },
  { q: "Есть ли оригинальные запчасти?", a: "Да, мы официальный поставщик оригинальных комплектующих для ноутбуков и ПК. Также работаем с качественными аналогами по запросу клиента." },
  { q: "Что делать, если сломали в процессе ремонта?", a: "Мы несём полную ответственность за сохранность техники. В случае нашей вины — полностью компенсируем ущерб или заменяем детали за свой счёт." },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg key={s} className={`w-4 h-4 ${s <= rating ? "text-yellow-400" : "text-gray-600"}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDoc, setActiveDoc] = useState<ModalDoc>(null);

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* DOC MODAL */}
      {activeDoc && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.8)" }}
          onClick={() => setActiveDoc(null)}
        >
          <div
            className="relative w-full max-w-2xl max-h-[85vh] rounded-lg overflow-hidden flex flex-col"
            style={{ background: "hsl(220 18% 9%)", border: "1px solid hsl(210 100% 56% / 0.3)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b" style={{ borderColor: "hsl(220 15% 16%)" }}>
              <h3 className="font-oswald text-lg font-bold text-foreground">{DOCS[activeDoc].title}</h3>
              <button
                onClick={() => setActiveDoc(null)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Icon name="X" size={20} />
              </button>
            </div>
            <div className="overflow-y-auto px-6 py-5">
              <pre className="font-golos text-sm text-muted-foreground leading-relaxed whitespace-pre-wrap">
                {DOCS[activeDoc].content}
              </pre>
            </div>
          </div>
        </div>
      )}
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 backdrop-blur-md bg-background/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#home" className="flex items-center gap-2">
              <img src="https://cdn.poehali.dev/files/05da3e15-a213-41a5-90c2-4139e7eef5c5.png" alt="ТЕХНОХАБ" className="h-10 w-10 object-contain" />
              <span className="font-oswald text-xl font-bold tracking-widest uppercase">
                ТЕХНО<span className="neon-text">ХАБ</span>
              </span>
            </a>

            <div className="hidden lg:flex items-center gap-6">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm font-golos text-muted-foreground hover:text-[hsl(var(--neon))] transition-colors duration-200 tracking-wide"
                >
                  {l.label}
                </a>
              ))}
            </div>

            <div className="hidden lg:block">
              <a href="tel:+74951234567" className="btn-neon px-5 py-2.5 rounded text-sm flex items-center gap-2">
                <Icon name="Phone" size={15} className="text-white" />
                +7 (495) 123-45-67
              </a>
            </div>

            <button
              className="lg:hidden text-muted-foreground hover:text-foreground"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <Icon name={mobileOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="lg:hidden bg-card border-t border-border py-4 px-4 flex flex-col gap-3">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-golos text-muted-foreground hover:text-[hsl(var(--neon))] py-1 transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a href="tel:+74951234567" className="btn-neon px-4 py-2.5 rounded text-sm text-center mt-2">
              +7 (495) 123-45-67
            </a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden grid-bg pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/80 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        />
        <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full blur-3xl" style={{ background: "hsl(210 100% 56% / 0.06)" }} />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 rounded-full blur-3xl" style={{ background: "hsl(210 100% 56% / 0.04)" }} />

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border mb-6" style={{ borderColor: "hsl(210 100% 56% / 0.4)", background: "hsl(210 100% 56% / 0.08)" }}>
              <div className="w-2 h-2 rounded-full animate-pulse-slow" style={{ background: "hsl(var(--neon))" }} />
              <span className="text-xs font-golos tracking-widest uppercase" style={{ color: "hsl(var(--neon))" }}>Ремонт в день обращения</span>
            </div>

            <h1 className="font-oswald text-5xl sm:text-6xl lg:text-7xl font-bold uppercase leading-tight mb-6">
              Ремонт<br />
              <span className="neon-text">компьютеров</span><br />
              и ноутбуков
            </h1>

            <p className="font-golos text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed">
              Профессиональная диагностика и ремонт любой сложности. Срочный ремонт за 1 день,
              корпоративное обслуживание, оригинальные запчасти с гарантией 12 месяцев.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <a href="#contacts" className="btn-neon px-8 py-3.5 rounded text-base flex items-center gap-2">
                <Icon name="Wrench" size={18} className="text-white" />
                Оставить заявку
              </a>
              <a href="tel:+74951234567" className="btn-outline-neon px-8 py-3.5 rounded text-base flex items-center gap-2">
                <Icon name="Phone" size={18} />
                Позвонить
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 max-w-lg">
              {[
                { val: "5+", label: "лет опыта" },
                { val: "3 000+", label: "ремонтов" },
                { val: "97%", label: "довольных клиентов" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-oswald text-3xl font-bold neon-text">{s.val}</div>
                  <div className="font-golos text-xs text-muted-foreground mt-0.5 tracking-wide">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-20 border-t py-3 px-4" style={{ background: "hsl(210 100% 56% / 0.08)", borderColor: "hsl(210 100% 56% / 0.2)" }}>
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-6 sm:gap-12">
            {[
              { icon: "Zap", text: "Срочный ремонт в день обращения" },
              { icon: "Building2", text: "Корпоративные договоры" },
              { icon: "Package", text: "Оригинальные запчасти" },
              { icon: "BadgeCheck", text: "Гарантия 12 месяцев" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2">
                <Icon name={item.icon as AnyIcon} size={16} style={{ color: "hsl(var(--neon))" }} />
                <span className="font-golos text-sm text-foreground/80">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <p className="font-oswald text-sm tracking-widest uppercase mb-2" style={{ color: "hsl(var(--neon))" }}>// Что мы делаем</p>
              <h2 className="section-title text-foreground">Наши <span className="neon-text">услуги</span></h2>
            </div>
            <p className="font-golos text-muted-foreground max-w-sm text-sm leading-relaxed">
              Полный спектр услуг по ремонту и обслуживанию компьютерной техники для частных лиц и организаций.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SERVICES.map((s) => (
              <div key={s.title} className="card-tech rounded-lg p-6 cursor-default">
                <div className="w-10 h-10 rounded flex items-center justify-center mb-4" style={{ background: "hsl(210 100% 56% / 0.1)", border: "1px solid hsl(210 100% 56% / 0.2)" }}>
                  <Icon name={s.icon as AnyIcon} size={20} style={{ color: "hsl(var(--neon))" }} />
                </div>
                <h3 className="font-oswald text-lg font-semibold mb-2 text-foreground">{s.title}</h3>
                <p className="font-golos text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICES */}
      <section id="prices" className="py-24 grid-bg relative" style={{ background: "hsl(220 18% 7%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <p className="font-oswald text-sm tracking-widest uppercase mb-2" style={{ color: "hsl(var(--neon))" }}>// Прозрачные цены</p>
            <h2 className="section-title text-foreground">Прайс-<span className="neon-text">лист</span></h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            {PRICES.map((p, i) => (
              <div
                key={p.service}
                className="flex items-center justify-between px-5 py-4 rounded-lg border transition-all duration-200 group hover:border-[hsl(210_100%_56%/0.4)]"
                style={{ borderColor: "hsl(220 15% 16%)", background: "hsl(220 20% 6% / 0.6)" }}
              >
                <div className="flex items-center gap-3">
                  <span className="font-oswald text-xs w-4" style={{ color: "hsl(215 20% 30%)" }}>{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-golos text-sm sm:text-base text-foreground">{p.service}</span>
                </div>
                <div className="flex items-center gap-4 shrink-0">
                  <span className="font-golos text-xs text-muted-foreground hidden sm:block">{p.time}</span>
                  <span className="font-oswald text-base font-bold min-w-[90px] text-right" style={{ color: "hsl(var(--neon))" }}>{p.price}</span>
                </div>
              </div>
            ))}
          </div>

          <p className="font-golos text-sm text-muted-foreground mt-6 text-center">
            * Окончательная стоимость определяется после диагностики. Диагностика —{" "}
            <span style={{ color: "hsl(var(--neon))" }}>бесплатно</span>.
          </p>
        </div>
      </section>

      {/* GUARANTEES */}
      <section id="guarantees" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <p className="font-oswald text-sm tracking-widest uppercase mb-2" style={{ color: "hsl(var(--neon))" }}>// Ваша уверенность</p>
            <h2 className="section-title text-foreground">Наши <span className="neon-text">гарантии</span></h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {GUARANTEES.map((g) => (
              <div key={g.title} className="card-tech rounded-lg p-6">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-5" style={{ border: "1px solid hsl(210 100% 56% / 0.3)", background: "hsl(210 100% 56% / 0.05)" }}>
                  <Icon name={g.icon as AnyIcon} size={22} style={{ color: "hsl(var(--neon))" }} />
                </div>
                <h3 className="font-oswald text-xl font-bold text-foreground mb-3">{g.title}</h3>
                <p className="font-golos text-sm text-muted-foreground leading-relaxed">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24" style={{ background: "hsl(220 18% 7%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-oswald text-sm tracking-widest uppercase mb-2" style={{ color: "hsl(var(--neon))" }}>// Кто мы</p>
              <h2 className="section-title text-foreground mb-6">О нас</h2>
              <p className="font-golos text-base text-muted-foreground leading-relaxed mb-5">
                ТЕХНОХАБ — профессиональный сервисный центр по ремонту компьютеров и ноутбуков. Работаем с 2019 года,
                за это время выполнили более 3 000 ремонтов для частных лиц, малого бизнеса и крупных корпораций.
              </p>
              <p className="font-golos text-base text-muted-foreground leading-relaxed mb-8">
                Наши мастера — сертифицированные специалисты с опытом работы от 5 лет. Используем только
                оригинальное диагностическое оборудование и оригинальные запасные части от официальных поставщиков.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "Users", text: "7 сертифицированных мастеров" },
                  { icon: "Clock", text: "Работаем 7 дней в неделю" },
                  { icon: "MapPin", text: "Удобное расположение в центре" },
                  { icon: "Truck", text: "Выезд по всей Москве" },
                ].map((item) => (
                  <div key={item.text} className="flex items-start gap-3">
                    <Icon name={item.icon as AnyIcon} size={18} className="mt-0.5 shrink-0" style={{ color: "hsl(var(--neon))" }} />
                    <span className="font-golos text-sm text-foreground/80">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src={PARTS_IMG}
                alt="Запасные части и комплектующие"
                className="rounded-lg w-full object-cover aspect-[4/3]"
                style={{ border: "1px solid hsl(var(--border))" }}
              />

              <div className="absolute -top-4 -right-4 rounded-lg px-5 py-4 shadow-lg" style={{ background: "hsl(var(--neon))" }}>
                <div className="font-oswald text-2xl font-bold text-white">97%</div>
                <div className="font-golos text-xs" style={{ color: "rgba(255,255,255,0.8)" }}>довольных клиентов</div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* FAQ */}
      <section id="faq" className="py-24" style={{ background: "hsl(220 18% 7%)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <p className="font-oswald text-sm tracking-widest uppercase mb-2" style={{ color: "hsl(var(--neon))" }}>// Частые вопросы</p>
            <h2 className="section-title text-foreground">FAQ</h2>
          </div>

          <div className="space-y-3">
            {FAQ_ITEMS.map((item, i) => (
              <div
                key={i}
                className="border rounded-lg overflow-hidden transition-colors duration-200"
                style={{ borderColor: openFaq === i ? "hsl(210 100% 56% / 0.4)" : "hsl(220 15% 16%)" }}
              >
                <button
                  className="w-full flex items-center justify-between px-6 py-4 text-left transition-colors"
                  style={{ background: "hsl(220 20% 6% / 0.6)" }}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-oswald text-base font-semibold text-foreground pr-4">{item.q}</span>
                  <Icon
                    name={openFaq === i ? "ChevronUp" : "ChevronDown"}
                    size={18}
                    className="shrink-0"
                    style={{ color: openFaq === i ? "hsl(var(--neon))" : "hsl(215 20% 55%)" }}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 py-4 border-t animate-fade-in" style={{ background: "hsl(210 100% 56% / 0.03)", borderColor: "hsl(220 15% 16%)" }}>
                    <p className="font-golos text-sm text-muted-foreground leading-relaxed">{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] blur-3xl rounded-full" style={{ background: "hsl(210 100% 56% / 0.04)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <p className="font-oswald text-sm tracking-widest uppercase mb-2" style={{ color: "hsl(var(--neon))" }}>// Свяжитесь с нами</p>
            <h2 className="section-title text-foreground">Контакты</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="card-tech rounded-lg p-8">
              <h3 className="font-oswald text-xl font-bold text-foreground mb-6">Оставить заявку</h3>
              <div className="space-y-4">
                <div>
                  <label className="font-golos text-sm text-muted-foreground mb-1.5 block">Ваше имя</label>
                  <input
                    type="text"
                    placeholder="Иван Иванов"
                    className="w-full rounded px-4 py-2.5 font-golos text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none transition-colors"
                    style={{ background: "hsl(var(--background))", border: "1px solid hsl(var(--border))" }}
                  />
                </div>
                <div>
                  <label className="font-golos text-sm text-muted-foreground mb-1.5 block">Телефон</label>
                  <input
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    className="w-full rounded px-4 py-2.5 font-golos text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none transition-colors"
                    style={{ background: "hsl(var(--background))", border: "1px solid hsl(var(--border))" }}
                  />
                </div>
                <div>
                  <label className="font-golos text-sm text-muted-foreground mb-1.5 block">Описание проблемы</label>
                  <textarea
                    rows={4}
                    placeholder="Опишите неисправность..."
                    className="w-full rounded px-4 py-2.5 font-golos text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none transition-colors resize-none"
                    style={{ background: "hsl(var(--background))", border: "1px solid hsl(var(--border))" }}
                  />
                </div>
                <button className="btn-neon w-full py-3 rounded text-sm flex items-center justify-center gap-2">
                  <Icon name="Send" size={16} className="text-white" />
                  Отправить заявку
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {[
                { icon: "Phone", label: "Телефон", value: "+7 (495) 123-45-67", href: "tel:+74951234567", hint: "Пн–Пт: 9:00–19:00, Сб: 10:00–14:00, Вс: выходной" },
                { icon: "MessageCircle", label: "WhatsApp / Telegram", value: "@techfix_msk", href: "#", hint: "Отвечаем в течение 5 минут" },
                { icon: "Mail", label: "Email", value: "info@techfix.ru", href: "mailto:info@techfix.ru", hint: "Для корпоративных запросов" },
                { icon: "MapPin", label: "Адрес", value: "г. Москва, ул. Примерная, д. 1", href: "#", hint: "Пн–Пт: 9:00–19:00, Сб: 10:00–14:00, Вс: выходной" },
              ].map((c) => (
                <a key={c.label} href={c.href} className="flex items-start gap-4 card-tech rounded-lg p-4 group">
                  <div className="w-10 h-10 rounded flex items-center justify-center shrink-0" style={{ background: "hsl(210 100% 56% / 0.1)", border: "1px solid hsl(210 100% 56% / 0.2)" }}>
                    <Icon name={c.icon as AnyIcon} size={18} style={{ color: "hsl(var(--neon))" }} />
                  </div>
                  <div>
                    <div className="font-golos text-xs text-muted-foreground mb-0.5">{c.label}</div>
                    <div className="font-oswald text-base font-semibold text-foreground">{c.value}</div>
                    <div className="font-golos text-xs text-muted-foreground mt-0.5">{c.hint}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* MAP */}
          <div className="mt-10 rounded-lg overflow-hidden" style={{ border: "1px solid hsl(210 100% 56% / 0.2)", height: "380px" }}>
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=37.617635%2C55.755814&z=14&pt=37.617635%2C55.755814,pm2blm"
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen
              title="Карта ТЕХНОХАБ"
              style={{ filter: "invert(0.85) hue-rotate(180deg) saturate(0.7)" }}
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border pt-8 pb-6" style={{ background: "hsl(220 18% 7%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-5">
            <div className="flex items-center gap-2">
              <img src="https://cdn.poehali.dev/files/05da3e15-a213-41a5-90c2-4139e7eef5c5.png" alt="ТЕХНОХАБ" className="h-7 w-7 object-contain" />
              <span className="font-oswald text-base font-bold tracking-widest uppercase">
                ТЕХНО<span className="neon-text">ХАБ</span>
              </span>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              {NAV_LINKS.slice(0, 4).map((l) => (
                <a key={l.href} href={l.href} className="font-golos text-xs text-muted-foreground hover:text-[hsl(var(--neon))] transition-colors">
                  {l.label}
                </a>
              ))}
            </div>
          </div>
          <div className="border-t pt-4 flex flex-col sm:flex-row items-center justify-between gap-3" style={{ borderColor: "hsl(220 15% 14%)" }}>
            <p className="font-golos text-xs text-muted-foreground text-center">
              © 2026 ТЕХНОХАБ. Профессиональный ремонт компьютеров и ноутбуков в Москве.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              {([
                { key: "privacy", label: "Политика конфиденциальности" },
                { key: "offer_service", label: "Оферта услуг" },
                { key: "offer_parts", label: "Оферта на комплектующие" },
              ] as { key: NonNullable<ModalDoc>; label: string }[]).map((d) => (
                <button
                  key={d.key}
                  onClick={() => setActiveDoc(d.key)}
                  className="font-golos text-xs text-muted-foreground hover:text-[hsl(var(--neon))] transition-colors underline underline-offset-2"
                >
                  {d.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;