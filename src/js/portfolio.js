import tictactoeIMG from "../img/portfolio/tic-tac-toe.jpg";
import shopGuruIMG from "../img/portfolio/shop-guru.jpg";
import nestIMG from "../img/portfolio/nest.jpeg";
import fishingBlogIMG from "../img/portfolio/fishing-blog.jpg";

const portfolioDB = [
  {
    id: 1,
    name: "Shop-Guru",
    technologys: "MERN (MongoDB, Express, React, Node.js)",
    gh: "https://github.com/TomaszJarkowski/guru",
    link: "https://guru-shop.herokuapp.com",
    img: shopGuruIMG,
  },
  {
    id: 2,
    name: "Fishing-Blog",
    technologys: "Next, SCSS, Markdown",
    gh: "https://github.com/TomaszJarkowski/blog_app",
    link: "https://blog-app-tomaszjarkowski.vercel.app/",
    img: fishingBlogIMG,
  },
  {
    id: 3,
    name: "Products-App",
    technologys: "Nest, Passport, MySQL, Typeorm, Interceptors, Guards",
    gh: "https://github.com/TomaszJarkowski/nest-products",
    link: null,
    img: nestIMG,
  },
  {
    id: 4,
    name: "Tic-Tac-Toe",
    technologys: "SCSS, HTML, JavaScript, Local Storage, RWD, Parcel",
    gh: "https://github.com/TomaszJarkowski/Tic_Tac_Toe_Game",
    link: "https://tomaszjarkowski.github.io/Tic_Tac_Toe_Game",
    img: tictactoeIMG,
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

    if(!el.link) {
      buttonLive.classList.add("portfolio__buttonDisabled");
      buttonLive.innerHTML = `<a>Demo <i class='fas fa-desktop'></i></a>`;
    } else {
      buttonLive.classList.add("portfolio__buttonLive");
      buttonLive.innerHTML = `<a href=${el.link} target='_blank' rel="noopener" rel="noreferrer">Demo <i class='fas fa-desktop'></i></a>`;
    }

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
