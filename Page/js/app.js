const fontFamily = [
  "FancyCartoon",
  "FancyComic",
  "FancyGroovy",
  "GothicCeltic",
  "GothicModern",
  "ScriptBrush"
];
const delete_cookie = function(name) {
  document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  return "Удалены";
};

const family = document.querySelector(".main");
family.addEventListener("click", selectFamily);

function selectFamily({ target }) {
  if (target.nodeName !== "P") return false;

  // Отмечаем акстивную карточку
  const familyItem = document.querySelector(".activeCard");
  familyItem.classList = "card";
  target.parentNode.classList = "card activeCard";
  // ================================

  switch (target.parentNode.dataset.set) {
    case "FancyCartoon":
      createBox(FancyCartoon);
      break;
    case "FancyComic":
      createBox(FancyComic);
      break;
    case "FancyGroovy":
      createBox(FancyGroovy);
      break;
    case "GothicCeltic":
      createBox(GothicCeltic);
      break;
    case "GothicModern":
      createBox(GothicModern);
      break;
    case "ScriptBrush":
      createBox(ScriptBrush);
      break;
  }
}

createBox(FancyCartoon);

function createBox(arr) {
  // Из полученой карточки чистим бокс и заполняем его
  const box = document.querySelector(".box__shrift");
  box.innerHTML = ""; // Чистка
  for (let i = 0; i < arr.length; i++) {
    box.insertAdjacentHTML(
      "beforeend",
      `<a href="#canvas"><div data-shrift="${
        arr[i].name
      }" class="shrift"><svg class="icon"><use href="#bin-icon"></use></svg><img class="font_img"src="${
        arr[i].src
      }"alt="${arr[i].alt}" title="${arr[i].name}"/></div></a>`
    );
  }
}

// delete_cookie("text");
// delete_cookie("font");

const font = document.querySelector(".box__shrift");
font.addEventListener("click", fontsFn);

color();
function color() {
  const colorFont = document.querySelector(".colortext");
  const colorBg = document.querySelector(".colorbg");

  for (let i = 0; i < COLOR.length; i += 1) {
    const el = document.createElement("div");
    el.dataset.color = "color";
    el.classList = "colorpic";
    if (i === 0) {
      el.classList = "colorpic white ok";
    }
    el.style.backgroundColor = `#${COLOR[i]}`;
    colorFont.append(el);
  }
  
  // const el = document.createElement("div");
  // el.dataset.color = "colorbg";
  // el.classList = "colorpic transparent ok";
  // el.style.backgroundColor = `#ffffff00`;
  // el.title = "Transparent";
  // colorBg.append(el);
  
  // for (let i = 0; i < COLOR.length; i += 1) {
  //   const el = document.createElement("div");
  //   el.classList = "colorpic ";
  //   if (i === 0) el.classList.add("white");
  //   el.dataset.color = "colorbg";
  //   el.style.backgroundColor = `#${COLOR[i]}`;
  //   colorBg.append(el);
  // }
}

// Плавный скрол
var linkNav = document.querySelectorAll('[href^="#"]'), //выбираем все ссылки к якорю на странице
  V = 0.2; // скорость, может иметь дробное значение через точку (чем меньше значение - тем больше скорость)
for (var i = 0; i < linkNav.length; i++) {
  linkNav[i].addEventListener(
    "click",
    function(e) {
      //по клику на ссылку
      e.preventDefault(); //отменяем стандартное поведение
      var w = window.pageYOffset, // производим прокрутка прокрутка
        hash = this.href.replace(/[^#]*(.*)/, "$1"); // к id элемента, к которому нужно перейти
      (t = document.querySelector(hash).getBoundingClientRect().top), // отступ от окна браузера до id
        (start = null);
      requestAnimationFrame(step); // подробнее про функцию анимации [developer.mozilla.org]
      function step(time) {
        if (start === null) start = time;
        var progress = time - start,
          r =
            t < 0
              ? Math.max(w - progress / V, w + t)
              : Math.min(w + progress / V, w + t);
        window.scrollTo(0, r);
        if (r != w + t) {
          requestAnimationFrame(step);
        } else {
          location.hash = hash; // URL с хэшем
        }
      }
    },
    false
  );
}

// Переменные для конвас
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.textBaseline = "middle";

// Переменные цвет размер текст
let colorVal = "#fff";
let sizeVal = "40";
let lineVal = "TATTOO inscription";
let fontsVal = "ALIN_KID";
let textPosition = canvas.width / 2;

// Листенеры
// Размер
const SIZE = document.querySelector(".size .write-box");
SIZE.addEventListener("click", sizeFn);

const LINE = document.querySelector(".write");
LINE.addEventListener("input", setLine);

const COLORFN = document.querySelector(".colortext");
COLORFN.addEventListener("click", colorFn);

// const COLORBG = document.querySelector(".colorbg");
// COLORBG.addEventListener("click", colorBgFn);

const wrp = document.querySelector(".shrift--wrp");
// window.addEventListener("resize"
// document.addEventListener('resize', canvasResize);
window.addEventListener("resize", canvasResize);
function canvasResize() {
  // console.log(wrp.offsetWidth - 30);
  canvas.width = wrp.offsetWidth - 30;
  textPosition = canvas.width / 2;
  // console.log(textPosition);
  update();
}
// Функции
// Чистка конвас
const clearConvas = function() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  return true;
};
// Обнвление содержимого
function update() {
  clearConvas();
  // createBg();


  ctx.textAlign = "center";
  ctx.fillStyle = colorVal;
  ctx.font = `${sizeVal + "px"} ${fontsVal}`;
  ctx.fillText(lineVal, textPosition, 120);
}

// function createBg() {
//   console.time();
//   let newBoxColor =  document.querySelector(".colorbg .ok").style.backgroundColor;
//   newBoxColor = newBoxColor.substring(5, newBoxColor.length-1)
//   .replace(/ /g, '')
//   .split(',');
//   const newBox = ctx.createImageData(canvas.width, 200);
//   // console.log(newBox.data.length);
//   // console.log(newBoxColor);
// console.log( newBox.data.length / 4);
//   // for (let i = 0; i < newBox.data.length; i += 4) {
//   //   newBox.data[i + 0] = newBoxColor[0];
//   //   newBox.data[i + 1] = newBoxColor[1];
//   //   newBox.data[i + 2] = newBoxColor[2];
//   //   newBox.data[i + 3] = newBoxColor[3] || 255;
//   //   console.log(newBox.data[3]);
//   // }
//   ctx.putImageData(newBox, 0, 0);
//   console.timeEnd();
// }

function fontsFn({ target }) {
  if (
    target.nodeName === "IMG" ||
    target.nodeName === "svg" ||
    target.nodeName === "use"
    ) {
      const parent = target.closest("div.shrift");
      console.log(parent);
      fontsVal = parent.dataset.shrift;
    }
    // console.log(target);
    if (target.className === "refresh") {
      console.log(document.querySelector(".write").value);
      lineVal = document.querySelector(".write").value;
    }
    update();
  }
  
  function setLine({ target }) {
    LINE.value = target.value.replace(/[^a-zA-Z0-9 -]/ig,'');           
    console.log(target);
    lineVal = target.value;
    update();
  }
  
  // Получение цвет текста
  function colorFn({ target }) {
    if (target.dataset.color === "color") {
      const a = document.querySelector(".colortext .ok");
      a.classList.remove("ok");
      target.classList.add("ok");
      
      colorVal = target.style.backgroundColor;
      console.log(colorVal);
      update();
    }
  }
  // Получение цвет фона
  function colorBgFn({ target }) {
  if (target.dataset.color === "colorbg") {
    const b = document.querySelector(".colorbg .ok");
    b.classList.remove("ok");
    target.classList.add("ok");
    // ctx.fillRect(0, 0, canvas.width, 200);
    // canvas.style.backgroundColor = target.style.backgroundColor;
    // console.log(colorVal);
    update();
  }
}
// Получение размер
function sizeFn({ target }) {
  if (target.dataset.size) {
    sizeVal = target.dataset.size;
  } else {
    sizeVal = Number(sizeVal) + Number(target.dataset.calc);
    console.log(false);
  }
  update();
}

function download() {
  var download = document.getElementById("download");
  var image = document
    .getElementById("canvas")
    .toDataURL("image/png")
    .replace("image/png", "image/octet-stream");
  download.setAttribute("href", image);
}

update();
