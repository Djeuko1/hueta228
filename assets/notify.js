class Notify {
    constructor(i) {
        (this.lang = { from: "tr" }), 
        (this.container = document.querySelector(".root")), 
        (this.items = document.createElement("div")), 
        this.items.classList.add("notifications"), 
        this.container.appendChild(this.items);
    }
    create({ name: i, address: t, desc: e, img: n }) {
        const getRandomNumber = (min, max) => {
            return Math.round(Math.random() * (max - min) + min);
        };
        const o = `\n
                    <div class="notification__wrapper">\n
                        <div class="notification__body">\n
                            <img class="notification__img" src="${n}" />\n
                            <div class="notification__info">\n
                                <div class="notification__subtitle">\n
                                    <b class="notification__name">${i}</b> \n
                                    <span class="notification__city">${t}</span>\n
                                </div>\n
                                <div class="notification__title">\n
                                Satın aldım ${e}\n
                                </div>\n
                                <div class="notification__subtitle">\n
                                    <span> ${getRandomNumber(10, 59)} seconds ago</span>\n
                                </div>\n
                            </div>\n
                        </div>\n
                    </div>\n`,
            a = document.createElement("div");
        let itemNumbers1 = parseFloat($(".items-number-1").text());
        let itemNumbers2 = parseFloat($(".items-number-2").text());


        if (itemNumbers1 > 0) {
            $(".items-number-1").text(itemNumbers1 - 1);
        } else {
            $(".items-number-1").text("0");
        }
        if (itemNumbers2 > 0) {
            $(".items-number-2").text(itemNumbers2 - 1);
        } else {
            $(".items-number-2").text("0");
        }
        return a.classList.add("notification", "notification_showed"), (a.innerHTML = o), a.addEventListener("click", (i) => i.currentTarget.remove()), a;
    }
    send(i) {
        const t = this.create(i);
        return this.items.prepend(t), t;
    }
    hide(i) {
        setTimeout(() => {
            i.classList.remove("notification_showed"),
                i.classList.add("notification_hidden"),
                setTimeout(() => {
                    i.remove();
                }, 1500);
        }, 7500);
    }
}
const prodImg = "./assets/product4.jpg";
const prodName = "JBL partybox 320";
const spanishNames = [
    "Andrei Popescu",       // Андрей Попеску
    "Ion Ionescu",          // Ион Ионеску
    "Mihai Georgescu",      // Михай Георгеску
    "Alexandru Popa",       // Александру Попа
    "Ștefan Dumitrescu",    // Штефан Думитреску
    "Maria Popescu",        // Мария Попеску
    "Elena Ionescu",        // Елена Ионеску
    "Ioana Georgescu",      // Иоана Георгеску
    "Ana Popa",             // Ана Попа
    "Gabriela Dumitrescu",  // Габриэла Думитреску
    "Cristina Marinescu",   // Кристина Маринеску
    "Daniela Stoica",       // Даниэла Стойка
    "Florin Radu",          // Флорин Раду
    "George Matei",         // Джордж Матея
    "Ilie Sandu",           // Илие Санду
    "Laura Mihai",          // Лаура Михай
    "Nicoleta Tudor",       // Николетта Тудор
    "Oana Moldovan",        // Оана Молдовяну
    "Petru Roman",          // Петру Роман
    "Raluca Neagu",         // Ралука Неагу
    "Sorin Voicu",          // Сорин Войку
    "Teodora Enache",       // Теодора Эначе
    "Vasile Barbu",         // Василе Барбу
    "Adrian Stan",          // Адриан Стан
    "Bianca Dobre",         // Бьянка Добре
    "Carmen Preda",         // Кармен Преда
    "Diana Nistor",         // Диана Нистор
    "Emil Pavel",           // Эмиль Павел
    "Felicia Munteanu",     // Фелиция Мунтяну
    "Gheorghe Iliescu",     // Георге Илиеску
    "Horia Drăgan",         // Хория Дрэган
    "Iulia Sava",           // Юлия Сава
    "Lavinia Grigore",      // Лавиния Григоре
    "Marius Oprea",         // Мариус Опря
    "Nadia Lungu",          // Надя Лунгу
    "Octavian Florescu",    // Октавиан Флореску
    "Paula Cristea",        // Паула Кристеа
    "Roxana Bălan",         // Роксана Балан
    "Silviu Marin",         // Сильвиу Марин
    "Tiberiu Petrescu",     // Тибериу Петреску
    "Valentin Ciobanu",     // Валентин Чобану
    "Xenia Rusu",           // Ксения Русу
    "Zoe Apostol"           // Зоя Апостол
  ];
const spanishCities = [
    "București",     // Бухарест
    "Cluj-Napoca",   // Клуж-Напока
    "Timișoara",     // Тимишоара
    "Iași",          // Яссы
    "Constanța",     // Констанца
    "Brașov",        // Брашов
    "Craiova",       // Крайова
    "Galați",        // Галац
    "Ploiești",      // Плоешти
    "Oradea",        // Орадя
    "Arad",          // Арад
    "Sibiu",         // Сибиу
    "Bacău",         // Бакэу
    "Pitești",       // Питешти
    "Târgu Mureș",   // Тыргу-Муреш
    "Botoșani",      // Ботошани
    "Slatina",       // Слатина
    "Alba Iulia",    // Альба-Юлия
    "Focșani",       // Фокшани
    "Reșița",        // Рэшита
    "Drobeta-Turnu Severin", // Дробета-Турну-Северин
    "Hunedoara",     // Хунедоара
    "Miercurea Ciuc", // Миркуреа-Чиук
    "Suceava",       // Сучава
    "Buzău",         // Бузэу
    "Brăila",        // Брэила
    "Bistrița",      // Бистрица
    "Fălticeni",     // Фальтичен
    "Vaslui",        // Васлуй
    "Călărași"       // Кэларэши
  ];
const data = [
    { name: spanishNames[Math.trunc(Math.random() * (49 - 0 + 1) + 0)], address: spanishCities[Math.trunc(Math.random() * (24 - 0 + 1) + 0)], desc: `${prodName}`, img: `${prodImg}` },
    { name: spanishNames[Math.trunc(Math.random() * (49 - 0 + 1) + 0)], address: spanishCities[Math.trunc(Math.random() * (24 - 0 + 1) + 0)], desc: `${prodName}`, img: `${prodImg}` },
    { name: spanishNames[Math.trunc(Math.random() * (49 - 0 + 1) + 0)], address: spanishCities[Math.trunc(Math.random() * (24 - 0 + 1) + 0)], desc: `${prodName}`, img: `${prodImg}` },
    { name: spanishNames[Math.trunc(Math.random() * (49 - 0 + 1) + 0)], address: spanishCities[Math.trunc(Math.random() * (24 - 0 + 1) + 0)], desc: `${prodName}`, img: `${prodImg}` },
    { name: spanishNames[Math.trunc(Math.random() * (49 - 0 + 1) + 0)], address: spanishCities[Math.trunc(Math.random() * (24 - 0 + 1) + 0)], desc: `${prodName}`, img: `${prodImg}` },
],
    notify = new Notify(".notifications"),
    timer = (i) =>
        new Promise((t, e) => {
            setTimeout(() => t(), i);
        }),
    random = (i, t) => Math.round(i + Math.random() * (t - i)),
    timeoutMs = 2e4;
data.forEach((i, t) => {
    var e;
    ((e = t ? (6e4 * 0.3333, 18e4 * 0.3333, Math.round((6e4 + 12e4 * Math.random()) * 0.4)) : 1e4),
        new Promise((i, t) => {
            setTimeout(() => i(), e);
        })).then(() => {
            const t = notify.send(i);
            notify.hide(t);
        });
});
