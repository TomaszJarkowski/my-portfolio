import worldCurriencesIMG from "../img/portfolio/world-currencies.jpg";
import tictactoeIMG from "../img/portfolio/tic-tac-toe.jpg";
import bookingIMG from "../img/portfolio/booking-app.jpg";
import shopGuruIMG from "../img/portfolio/shop-guru.jpg";
import bookSearchIMG from "../img/portfolio/book-search.jpg";
import currenciesConverterIMG from "../img/portfolio/world-currenciesTS.jpg";

const portfolioDB = [
  {
    id: 1,
    name: "Shop-Guru",
    technologys: "MERN (MongoDB, Express, React, Node.js)",
    gh: "https://github.com/TomaszJarkowski/guru",
    link: "https://guru-shop.herokuapp.com/shop",
    img: shopGuruIMG,
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
    name: "Booking-App",
    technologys: "MERN (MongoDB, Express, React, Node.js)",
    gh: "https://github.com/TomaszJarkowski/Booking-App-Front",
    link: "https://booking-app-front.herokuapp.com/",
    img: bookingIMG,
  },
  {
    id: 4,
    name: "Search-Book-App",
    technologys: "React, Context, Jest, SCSS, RWD",
    gh: "https://github.com/TomaszJarkowski/search-books-app",
    link: "https://tomaszjarkowski.github.io/search-books-app/",
    img: bookSearchIMG,
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
    img.alt = el.name;
    img.classList.add("portfolio__img");
    img.setAttribute("loading", "lazy");

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
    buttonGH.innerHTML = `<a href=${el.gh} target='_blank' rel="noopener" rel="noreferrer">Github <i class='fab fa-github'></i></a>`;

    const buttonLive = document.createElement("button");
    buttonLive.classList.add("portfolio__buttonLive");
    buttonLive.innerHTML = `<a href=${el.link} target='_blank' rel="noopener" rel="noreferrer">Demo <i class='fas fa-desktop'></i></a>`;

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
