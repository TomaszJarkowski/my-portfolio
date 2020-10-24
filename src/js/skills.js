import htmlIMG from "../img/skills/html5.png";
import cssIMG from "../img/skills/css3.png";
import sassIMG from "../img/skills/sass.png";
import bootstrapIMG from "../img/skills/bootstrap.png";
import JSIMG from "../img/skills/javascript.png";
import ReactIMG from "../img/skills/react.png";
import ReduxIMG from "../img/skills/redux.png";
import RWDIMG from "../img/skills/rwd.png";
import nodeJSIMG from "../img/skills/node-js.png";
import mongoDBIMG from "../img/skills/mongodb.png";
import npmIMG from "../img/skills/npm.png";
import jestIMG from "../img/skills/jest.png";
import gitIMG from "../img/skills/git.png";
import vsIMG from "../img/skills/visual-studio-code.png";
import parcelIMG from "../img/skills/parcel.png";
import seoIMG from "../img/skills/seo.png";
import typescriptIMG from "../img/skills/typescript.png";
import nextJSIMG from "../img/skills/nextJS.png";
const dataSkills = [
  {
    id: 1,
    type: "front",
    name: "HTML",
    img: htmlIMG,
  },
  {
    id: 2,
    type: "front",
    name: "CSS",
    img: cssIMG,
  },
  {
    id: 3,
    type: "front",
    name: "SASS",
    img: sassIMG,
  },
  {
    id: 4,
    type: "front",
    name: "JavaScript",
    img: JSIMG,
  },
  {
    id: 5,
    type: "front",
    name: "TypeScript",
    img: typescriptIMG,
  },
  {
    id: 6,
    type: "front",
    name: "Next.js",
    img: nextJSIMG,
  },
  {
    id: 7,
    type: "front",
    name: "React",
    img: ReactIMG,
  },
  {
    id: 8,
    type: "front",
    name: "Redux",
    img: ReduxIMG,
  },
  {
    id: 9,
    type: "back",
    name: "Node.js",
    img: nodeJSIMG,
  },
  {
    id: 10,
    type: "back",
    name: "MongoDB",
    img: mongoDBIMG,
  },
  {
    id: 11,
    type: "other",
    name: "RWD",
    img: RWDIMG,
  },
  {
    id: 12,
    type: "other",
    name: "NPM",
    img: npmIMG,
  },
  {
    id: 13,
    type: "other",
    name: "Jest",
    img: jestIMG,
  },
  {
    id: 14,
    type: "other",
    name: "GIT",
    img: gitIMG,
  },
  {
    id: 15,
    type: "other",
    name: "Visual Studio Code",
    img: vsIMG,
  },
  {
    id: 16,
    type: "other",
    name: "Parcel",
    img: parcelIMG,
  },
  {
    id: 17,
    type: "other",
    name: "SEO",
    img: seoIMG,
  },
];

export const skills = () => {
  const containerFront = document.querySelector(".frontend__container");
  const containerBack = document.querySelector(".backend__container");
  const containerOther = document.querySelector(".other__container");
  let delayAnimationFront = 0;
  let delayAnimationBack = 0;
  let delayAnimationOther = 0;
  dataSkills.forEach((skill) => {
    const div = document.createElement("div");
    const h4 = document.createElement("h4");
    const img = document.createElement("img");

    div.className = "skill";
    div.dataset.aos = "fade";
    h4.innerText = skill.name;
    img.src = skill.img;

    div.appendChild(h4);
    div.appendChild(img);

    if (skill.type == "front") {
      div.dataset.aosDelay = 0 + delayAnimationFront;
      containerFront.appendChild(div);
      delayAnimationFront += 50;
    } else if (skill.type == "back") {
      div.dataset.aosDelay = 0 + delayAnimationBack;
      containerBack.appendChild(div);
      delayAnimationBack += 50;
    } else if (skill.type == "other") {
      div.dataset.aosDelay = 0 + delayAnimationOther;
      containerOther.appendChild(div);
      delayAnimationOther += 50;
    }
  });
};
