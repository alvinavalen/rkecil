// page 1 ke 3
let balloonInterval;

function buttonpage1() {

  const music = document.getElementById("bgMusic");
  music.play().catch(() => {});
  music.volume = 0.8;

  const page1 = document.getElementById("page1");
  const page3 = document.getElementById("page3");

  page1.classList.remove("active");
  page3.classList.add("active");

  setTimeout(() => {
    page3.classList.add("light-on");

    // 🎈 mulai balon
    startBalloons();

    // ✨ munculin tulisan HBD
    const hbd = document.querySelector(".hbd");
    if (hbd) {
      hbd.classList.add("show");
    }

  }, 200);
}

// img page 3
setTimeout(() => {
  const imgcontainer3 = document.querySelector(".imgcontainer3");
  if (imgcontainer3) {
    imgcontainer3.classList.add("show");
  }
}, 200);

// page 3 ke 4
function buttonpage3() {
  const page3 = document.getElementById("page3");
  const page4 = document.getElementById("page4");

  page3.classList.remove("active");
  page4.classList.add("active");
  
  startLoveRain(); // 🎉 mulai confetti
}

// page 4 ke 41
function buttonpage41() {
  const page4 = document.getElementById("page4");
  const page41 = document.getElementById("page41");

  page4.classList.remove("active");
  page41.classList.add("active");
}

// page 4 ke 42
function buttonpage42() {
  const page4 = document.getElementById("page4");
  const page42 = document.getElementById("page42");

  page4.classList.remove("active");
  page42.classList.add("active");
}

// back dari page 41 ke page 4
function backBtn41() {
  const page41 = document.getElementById("page41");
  const page4 = document.getElementById("page4");

  page41.classList.remove("active");
  page4.classList.add("active");
}

// back dari page 42 ke page 4
function backBtn42() {
  const page42 = document.getElementById("page42");
  const page4 = document.getElementById("page4");

  page42.classList.remove("active");
  page4.classList.add("active");
}

// back dari page 4 ke page 3
function buttonpageback() {
  const page4 = document.getElementById("page4");
  const page3 = document.getElementById("page3");

  page4.classList.remove("active");
  page3.classList.add("active");
}

// modal gallery page 41
function openModalgallery(imageSrc, captionText) {
    let modal = document.getElementById("modalgallery");
    let modalImg = document.getElementById("modal-img");
    let caption = document.getElementById("caption");

    modal.style.display = "flex";

    setTimeout(() => {
        modal.classList.add("show");
    }, 10);

    modalImg.src = imageSrc;
    caption.innerText = captionText;
}

function closeModalgallery() {
    let modal = document.getElementById("modalgallery");

    modal.classList.remove("show");
    modal.style.display = "none";
}

document.getElementById("modalgallery").addEventListener("click", function(e) {
  if (e.target === this) {
    closeModalgallery();
  }
});



// modal page 43
function openModal43() {
  document.getElementById("myModal").classList.add("active");
}

function closeModal43() {
  document.getElementById("myModal").classList.remove("active");
}

// close kalau klik luar
document.getElementById("myModal").addEventListener("click", function(e) {
  if (e.target === this) {
    closeModal43();
  }
});

// logic balon
function startBalloons() {
  const container = document.querySelector('.balloon-container');

  balloonInterval = setInterval(() => {
    createBalloon(container);
  }, 500); // tiap 0.5 detik muncul balon baru
}

function createBalloon(container) {
  const balloon = document.createElement('img');
  
  const balloonImages = [
    "b1.png",
    "b2.png",
    "b3.png",
    "b4.png",
    "b5.png",
    "b6.png",
    "b7.png"
  ];

  balloon.src = balloonImages[Math.floor(Math.random() * balloonImages.length)];
  balloon.style.position = "absolute";
  balloon.style.width = (40 + Math.random() * 40) + "px";

  let x = Math.random() * window.innerWidth;
  let y = window.innerHeight + 100;

  let speed = 0.5 + Math.random() * 1.5;
  let sway = Math.random() * 2;
  let direction = Math.random() > 0.5 ? 1 : -1;

  balloon.style.left = x + "px";
  balloon.style.top = y + "px";

  container.appendChild(balloon);

  function animate() {
    y -= speed;
    x += Math.sin(y * 0.01) * sway * direction;

    balloon.style.top = y + "px";
    balloon.style.left = x + "px";

    if (y > -200) {
      requestAnimationFrame(animate);
    } else {
      balloon.remove();
    }
  }

  animate();
}

// typeloop button43
const text = "i love you more ";
const element = document.getElementById("typeLoop");

let index = 0;

function typeInfinite() {
  element.textContent += text[index];
  index++;

  if (index >= text.length) {
    index = 0; // ulang lagi dari huruf pertama
  }

  setTimeout(typeInfinite, 50); // kecepatan ketik
}

typeInfinite();

// confetti page 4
function startLoveRain(){

  const container = document.getElementById("love-container");

  const loveImages = [
    "whitelove.png",
    "greenlove.png"
  ];

  setInterval(()=>{

    const love = document.createElement("img");

    // pilih gambar random
    const randomImage = loveImages[Math.floor(Math.random() * loveImages.length)];
    love.src = randomImage;

    love.classList.add("love");

    love.style.left = Math.random() * window.innerWidth + "px";
    love.style.animationDuration = (5 + Math.random()*5) + "s";
    love.style.width = (20 + Math.random()*30) + "px";

    container.appendChild(love);

    setTimeout(()=>{
      love.remove();
    },8000);

  },500);
}

// show title page 41
function buttonpage41(){

  const page4 = document.getElementById("page4");
  const page41 = document.getElementById("page41");

  page4.classList.remove("active");
  page41.classList.add("active");

  setTimeout(()=>{
    document.querySelector(".titlepage41").classList.add("show");
  },100);

}

// show title page 42
function buttonpage42(){

  const page4 = document.getElementById("page4");
  const page42 = document.getElementById("page42");

  page4.classList.remove("active");
  page42.classList.add("active");

  setTimeout(()=>{
    document.querySelector(".titlepage42").classList.add("show");
  },100);

}

// show article
const article = document.querySelector(".main-article");

setTimeout(() => {
  article.classList.add("show");
}, 200);

// image modal 44
function openImage44(){
  document.getElementById("imageModal44").classList.add("show");
}

function closeImage44(){
  document.getElementById("imageModal44").classList.remove("show");
}

// close kalau klik luar
document.getElementById("imageModal44").addEventListener("click", function(e) {
  if (e.target === this) {
    closeImage44();
  }
});

// letter modal 42
function openLetter42(){
  document.getElementById("letterModal42").classList.add("show");
}

function closeLetter42(){
  document.getElementById("letterModal42").classList.remove("show");
}

// close kalau klik luar
document.getElementById("letterModal42").addEventListener("click", function(e) {
  if (e.target === this) {
    closeLetter42();
  }
});
