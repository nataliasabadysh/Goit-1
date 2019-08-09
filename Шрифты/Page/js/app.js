const fontFamily = [
  "FancyCartoon",
  "FancyComic",
  "FancyGroovy",
  "GothicCeltic",
  "GothicModern",
  "ScriptBrush"
];
const delete_cookie = function(name) {
  document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
return 'Удалены'
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

  // Из полученой карточки чистим бокс и заполняем его
  const box = document.querySelector(".box-shrift .box");
  box.innerHTML = ""; // Чистка

  // Меняем баннер
  const banner = document.createElement("div");
  banner.classList = "baner";
  const imglink = document.createElement("a");
  imglink.href = "https://vean-tattoo.com/portfolio"
  const imgBaner = document.createElement("img");
  imgBaner.src =
    "https://192.168.1.115/component/widgetkit/?p=image&w=1090&h=360&strategy=&file=images%2FBaner%2FBanerMastera.png&hash=eb3ea91bc20e163c55a1700ac5d9775d";
  imgBaner.alt = "banner";
  
  box.append(banner);
  banner.append(imglink);
  imglink.append(imgBaner);
  //  Конец замене банера

  // Создаем контейнер и положим в него массив элементов
  const boxShrift = document.createElement("div");
  boxShrift.classList = "box__shrift";
  box.append(boxShrift);

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

  function createBox(arr) {
   for (let i = 0; i < arr.length; i++) {
        boxShrift.insertAdjacentHTML("beforeend",`<div class="shrift"><svg class="icon"><use href="#bin-icon"></use></svg><img class="font_img"src="${arr[i].src}"alt="${arr[i].alt}" title="${arr[i].name}"/></div>`);
    }
  }
}

const font = document.querySelector('.box__shrift');

font.addEventListener('click', push);

function push({target}) {
  if (target.nodeName === 'IMG' || target.nodeName === 'svg' || target.nodeName === 'use') {
   document.cookie = `text=${document.getElementById('text').value}`;
   console.log(document.cookie);
   delete_cookie("text")
  }
}