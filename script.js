// Забиваем базы данных
const db = {
    english: {
        easy: ["cat", "dog", "run", "sun", "sky", "red", "box", "map", "pen", "cup", "key", "hat", "bug", "fix", "top", "man", "car", "bus", "oil", "war", "arm", "eye", "ear", "leg", "fox", "cow", "pig", "hen", "bee", "ant", "ice", "sea", "air", "day", "way", "art", "job", "pay", "tax", "gym", "bag", "bed", "fan", "pot", "pan", "jar", "net", "web", "pc", "tv", "cup", "dog", "sun", "run", "big", "small", "fast", "slow", "hot", "cold"],
        medium: ["apple", "orange", "banana", "grape", "melon", "lemon", "peach", "berry", "fruit", "juice", "house", "table", "chair", "floor", "roof", "wall", "door", "window", "light", "clock", "water", "bread", "sugar", "salt", "paper", "phone", "music", "movie", "game", "sport", "book", "read", "write", "speak", "listen", "learn", "teach", "school", "class", "student", "teacher", "friend", "family", "mother", "father", "sister", "brother", "doctor", "driver"],
        hard: ["extraordinary", "magnificent", "incomprehensible", "responsibility", "communication", "organization", "environment", "temperature", "atmosphere", "ecosystem", "population", "community", "mathematics", "probability", "statistics", "hypothesis", "experiment", "observation", "knowledge", "education", "university", "development", "opportunity", "experience", "challenge", "solution", "technology", "information", "application", "architecture"]
    },
    russian: {
        easy: ["дом", "кот", "лес", "код", "чай", "сыр", "лук", "сон", "нос", "рак", "мир", "труд", "май", "год", "час", "глаз", "рот", "лоб", "пол", "сад", "мяч", "ключ", "нож", "плащ", "врач", "грач", "дуб", "зуб", "суп", "боб", "сок", "мак", "рак", "бак", "ток", "пот", "кот", "рот", "лом"],
        medium: ["труба", "сантехник", "код", "программист", "система", "файл", "экран", "кнопка", "проект", "задача", "функция", "переменная", "массив", "цикл", "условие", "оператор", "алгоритм", "компилятор", "отладка", "интерфейс", "клавиатура", "монитор", "процессор", "память", "диск", "сеть", "сервер", "клиент", "браузер", "сайт", "интернет", "компьютер", "программа", "кодировка", "библиотека"],
        hard: ["параллелепипед", "конфиденциальность", "идентификация", "электрификация", "декларация", "реализация", "абстракция", "модернизация", "программирование", "алгоритмизация", "структурирование", "проектирование", "моделирование", "оптимизация", "визуализация", "администрирование", "тестирование", "документирование", "шифрование"]
    },
    code: {
        easy: ["{", "}", ";", "(", ")", "=", "+", "-", "*", "/", "<", ">", "[", "]", "&", "|", "!", "?", ".", ",", ":", "'", "\"", "@", "#", "$", "%", "^", "~", "_"],
        medium: ["int", "float", "double", "char", "bool", "if", "else", "while", "for", "return", "void", "class", "struct", "public", "private", "protected", "break", "continue", "switch", "case", "default", "static", "const", "auto", "long", "short", "unsigned", "cout", "cin", "endl", "string", "vector"],
        hard: ["#include <iostream>", "std::cout", "std::cin", "int main()", "cout <<", "cin >>", "a == b", "a != b", "a >= b", "a <= b", "x++", "x--", "&&", "||", "nullptr", "new", "delete", "std::vector", "std::string", "std::endl", "template <typename T>", "public:", "private:", "try {", "} catch", "throw", "namespace std;"]
    },
    python: { 
        easy: ["{", "}", ";", "(", ")", "=", "+", "-", "*", "/", "<", ">", "[", "]", "&", "|", "!", "?", ".", ",", ":", "'", "\"", "@", "#", "$", "%", "^", "~", "_"],
        medium: ["def", "return", "if", "elif", "else", "for", "while", "import", "from", "as", "class", "try", "except", "finally", "pass", "break", "continue", "in", "is", "not", "and", "or", "None", "True", "False", "self", "print", "len", "range", "int", "str", "float", "list", "dict", "set"],
        hard: ["def __init__(self):", "if __name__ == \"__main__\":", "print(f\"Hello {name}\")", "try:", "except Exception as e:", "[x for x in range(10)]", "lambda x: x**2", "with open(\"file.txt\") as f:", "yield", "async def", "await", "global", "nonlocal", "assert", "raise", "del", "import numpy as np"]
    },
    literature: { 
        onegin: { 
            easy: [
                "Евгений Онегин отвергает любовь Татьяны Лариной.", 
                "Татьяна пишет письмо Онегину, но получает холодный ответ.", 
                "Онегин скучает в деревне и знакомится с Ленским.", 
                "Ленский вызывает Онегина на дуэль из-за ревности.", 
                "Пушкин описывает красоту русской природы зимой.",
                "Татьяна видит вещий сон, в котором ее убивает медведь.",
                "Онегин уезжает путешествовать, оставляя Татьяну страдать."
            ], 
            medium: [
                "Евгений Онегин отвергает любовь Татьяны Лариной, объясняя это своей неспособностью к семейной жизни и эгоизмом. Позже он сам влюбляется в нее, но она уже замужем.", 
                "Татьяна Ларина пишет эмоциональное письмо Онегину, раскрывая свою душу. Проходит несколько лет, и они меняются местами: теперь Онегин страдает от безответной любви.", 
                "Владимир Ленский, друг Онегина, влюблен в Ольгу. Онегин из скуки начинает ухаживать за ней, что приводит к трагической дуэли и гибели Ленского.",
                "Пушкин создал образ лишнего человека. Онегин умен, но его эгоизм и разочарование в жизни мешают ему быть счастливым. Трагедия героя в его же характере.",
                "В романе показана жизнь русского дворянства. Балы, светские беседы, деревенская скука — все это фон для трагической истории любви и непонимания."
            ], 
            hard: [
                "Татьяна пишет письмо Онегину, но получает холодную отповедь. Проходит время, и судьба меняет их местами. Пушкин создал образ лишнего человека в русской литературе. Онегин скучает в деревне, но его друг Ленский знакомит его с семьей Лариных.", 
                "Роман в стихах Пушкина раскрывает картины русской жизни первой четверти девятнадцатого века. Главный герой, разочаровавшийся в свете, путешествует, но не находит покоя. Трагедия Онегина в его эгоизме и неспособности к искренним чувствам.",
                "Сцена последнего объяснения Онегина и Татьяны — одна из самых сильных в русской литературе. Она уже замужем, но признается, что до сих пор его любит. Однако долг и честь для нее важнее чувств. Онегин остается один.",
                "Дуэль Онегина и Ленского — переломный момент романа. Онегин убивает друга из-за глупой ссоры и собственного эгоизма. Это событие меняет его жизнь и заставляет задуматься о последствиях своих поступков."
            ] 
        },
        dead_souls: { 
            easy: [
                "Павел Чичиков скупает души умерших крестьян.", 
                "Чичиков приезжает в губернский город и очаровывает чиновников.", 
                "Помещик Манилов мечтает о прекрасном и курит трубку.", 
                "У Коробочки в доме много птиц и всякой живности.", 
                "Ноздрев любит карты, вино и скандалы.",
                "Собакевич выглядит как медведь и ест очень много.",
                "Плюшкин — самый жадный помещик, у которого все гниет."
            ], 
            medium: [
                "Павел Чичиков скупает души умерших крестьян. Он объезжает помещиков, показывая их пороки и жадность. Афера раскрывается на балу, и Чичиков сбегает из города.", 
                "Галерея помещиков в поэме Гоголя показывает деградацию человеческой души. От слащавого Манилова до жадного Плюшкина — каждый персонаж олицетворяет определенный порок.", 
                "Чичиков пытается провернуть аферу с мертвыми душами, чтобы получить ссуду. Однако его планы рушатся, когда Ноздрев раскрывает правду на балу у губернатора.",
                "Манилов — это пустой мечтатель, который живет в иллюзиях. Его дом стоит на юру, а хозяйство разрушается. Он продает мертвые души просто из вежливости, не понимая сути аферы.",
                "Коробочка — типичная помещица-накопительница. Она боится продешевить и торгуется с Чичиковым, хотя не понимает, зачем ему мертвые души. Ее мир ограничен хозяйством и курами."
            ], 
            hard: [
                "Манилов, Коробочка, Ноздрев и Собакевич продают Чичикову мертвые души. Каждый помещик по-своему олицетворяет деградацию человека. Гоголь создал галерею образов, которая стала классикой русской литературы.", 
                "Лирические отступления автора раскрывают трагедию России и ее будущее. Птица-тройка символизирует движение страны вперед. Но куда она несется, автор не дает ответа. Поэма остается величайшим сатирическим произведением.",
                "Плюшкин — это предел морального падения человека. Некогда богатый хозяин превратился в скрягу, который собирает мусор. Его душа умерла задолго до физической смерти. Гоголь называет его прорехой на человечестве.",
                "Афера Чичикова — это попытка разбогатеть на пустом месте. Он покупает то, чего нет, чтобы получить деньги. В этом отражается вся суть бюрократической системы России. Гоголь высмеивает чиновников и помещиков, показывая их пустоту."
            ] 
        },
        fathers_and_sons: { 
            easy: [
                "Евгений Базаров отрицает все чувства и искусство.", 
                "Аркадий Кирсанов и Базаров приезжают в имение отца.", 
                "Павел Петрович спорит с Базаровым о нигилизме.", 
                "Базаров влюбляется в Анну Одинцову.", 
                "Базаров проводит опыты с лягушками.",
                "Базаров ранит палец при вскрытии трупа и заражается.",
                "Аркадий женится на Кате, а Базаров умирает."
            ], 
            medium: [
                "Евгений Базаров отрицает все чувства и искусство, проповедуя нигилизм. Конфликт поколений приводит к дуэли с Павлом Кирсановым. Любовь к Анне Одинцовой ломает его теорию.", 
                "Спор отцов и детей — это конфликт мировоззрений. Базаров, как представитель нового поколения, отрицает авторитеты, а Кирсановы держатся за старые устои.", 
                "Базаров умирает от заражения крови после вскрытия трупа. Перед смертью он просит позвать Одинцову, показывая, что человеческие чувства сильнее теории.",
                "Павел Петрович Кирсанов — аристократ, который живет прошлым. Его дуэль с Базаровым — это столкновение старого и нового. Он проигрывает не только физически, но и морально.",
                "Анна Одинцова — сильная и независимая женщина, которая боится чувств. Она отвергает Базарова, потому что для нее спокойствие важнее любви. Их отношения заканчиваются ничем."
            ], 
            hard: [
                "Аркадий Кирсанов и Евгений Базаров приезжают в имение отца. Базаров отрицает романтизм и авторитеты. Тургенев показал столкновение старого и нового мира, которые не могут найти компромисс.", 
                "Трагизм Базарова в том, что он не находит своего места в мире. Его нигилизм разбивается о реальную жизнь и любовь. Писарев назвал его лицом эпохи, а Тургенев создал образ трагического героя.",
                "Смерть Базарова — это финал его теории. Он понимает, что жизнь сложнее любых схем. Перед смертью он проявляет человеческие чувства, которые так яростно отрицал. Тургенев показывает, что природа и любовь сильнее нигилизма.",
                "Роман Тургенева — это не просто спор о политике. Это глубокая история о любви, дружбе и поиске смысла жизни. Конфликт поколений показан через призму личных отношений и трагедий. Каждый герой ищет свой путь."
            ] 
        },
        crime_and_punishment: { 
            easy: [
                "Родион Раскольников убивает старуху-процентщицу.", 
                "Раскольников скрывается от полиции и мучается совестью.", 
                "Соня Мармеладова читает Раскольникову Евангелие.", 
                "Следователь Порфирий Петрович подозревает Раскольникова.", 
                "Раскольников признается в убийстве и едет на каторгу.",
                "Раскольников пишет статью о теории сверхчеловека.",
                "Мармеладов рассказывает о своей трагической судьбе."
            ], 
            medium: [
                "Родион Раскольников убивает старуху-процентщицу, проверяя свою теорию. Совесть мучает его, и он не может вынести этого груза. Соня Мармеладова помогает ему признаться.", 
                "Теория Раскольникова о сверхчеловеке терпит крах. Он понимает, что убийство не делает его Наполеоном, а лишь отдаляет от людей. Достоевский исследует глубины падшей души.", 
                "Раскольников убивает не только старуху, но и ее сестру Лизавету, которая становится случайной свидетельницей. Это преступление ломает его жизнь и заставляет страдать.",
                "Соня Мармеладова — символ смирения и духовного подвига. Она жертвует собой ради семьи, а затем помогает Раскольникову найти путь к покаянию. Ее вера спасает его.",
                "Порфирий Петрович ведет с Раскольниковым психологическую игру. Он не имеет прямых улик, но уверен в его вине. Его метод — это давление на совесть, а не на факты."
            ], 
            hard: [
                "Раскольников считает, что люди делятся на тварей дрожащих и право имеющих. Он решается на убийство, но это не приносит ему счастья. Порфирий Петрович ведет психологическую дуэль с Раскольниковым.", 
                "Соня Мармеладова — символ смирения и духовного подвига. Она спасает Раскольникова от полного морального падения. В финале Родион отправляется на каторгу, где начинается его духовное возрождение.",
                "Петербург в романе Достоевского — это город-призрак, который давит на человека. Улицы, переулки, грязные дворы — все это создает атмосферу безысходности. Город становится соучастником преступления.",
                "Эпилог романа показывает духовное перерождение Раскольникова. На каторге он понимает, что его теория была ошибкой. Любовь Сони и страдания очищают его душу. Достоевский дает герою шанс на спасение."
            ] 
        },
        war_and_peace: { 
            easy: [
                "Пьер Безухов ищет смысл жизни.", 
                "Андрей Болконский мечтает о славе и идет на войну.", 
                "Наташа Ростова поет на балу и очаровывает всех.", 
                "Начинается война 1812 года с Наполеоном.", 
                "Кутузов командует русской армией.",
                "Пьер попадает в плен и встречает Платона Каратаева.",
                "Андрей умирает от раны, а Наташа выходит замуж за Пьера."
            ], 
            medium: [
                "Пьер Безухов ищет смысл жизни и проходит через множество испытаний. Андрей Болконский разочаровывается в славе и любви. Война 1812 года меняет судьбы всех героев.", 
                "Роман-эпопея Толстого показывает жизнь дворянства и народа. Наташа Ростова находит свое счастье после всех потрясений. Толстой показывает войну как величайшее зло.",
                "Андрей Болконский на поле Аустерлица понимает, что слава — это ничто. Небо над ним кажется вечным и спокойным. Это прозрение меняет его жизнь и отношение к миру.",
                "Бородинское сражение — центральное событие романа. Толстой показывает войну глазами простых солдат. Кутузов понимает, что исход битвы решает дух народа, а не тактика.",
                "Наташа Ростова отдает подводы раненым, когда французы подходят к Москве. Это проявление ее патриотизма и человечности. Она жертвует имуществом ради спасения людей."
            ], 
            hard: [
                "Наташа Ростова находит свое счастье после всех потрясений. Толстой показал эпопею народной жизни. Кутузов и Наполеон предстают как две противоположные силы, олицетворяющие народную мудрость и эгоизм.", 
                "Князь Андрей умирает от полученной раны. Пьер попадает в плен, где встречает Платона Каратаева. Война очищает героев и заставляет переосмыслить ценности жизни и любви.",
                "Дуб на краю дороги — это символ состояния Андрея Болконского. Сначала он видит мертвое и уродливое дерево, но потом замечает, как оно зазеленело. Это совпадает с его внутренним возрождением.",
                "Пьер Безухов проходит путь от незаконнорожденного сына до богатого наследника, от масона до пленного. В плену он понимает, что счастье не в богатстве, а в простых вещах. Платон Каратаев учит его жить настоящим."
            ] 
        }
    }
};

// элементы
const elWord = document.getElementById('wordToType');
const elInput = document.getElementById('typeInput');
const btnStart = document.getElementById('btnStart');
const btnCancel = document.getElementById('btnCancel');
const tTime = document.getElementById('tTime');
const tCpm = document.getElementById('tCpm');
const tWpm = document.getElementById('tWpm');
const tAcc = document.getElementById('tAcc');
const modeSel = document.getElementById('modeSel');
const diffSel = document.getElementById('diffSel');
const oppSel = document.getElementById('oppSel');
const workDiv = document.getElementById('workDiv');
const workSel = document.getElementById('workSel');
const customDiv = document.getElementById('customDiv');
const customTxt = document.getElementById('customTxt');
const gameSec = document.getElementById('gameSec');
const pProg = document.getElementById('pProg');
const pProgTxt = document.getElementById('pProgTxt');
const oppBlock = document.getElementById('oppBlock');
const oProg = document.getElementById('oProg');
const oProgTxt = document.getElementById('oProgTxt');
const lbList = document.getElementById('leaderboard');
const rankTitle = document.getElementById('rankTitle');
const rankDesc = document.getElementById('rankDesc');
const globTests = document.getElementById('globTests');
const globBest = document.getElementById('globBest');
const kbWrap = document.getElementById('kbWrap');
const kbDiv = document.getElementById('kb');

// переменные
let inGame = false;
let word = "";
let wordsDone = 0;
let charsTyped = 0;
let charsRight = 0;
let errs = 0;
let timerId;
let tStart;
const MAX_WORDS = 10;

let curMode = "english";
let curDiff = "easy";
let pool = []; 
let oppSpeed = 0; 
let oppChars = 0; 
let kbLang = "english";

const kbLayouts = {
    english: [["q","w","e","r","t","y","u","i","o","p","[","]"],["a","s","d","f","g","h","j","k","l",";","'"],["shift","z","x","c","v","b","n","m",",",".","/","shift"],["space"]],
    russian: [["й","ц","у","к","е","н","г","ш","щ","з","х","ъ"],["ф","ы","в","а","п","р","о","л","д","ж","э"],["shift","я","ч","с","м","и","т","ь","б","ю","."],["space"]]
};

// отрисовка клавы
function drawKb(lang) {
    kbLang = lang;
    if (curMode === "code" || curMode === "python") {
        kbWrap.style.display = "none";
        return;
    }
    kbWrap.style.display = "flex";
    kbDiv.innerHTML = "";
    
    kbLayouts[lang].forEach(r => {
        let row = document.createElement('div');
        row.className = 'kb-row';
        r.forEach(k => {
            let btn = document.createElement('div');
            btn.className = 'key';
            if (k === "space") { btn.classList.add('wide'); btn.textContent = "ПРОБЕЛ"; }
            else if (k === "shift") { btn.classList.add('wide-shift'); btn.textContent = "SHIFT"; }
            else { btn.textContent = k.toUpperCase(); }
            btn.dataset.key = k;
            row.appendChild(btn);
        });
        kbDiv.appendChild(row);
    });
}

// подсветка
function markKey(char) {
    if (curMode === "code" || curMode === "python") return;
    document.querySelectorAll('.key').forEach(k => k.classList.remove('active'));
    if (!char) return;
    
    let c = char.toLowerCase();
    if (c === " ") c = "space";
    
    let isRus = /[а-яё]/.test(c);
    if (isRus && kbLang !== "russian") drawKb("russian");
    else if (!isRus && c !== "space" && kbLang !== "english") drawKb("english");

    let el = document.querySelector(`.key[data-key="${c}"]`);
    if (el) el.classList.add('active');
}

// рендер букв
function renderText() {
    const val = elInput.value;
    let html = "";
    
    for (let i = 0; i < word.length; i++) {
        if (i < val.length) {
            let cls = val[i] === word[i] ? 'correct' : 'incorrect';
            html += `<span class="char ${cls}">${word[i]}</span>`;
        } else if (i === val.length) {
            html += `<span class="char current">${word[i]}</span>`;
        } else {
            html += `<span class="char">${word[i]}</span>`;
        }
    }
    elWord.innerHTML = html;
    if (inGame) markKey(word[val.length]);
}

// смена режима
modeSel.addEventListener('change', () => {
    curMode = modeSel.value;
    workDiv.style.display = "none";
    customDiv.style.display = "none";
    diffSel.disabled = false;
    elWord.classList.remove('literature-text');
    elInput.rows = 1;
    elInput.disabled = true;
    elInput.value = "";
    elWord.textContent = 'Нажми "Начать"';

    if (curMode === "literature") {
        workDiv.style.display = "block";
        elWord.classList.add('literature-text');
        elInput.rows = 3;
    } else if (curMode === "custom") {
        customDiv.style.display = "block";
        elWord.classList.add('literature-text');
        elInput.rows = 3;
    }
    
    drawKb(curMode === "russian" ? "russian" : "english");
    showRecords();
});

function getRecKey() {
    let k = `rec_${curMode}`; 
    if (curMode === "literature") k += `_${workSel.value}_${curDiff}`; 
    else if (curMode !== "custom") k += `_${curDiff}`;
    return k;
}

function showRecords() {
    let data = JSON.parse(localStorage.getItem(getRecKey())) || [];
    lbList.innerHTML = "";
    if (data.length === 0) {
        lbList.innerHTML = "<li>Пусто</li>";
        return;
    }
    data.sort((a, b) => b.cpm - a.cpm); 
    data.slice(0, 3).forEach((item, i) => {
        let li = document.createElement('li');
        li.innerHTML = `${i+1}. ${item.cpm} зн/м (${item.acc}%)`;
        lbList.appendChild(li);
    });
}

function saveRecord(cpm, wpm, acc) {
    if (curMode === "custom") return;
    let key = getRecKey();
    let data = JSON.parse(localStorage.getItem(key)) || [];
    data.push({ cpm, wpm, acc });
    localStorage.setItem(key, JSON.stringify(data));
    showRecords();
    updateTotal(cpm);
}

function updateTotal(newCpm = 0) {
    let tests = parseInt(localStorage.getItem('total_tests')) || 0;
    let best = parseInt(localStorage.getItem('total_best')) || 0;
    if (newCpm > 0) { 
        tests++;
        localStorage.setItem('total_tests', tests);
        if (newCpm > best) {
            best = newCpm;
            localStorage.setItem('total_best', best);
        }
    }
    globTests.textContent = tests;
    globBest.textContent = best;
}

diffSel.addEventListener('change', () => { curDiff = diffSel.value; showRecords(); });
workSel.addEventListener('change', () => { showRecords(); });

function mix(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

// ВЫНОСИМ СТАРТ В ОТДЕЛЬНУЮ ФУНКЦИЮ ЧТОБЫ ВЫЗЫВАТЬ И КНОПКОЙ И ЭНТЕРОМ
function startGame() {
    if (curMode === "custom" && customTxt.value.trim() === "") {
        alert("Текст пустой!");
        return;
    }

    inGame = true;
    wordsDone = 0; charsTyped = 0; charsRight = 0; errs = 0; oppChars = 0;
    oppSpeed = parseInt(oppSel.value);
    
    elInput.disabled = false;
    elInput.value = "";
    elInput.classList.remove('error');
    elInput.focus();
    
    btnStart.style.display = "none";
    btnCancel.style.display = "inline-block";
    
    modeSel.disabled = true;
    diffSel.disabled = true;
    oppSel.disabled = true;
    workSel.disabled = true;
    customTxt.disabled = true;

    gameSec.style.display = "block";
    oppBlock.style.display = oppSpeed > 0 ? "block" : "none";

    if (curMode === "literature") {
        let arr = db.literature[workSel.value][curDiff];
        word = arr[Math.floor(Math.random() * arr.length)];
    } else if (curMode === "custom") {
        word = customTxt.value.trim().replace(/\r\n/g, '\n');
    } else {
        pool = mix([...db[curMode][curDiff]]);
        nextW();
    }

    renderText();
    updBars();

    rankTitle.textContent = "Анализ...";
    rankTitle.style.color = "#e0e0e0";
    rankDesc.textContent = "Оцениваем скорость...";

    tStart = Date.now();
    timerId = setInterval(loop, 1000 / 60);
}

btnStart.addEventListener('click', startGame);

// Слушатель для кнопки Enter
document.addEventListener('keydown', (e) => {
    // Если нажат Enter, игра не идет, и фокус не в поле ввода своего текста
    if (e.key === 'Enter' && !inGame && e.target !== customTxt) {
        e.preventDefault(); // Чтобы не было других действий
        startGame();
    }
});

btnCancel.addEventListener('click', () => stopGame("player"));

function loop() {
    if (!inGame) return;

    let ms = Date.now() - tStart;
    let sec = ms / 1000;
    tTime.textContent = sec.toFixed(1);

    let cpm = 0;
    let acc = 100;

    if (curMode === "literature" || curMode === "custom") {
        cpm = sec > 0.5 ? Math.round((charsRight / sec) * 60) : 0;
        acc = charsTyped > 0 ? Math.round((charsRight / charsTyped) * 100) : 100;
    } else {
        cpm = sec > 0.5 ? Math.round(((wordsDone * 5) / sec) * 60) : 0;
        acc = (charsRight + errs) > 0 ? Math.round((charsRight / (charsRight + errs)) * 100) : 100;
    }

    // Ограничитель скорости (античит)
    if (cpm > 800) cpm = 800;

    tCpm.textContent = cpm;
    tWpm.textContent = Math.round(cpm / 5);
    tAcc.textContent = acc;

    // Смена статуса
    if (cpm < 60) {
        rankTitle.textContent = "Черепаха"; rankTitle.style.color = "#f44747";
        rankDesc.textContent = "Медленно, но верно. Главное — не смотреть на клавиши.";
    } else if (cpm < 150) {
        rankTitle.textContent = "Новичок"; rankTitle.style.color = "#dcdcaa";
        rankDesc.textContent = "Уже лучше, чем двумя пальцами. Продолжай в том же духе.";
    } else if (cpm < 250) {
        rankTitle.textContent = "Быстрый"; rankTitle.style.color = "#4ec9b0";
        rankDesc.textContent = "Хорошая скорость для работы. Мышечная память на месте.";
    } else if (cpm < 350) {
        rankTitle.textContent = "Киберспортсмен"; rankTitle.style.color = "#569cd6";
        rankDesc.textContent = "Скорость киберспортсмена. Клавиатура начинает плавиться.";
    } else {
        rankTitle.textContent = "Хакер"; rankTitle.style.color = "#c586c0";
        rankDesc.textContent = "Невероятная скорость! Пальцы дымятся, клавиши стираются.";
    }

    // Логика соперника
    if (oppSpeed > 0) {
        let oppCharsPerSec = (oppSpeed * 5) / 60;
        oppChars = sec * oppCharsPerSec;

        if (curMode === "literature" || curMode === "custom") {
            if (word.length === 0) return;
            let p = Math.min((oppChars / word.length) * 100, 100);
            oProg.style.width = `${p}%`;
            oProgTxt.textContent = `${Math.round(p)}%`;
            if (oppChars >= word.length) stopGame("opp");
        } else {
            let w = Math.floor(oppChars / 5);
            let p = Math.min((oppChars / (MAX_WORDS * 5)) * 100, 100);
            if (w > MAX_WORDS) w = MAX_WORDS;
            oProg.style.width = `${p}%`;
            oProgTxt.textContent = `${w}/${MAX_WORDS}`;
            if (oppChars >= MAX_WORDS * 5) stopGame("opp");
        }
    }
}

function updBars() {
    let p = 0;
    if (curMode === "literature" || curMode === "custom") {
        if (word.length === 0) return;
        p = Math.min((elInput.value.length / word.length) * 100, 100);
        pProgTxt.textContent = `${Math.round(p)}%`;
        pProg.style.width = `${p}%`;
    } else {
        p = (wordsDone / MAX_WORDS) * 100;
        pProgTxt.textContent = `${wordsDone}/${MAX_WORDS}`;
        pProg.style.width = `${p}%`;
    }
}

function nextW() {
    if (wordsDone >= MAX_WORDS) {
        stopGame("player");
        return;
    }
    if (pool.length === 0) pool = mix([...db[curMode][curDiff]]);
    word = pool.pop();
    elInput.value = "";
    renderText();
}

// Ввод
elInput.addEventListener('input', () => {
    if (!inGame) return;
    const val = elInput.value;

    // Для текстов
    if (curMode === "literature" || curMode === "custom") {
        renderText();
        
        let match = 0;
        for (let i = 0; i < val.length; i++) {
            if (val[i] === word[i]) match++;
            else break;
        }
        charsRight = match;
        charsTyped = val.length; 
        updBars();
        
        if (val === word) {
            stopGame("player"); 
        } else {
            // Если есть ошибка - красим рамку
            if (!word.startsWith(val)) {
                elInput.classList.add('error');
            } else {
                elInput.classList.remove('error');
            }
        }
        return;
    }

    // Для слов
    if (val.length > word.length) {
        elInput.classList.add('error');
        return;
    }

    renderText();

    let isOk = word.startsWith(val);
    if (!isOk) {
        elInput.classList.add('error');
        if (!elInput.dataset.errLogged) {
            errs++;
            elInput.dataset.errLogged = "true";
        }
    } else {
        elInput.classList.remove('error');
        delete elInput.dataset.errLogged;
    }

    // Если слово набрано верно
    if (val === word) {
        elInput.classList.remove('error');
        delete elInput.dataset.errLogged;
        wordsDone++;
        charsRight += word.length + 1; 
        charsTyped += word.length + 1;
        updBars();
        nextW();
    }
});

function stopGame(winner) {
    inGame = false;
    clearInterval(timerId);
    elInput.disabled = true;
    
    btnStart.style.display = "inline-block";
    btnCancel.style.display = "none";
    btnStart.textContent = "Ещё раз (Enter)"; // Подсказываем юзеру
    
    modeSel.disabled = false;
    diffSel.disabled = false;
    oppSel.disabled = false;
    workSel.disabled = false;
    customTxt.disabled = false;

    document.querySelectorAll('.key').forEach(k => k.classList.remove('active'));

    let sec = (Date.now() - tStart) / 1000;
    
    if (sec < 1) sec = 1; 

    let cpm = 0;
    let acc = 100;

    if (curMode === "literature" || curMode === "custom") {
        cpm = Math.round((charsRight / sec) * 60);
        acc = charsTyped > 0 ? Math.round((charsRight / charsTyped) * 100) : 100;
    } else {
        cpm = Math.round(((wordsDone * 5) / sec) * 60);
        acc = (charsRight + errs) > 0 ? Math.round((charsRight / (charsRight + errs)) * 100) : 100;
    }

    if (cpm > 800) cpm = 800;

    tTime.textContent = sec.toFixed(1);
    tCpm.textContent = cpm;
    tWpm.textContent = Math.round(cpm / 5);
    tAcc.textContent = acc;

    if (cpm < 60) {
        rankTitle.textContent = "Черепаха"; rankTitle.style.color = "#f44747";
        rankDesc.textContent = "Медленно, но верно. Главное — не смотреть на клавиши.";
    } else if (cpm < 150) {
        rankTitle.textContent = "Новичок"; rankTitle.style.color = "#dcdcaa";
        rankDesc.textContent = "Уже лучше, чем двумя пальцами. Продолжай в том же духе.";
    } else if (cpm < 250) {
        rankTitle.textContent = "Быстрый"; rankTitle.style.color = "#4ec9b0";
        rankDesc.textContent = "Хорошая скорость для работы. Мышечная память на месте.";
    } else if (cpm < 350) {
        rankTitle.textContent = "Киберспортсмен"; rankTitle.style.color = "#569cd6";
        rankDesc.textContent = "Скорость киберспортсмена. Клавиатура начинает плавиться.";
    } else {
        rankTitle.textContent = "Хакер"; rankTitle.style.color = "#c586c0";
        rankDesc.textContent = "Невероятная скорость! Пальцы дымятся, клавиши стираются.";
    }

    if (winner === "opp") {
        elWord.innerHTML = "Соперник оказался быстрее. В следующий раз повезет!";
        elWord.style.color = "#f44747";
        rankTitle.textContent = "Провал"; rankTitle.style.color = "#f44747";
        rankDesc.textContent = "Соперник сделал тебя. Тренируйся дальше.";
    } else {
        elWord.innerHTML = "Тест завершен успешно.";
        elWord.style.color = "#4ec9b0";
        saveRecord(cpm, Math.round(cpm / 5), acc);
    }
}

// Инициализация
drawKb("english");
showRecords();
updateTotal();