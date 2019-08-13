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
      `<div data-shrift="${
        arr[i].name
      }" class="shrift"><svg class="icon"><use href="#bin-icon"></use></svg><img class="font_img"src="${
        arr[i].src
      }"alt="${arr[i].alt}" title="${arr[i].name}"/></div>`
    );
  }
}



const font = document.querySelector(".box__shrift");
font.addEventListener("click", push);
function push({ target }) {
  delete_cookie("text");
  delete_cookie("font");
  if (
    target.nodeName === "IMG" ||
    target.nodeName === "svg" ||
    target.nodeName === "use"
  ) {
    document.cookie = `text=${document.getElementById("text").value}`;
    const parent = target.closest('div.shrift');
    
    document.cookie = `font=${parent.dataset.shrift}`;
    console.log(document.cookie);
  }
}


color();
function color() {
  const colorFont = document.querySelector(".colortext");
  const colorBg  = document.querySelector(".colorbg");

  for (let i = 0; i < COLOR.length; i +=1) {
    const el = document.createElement("div");
    el.classList = "colorpic";
    el.style.backgroundColor = `#${COLOR[i]}`;
    colorFont.append(el);
  }

  const el = document.createElement("div");
  el.classList = "colorpic transparent";
  el.style.backgroundColor = `#ffffff00`;
  el.title = "Transparent"
  colorBg.append(el);


  for (let i = 0; i < COLOR.length; i +=1) {
    const el = document.createElement("div");
    el.classList = "colorpic";
    el.style.backgroundColor = `#${COLOR[i]}`;
    colorBg.append(el);
  }
}