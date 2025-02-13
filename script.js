function handelUserActions() {
    Construct_the_html();
}

handelUserActions();


function Construct_the_html() {
    const body_tag = document.querySelector("body");

    const header = document.createElement("header");
    const title = document.createElement("h1");
    title.textContent = "Избери какво искаш коте 💕";
    header.appendChild(title);
    body_tag.appendChild(header);

    // const div_body = document.createElement("div");
    // div_body.classList.add("body");
    // const div_galery = document.createElement("div");
    // div_galery.classList.add("gallery");
    // div_body.appendChild(div_galery);
    // body_tag.appendChild(div_body);

    const container = document.createElement("div");
    container.classList.add("button-container");

    const complimentBtn = document.createElement("button");
    complimentBtn.classList.add("choice-btn");
    complimentBtn.textContent = "Комплименти";
    complimentBtn.addEventListener("click", function () {
        body_tag.removeChild(container);
        loadCompliments();
    });

    const reasonBtn = document.createElement("button");
    reasonBtn.classList.add("choice-btn");
    reasonBtn.textContent = "Причини защо си перфектна";
    reasonBtn.addEventListener("click", function () {
        body_tag.removeChild(container);
        Load_Reasons();
    });


    const special_card_container = document.createElement("div");
    special_card_container.classList.add("special-card-container");

    container.appendChild(complimentBtn);
    container.appendChild(reasonBtn);
    body_tag.appendChild(container);

}


function Load_Reasons() {
    const cardTexts = [
    "Винаги се интересуваш дали съм тъжен и се опитваш да ми помогнеш. 💕",
    "Играла си и си правила неща, които не са ти толкова приятни, но само за да бъдеш с мен. 🎮",
    "Пазила си ме, когато Спас ме ръчка или удря. 🛡️",
    "Грижила си се за мен и си готвила, докато аз просто лежа мързеливо. 🍲",
    "Не се обиждаш, дори когато ти се карам в игрите за глупости, за които сам съм виновен. 🎮❤️",
    "Все още си с мен, въпреки че съм те накарал да се почувстваш, че те искам само за едно нещо. 💔",
    "Винаги ми казваш, когато имаш проблем, а не го пазиш за себе си. 🗣️",
    "Пътувала си с часове, само за да ме видиш, дори и за малко. 🚆❤️",
    "Търпиш родителите ми, въпреки че понякога ти досаждат. 🏡",
    "Наистина си лоялна и винаги ми казваш, ако някой ти пише или иска нещо от теб. 🔒",
    "Не търсиш само дискотеки и купони. 🎶",
    "Не започна да ме ревнуваш, въпреки че да говорих с бившата си в началото. 💬",
    "Редовно ми казваш, че ме обичаш, и не те е срам да ме целунеш, дори на публично място. 💋",
    "С теб имам повече спомени и приятни моменти, отколкото с всеки друг. 🎞️",
    "Търпиш това, че понякога прекалявам с намеци и се държа ужасно, но все още не си си тръгнала. 😔❤️",
    "Изслушваш ме, дори когато говоря за игри и програмиране, от които нямаш представа. 💻🎮",
    "Не те е срам да плачеш пред мен, а аз обичам да те утешавам. 😢🤗",
    "От време на време ми казваш, че съм красив. 😏",
    "Грижиш се за веждите ми и не ми даваш да си стискам пъпките, за да не стане по-зле. 😂",
    "Дори когато сме сърдити, винаги спиш до мен. 🛏️",
    "Никога не казваш, че имаме нужда от почивка, дори след кавга. ❤️",
    "Изпълнила си или поне си обещала да изпълниш почти всички мои желания. 😏",
    "Споделила си ми най-големите си тайни и не криеш нищо от мен. 🤫",
    "Дори и когато те будя нощем, предпочиташ да спиш до мен, отколкото на друго легло. 💤",
    "По някаква причина не спря да говориш с мен, въпреки че не знаех руски, а дори ме научи.",
    "Сама правиш подаръци, които са невероятни, и най-хубавото е че са от теб. 🎁",
    "Пазиш по едно цвете от всички букети, които съм ти подарявал, което е толкова мило. 🌸",
    "Каквото и да ме тревожи, винаги правиш нещата по-добри, дори само с присъствието си. 🤍",
    "Никога не си казвала, че ти е скучно с мен. 🎭",
    "Обичаш да се снимаш и дори искаш и мен в снимките. 📸",
    "Не си от момичетата, които само искат подаръци и всяка събота обикалят молове. 🛍️",
    "Обичаш да носиш моите дрехи – най-вече тениски и суичъри, дори без срам пред хора. 👕",
    "Не си ревнива, не мрънкаш за външния си вид и за мен си перфектна. ✨",
    "Не си от онези момичета, които търсят внимание и си пишат с по 20 момчета. 💬",
    "Никога не ми става скучно с теб, дори когато просто лежим и не правим нищо. 🛋️",
    "Ти беше първата, която ми каза, че ще вземеш моята фамилия и дори се зарадва. 💍",
    ];

    const body_tag = document.querySelector("body");
    body_tag.style.background = 'url("https://www.iwantwallpaper.co.uk/images/sample-hello-kitty-polka-dots-wallpaper-df733-p7749-24182_image.jpg")';

    const div_body = document.createElement("div");
    div_body.classList.add("body");
    const div_galery = document.createElement("div");
    div_galery.classList.add("gallery");
    div_body.appendChild(div_galery);
    body_tag.appendChild(div_body);

    const title = document.querySelector("h1");
    title.textContent = "Причини защо си толкова перфектна ❤️";
    const gallery = document.querySelector(".gallery");
    let card_backs = [];

    // Създаваме картите динамично
    cardTexts.forEach((text, index) => {

        const card = document.createElement("div");
        card.classList.add("card");
        card.setAttribute("data-id", index + 1);

        const card_inner = document.createElement("div");
        card_inner.classList.add("card-inner");

        const card_front = document.createElement("div")
        card_front.classList.add("card-front");
        card_front.textContent = "❤️️";

        const card_back = document.createElement("div")
        card_back.classList.add("card-back");
        card_back.textContent = text;

        card_backs.push(card_back);

        card_inner.appendChild(card_front);
        card.appendChild(card_inner)
        gallery.appendChild(card);
    });

    // Добавяме специалната последна карта (ще се отключи накрая)
    const specialCard = document.createElement("div");
    specialCard.classList.add("card", "special");
    specialCard.setAttribute("data-id", "final");

    const card_inner = document.createElement("div");
    card_inner.classList.add("card-inner1");

    const card_front = document.createElement("div")
    card_front.classList.add("card-front1");
    card_front.textContent = "🎁";

    card_inner.appendChild(card_front);
    specialCard.appendChild(card_inner)

    const special_card_container = document.createElement("div");
    special_card_container.classList.add("special-card-container");
    // const special_card_container = document.querySelector(".special-card-container");
    body_tag.appendChild(special_card_container);
    special_card_container.appendChild(specialCard);

    // Добавяме клик събитие за обръщане на картите
    let flippedCards = 0;
    const cards = document.querySelectorAll(".card:not(.special)");

    cards.forEach(card => {
        card.addEventListener("click", function () {
            if (!card.classList.contains("flipped")) {
                card.classList.add("flipped");
                let card_inner = card.children[0];
                card_inner.appendChild(card_backs[flippedCards]);
                flippedCards++;

                // Ако всички карти са обърнати, отключваме специалната карта
                if (flippedCards === cardTexts.length) {
                    specialCard.classList.add("unlocked");

                    specialCard.style.opacity = "1";
                    specialCard.style.pointerEvents = "auto";
                    specialCard.addEventListener("click", function () {
                        specialCard.classList.add("flipped");

                        const card_back = document.createElement("div")
                        card_back.classList.add("card-back1");
                        console.log("here")
                        let card_inner = specialCard.children[0];
                        try {
                            let card_back = card_inner.children[1];
                            card_inner.removeChild(card_back);
                        } catch (e) {
                            console.log(e);
                            // Handle the error here, for example, by logging the error message.
                        }


                        card_back.textContent = "Ти си най-хубавото нещо което ми се е случвало в живота и никога не бих искал да те загубя. Наистина си безценна и неповторима и те обичам повече от всичко!!!  💖";
                        card_inner.appendChild(card_back);
                    });
                }
            }
        });
    });
}

function loadCompliments() {
    const body_tag = document.querySelector("body");
    const header = document.querySelector("header");
    body_tag.removeChild(header);

    const title = document.createElement("h2");
    title.textContent = "Комплименти само за теб ❤️";
    body_tag.appendChild(title);

    const starContainer = document.createElement("div");
    starContainer.classList.add("star-container");

    body_tag.appendChild(starContainer);

    const compliments = [
        "Имаш най-хубавите зелени очи. 💚",
        "Имаш невероятна усмивка. 😊",
        "С правилните дрехи ставаш неустоимо секси. 🔥",
        "Изглеждаш невероятно и с права, и с къдрава коса. 💇‍♀️",
        "Най-красивата с maid outfit. 🖤",
        "Най-сладкото лице и най-меките бузки. 🥰",
        "Обичам когато тихичко си пееш или повтаряш нещо. 🎶",
        "Ти си сбъднатата ми мечта от дете. ✨",
        "Животът с теб е просто прекрасен. ❤️",
        "Толкова обичам като спиш до мен и на мен. 😴",
        "Дори и в 40 градуса пак искам твоите прегръдки. 🤗",
        "Крака и дупе, които с удоволствие бих целувал всеки ден. 🍑💋",
        "Готвиш прекраснооооооо. 🍲",
        "И в леглото, и в рисуването си повече от добра. 🎨🔥",
        "Толкова те обичам, че дори не можеш да ме погнусиш. 😘",
        "Най-добрият човек, с когото да се напия. 🍷😂",
        "Толкова се радвам, че ми имаш пълно доверие и не се караме за глупости. 💕",
        "Дори и като спиш, завиждам на това колко си красива. 😍",
        "Ти си ми най-големият късмет в живота. 🍀",
        "Обичам те повече от всичко, любима. 💖",
        "Искам да прекарам всяка минута с теб. ⏳💑",
        "Дори и да си мислиш, че си дебела, в моите очи си най-секси моделът. 🔥",
        "Имаш такова малко и сладко носле. 👃🥰",
        "Никога за нищо на света не бих искал да те заменя. 🌎💘",
        "Дори сам искам да кажеш 'Съблечи ме и ме облизвай'. 😏",
        "Толкова те обичам, че дори не се сърдя като ми ядеш от яденето. 🍔🤣",
        "Заради теб всички други жени ми станаха безинтересни. 🚫👩",
        "Толкова великолепна, че за мен е удоволствие даже да ти целувам краката. 💋👣",
        "Нямам търпение да ти сложа един пръстен и да знам, че ще си винаги и само моя. 💍❤️",
        "Винаги може да си топлиш краката и каквото искаш на мен. 🦶🔥",
        "Когато се усмихваш, винаги ми вдигаш и настроението. 😁💕",
        "Между краката ти е толкова меко и удобнооооо. 🤭🔥",
        "Когато чак заплачеш от радост, усещането е неповторимо. 😭💖",
        "Иска ми се и в следващите животи да съм с теб. ♾️❤️",
        "Толкова се радвам, че мога да те нарека 'моя'. 🥰",
        "Обичам твоите изненади, най-вече мръсните. 😏🔥",
        "Характерът ти е по-добър от на всяка друга жена. 💯",
        "Дори и нещо лошо да стане, с теб винаги ще съм до теб и ще ти помагам. 🛡️❤️",
        "Толкова е хубаво, че си имаме пълно доверие и си казваме всичко. 🔐",
        "Прости, ако съм ревнив, но не искам никой да докосва моята жена. 😤💘",
        "Ако четеш това, получаваш едно безплатно мръсно желание. 😈",
        "Колкото и да съм зает, винаги ще имам време за теб. ⏳💕",
        "Звезда капан (задължена си да прекараш живота си с мен и нямаш избор). 🃏💍",
        "Обичам да виждам красивото ти лице. 🥹❤️"
    ];


    let activeText = null;

    function createStar(index) {
        const star = document.createElement("div");
        star.classList.add("star");

        const leftPosition = Math.random() * window.innerWidth * 0.9 + 20;
        star.style.left = `${leftPosition}px`

        const topPosition = Math.random() * window.innerHeight * 0.8 + 100; // Добавя 100px надолу
        star.style.top = `${topPosition}px`;

        // star.style.left = Math.random() * 90 + "%";
        // star.style.top = Math.random() * 90 + "%";

        const text = document.createElement("div");
        text.classList.add("star-text");
        text.textContent = compliments[index % compliments.length];

        star.addEventListener("click", function (event) {
            event.stopPropagation();
            if (activeText) {
                activeText.remove();
            }
            star.appendChild(text);
            activeText = text;
            text.style.left = star.style.left;
            text.style.top = `calc(${star.style.top} + 30px)`;
        });

        starContainer.appendChild(star);
    }

    for (let i = 0; i < compliments.length; i++) {
        createStar(i);
    }

    document.addEventListener("click", function () {
        if (activeText) {
            activeText.remove();
            activeText = null;
        }
    });

}