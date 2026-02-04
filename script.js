/* ========= AUDIO SETUP ========= */
const music = document.getElementById("bgMusic");
const voice = document.getElementById("voiceLine");
let musicStarted = false;

function playMusicOnce() {
    if (!musicStarted) {
        music.volume = 0.5;
        music.play().catch(() => {});
        musicStarted = true;
    }
}

/* ========= IMAGE LIST ========= */
const images = [
    "img1.png","img2.png","img3.png","img4.png",
    "img5.png","img6.png","img7.png"
];

/* ========= 120+ NO REPLIES ========= */
const noTexts = [
"Soch lo Ajay… dil baat maan raha hai 💓",
"Itna bhi bhaav nahi khaate 😌",
"Yeh NO thoda fake lag raha hai 😏",
"Dil ne suna hi nahi NO 💔",
"Ek baar phir soch lo jaan 🥺",
"Tumhare NO mein bhi YES chhupa hai 😍",
"Hero itni jaldi mana nahi karta 🎬",
"Dil ko thoda waqt do 💞",
"Aankhen YES keh rahi hain 👀❤️",
"Dil ne kaha… ruk ja ⏸️💓",

"Ab NO bolna mushkil ho raha hai 😜",
"Soch lo warna regret free nahi milega 😌",
"Tumhara dil mujhe dhokha nahi dega 💖",
"Yeh NO sirf dialogue hai 🎭",
"Script mein NO tha hi nahi 😏",
"Dil se bolo Ajay 💗",
"Yeh silence bhi kuch keh raha hai 🤍",
"Tum muskura rahe ho… pakka YES 😊",
"Ek aur mauka de do 💘",
"Dil thoda sa aur pighal raha ❤️",

"Ab toh aadat si ho gayi hai tumhari 💞",
"Tumhare NO mein bhi pyaar hai 😍",
"Bas ek YES aur kahani complete 📖",
"Dil ko samjhao zara 💓",
"Tumhara dil soft ho raha 🧸",
"Itna bhi strong nahi ho tum 😌",
"Agar dil maanta hai toh bol do 💖",
"Ek NO se kuch nahi hota 😏",
"Tumhari aankhen jhooth nahi bolti 👀",
"Bas thoda sa courage chahiye 💪",

"Ajay… thoda sa pyaar kar lo 😘",
"Dil ke signal aa rahe hain 📡",
"Yeh NO reject ho gaya ❌",
"Ab toh YES hi acha lagta 😍",
"Tumhara dil meri taraf 💞",
"Dil ne decide kar liya 💓",
"Ek baar haan bol ke dekho 🌹",
"Tumhari khamoshi loud hai 🔊",
"Bas ek click aur… 😌",
"Tumhara NO thak gaya 😴",

"Dil ko follow karo 🧭",
"Hero ka dil heroine ke paas 🎬",
"Ab drama band karo 😜",
"Tumhara dil blush kar raha 😊",
"Ek baar trust kar lo 💕",
"Tumhara NO cute lagta 😍",
"Ab toh YES natural hai 🌸",
"Dil ka Wi-Fi connected 📶",
"Tum already haan bol chuke 😌",
"Bas officially bolna baaki 💘"
];

/* ========= ELEMENTS ========= */
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const img = document.getElementById("cuteImage");
const ring = document.getElementById("ring");
const message = document.getElementById("message");

/* ========= STATE ========= */
let imgIndex = 0;
let noIndex = 0;
let noSize = 18;
let yesSize = 20;

/* ========= NO BUTTON LOGIC ========= */
function sayNo() {
    playMusicOnce();

    noBtn.innerText = noTexts[noIndex % noTexts.length];
    noIndex++;

    img.src = images[imgIndex % images.length];
    imgIndex++;

    noSize = Math.max(noSize - 2, 10);
    noBtn.style.fontSize = noSize + "px";
    noBtn.style.padding = (noSize - 2) + "px";

    yesSize += 3;
    yesBtn.style.fontSize = yesSize + "px";
}

/* ========= YES BUTTON LOGIC ========= */
function sayYes() {
    playMusicOnce();
    voice.play().catch(() => {});

    document.querySelector(".buttons").style.display = "none";
    document.querySelector("h1").style.display = "none";
    document.querySelector("p").style.display = "none";

    ring.style.display = "block";
    launchFireworks();

    setTimeout(() => {
        message.style.display = "block";
    }, 1400);
}

/* ========= FIREWORKS ========= */
function launchFireworks() {
    for (let i = 0; i < 30; i++) {
        let fw = document.createElement("div");
        fw.className = "firework";
        fw.style.left = "50%";
        fw.style.top = "50%";
        fw.style.background = `hsl(${Math.random()*360},100%,60%)`;
        fw.style.setProperty("--x", (Math.random()*400-200)+"px");
        fw.style.setProperty("--y", (Math.random()*400-200)+"px");
        document.body.appendChild(fw);
        setTimeout(() => fw.remove(), 1000);
    }
}

/* ========= FLOATING HEARTS ========= */
setInterval(() => {
    let heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (4 + Math.random() * 3) + "s";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 7000);
}, 700);
