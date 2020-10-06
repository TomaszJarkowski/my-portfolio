import worldCurriencesIMG from "../img/portfolio/world-currencies.jpg";
import tictactoeIMG from "../img/portfolio/tic-tac-toe.jpg";
import incomesIMG from "../img/portfolio/income.jpg";
import shopGuru from "../img/portfolio/shop-guru.jpg";
const portfolioDB = [
  {
    id: 1,
    name: "Shop-Guru",
    technologys: "MERN (MongoDB, Express, React, Node.js)",
    gh: "https://github.com/TomaszJarkowski/shop-guru",
    link: "https://guru-shop.herokuapp.com/shop",
    img: shopGuru,
  },
  {
    id: 2,
    name: "Tic-Tac-Toe",
    technologys: "SCSS, HTML, JavaScript, Local Storage, RWD, Parcel",
    gh: "https://github.com/TomaszJarkowski/Tic_Tac_Toe_Game",
    link: "https://tomaszjarkowski.github.io/Tic_Tac_Toe_Game",
    img: tictactoeIMG,
  },
  {
    id: 3,
    name: "World-Currencies-App",
    technologys: "Bootstrap, HTML, JavaScript, RWD, Parcel",
    gh: "https://github.com/TomaszJarkowski/world-currencies-app",
    link: "https://tomaszjarkowski.github.io/world-currencies-app",
    img: worldCurriencesIMG,
  },
  {
    id: 4,
    name: "Incomes-Companies",
    technologys: "SCSS, HTML, JavaScript, RWD, Parcel",
    gh: "https://github.com/TomaszJarkowski/Incomes-Companies",
    link: "https://tomaszjarkowski.github.io/Incomes-Companies",
    img: incomesIMG,
  },
];

export const portfolio = () => {
  const portfolio__content = document.querySelector(".portfolio__content");
  let i = 1;
  portfolioDB.forEach((el) => {
    const container = document.createElement("div");
    container.classList.add("portfolio__item");

    const img = document.createElement("img");
    img.src = el.img;
    img.classList.add("portfolio__img");

    const bg = document.createElement("div");
    bg.classList.add("portfolio__bg");

    const header = document.createElement("div");
    header.classList.add("portfolio__header");

    const h2 = document.createElement("h2");
    h2.classList.add("portfolio__name");
    h2.textContent = el.name;

    const p = document.createElement("p");
    p.classList.add("portfolio__technologys");
    p.textContent = `${el.technologys}`;

    const buttons = document.createElement("div");
    buttons.classList.add("portfolio__buttons");

    const buttonGH = document.createElement("button");
    buttonGH.classList.add("portfolio__buttonGH");
    buttonGH.innerHTML = `<a href=${el.gh} target='_blank'>Github <i class='fab fa-github'></i></a>`;

    const buttonLive = document.createElement("button");
    buttonLive.classList.add("portfolio__buttonLive");
    buttonLive.innerHTML = `<a href=${el.link} target='_blank'>Demo <i class='fas fa-desktop'></i></a>`;

    buttons.appendChild(buttonGH);
    buttons.appendChild(buttonLive);

    header.appendChild(h2);
    header.appendChild(p);
    header.appendChild(buttons);

    container.appendChild(img);
    container.appendChild(bg);
    container.appendChild(header);

    if (i % 2) {
      container.dataset.aos = "fade-right";
    } else {
      container.dataset.aos = "fade-left";
    }

    portfolio__content.appendChild(container);

    i++;
  });
};
