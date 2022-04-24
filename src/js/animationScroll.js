import jump from "jump.js";

export const animationScroll = () => {
  const arrow = document.querySelector(".header__arrow");
  const aboutMe = document.querySelector(".aboutMe");
  const skills = document.querySelector(".skills");
  const portfolio = document.querySelector(".portfolio");
  const experience = document.querySelector(".experience");
  const contact = document.querySelector(".contact");
  const header = document.querySelector(".header");

  const linkAboutMe = document.querySelector(".link__aboutMe");
  const linkExperience = document.querySelector(".link__experience");
  const linkSkills = document.querySelector(".link__skills");
  const linkPortfolio = document.querySelector(".link__portfolio");
  const linkContact = document.querySelector(".link__contact");
  const backTop = document.querySelector(".backTop button");
  const linkInText = document.querySelector(".aboutMe__content a");
  const option = {
    duration: 1000,
    offset: 0,
    callback: undefined,
    a11y: false,
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY >= aboutMe.offsetTop) {
      backTop.classList.add("active");
    } else {
      backTop.classList.remove("active");
    }
  });
  linkInText.addEventListener("click", () => {
    jump(skills, option);
  });
  arrow.addEventListener("click", () => {
    jump(aboutMe, option);
  });

  backTop.addEventListener("click", () => {
    jump(header, option);
  });

  linkAboutMe.addEventListener("click", () => {
    jump(aboutMe, option);
  });
  linkSkills.addEventListener("click", () => {
    jump(skills, option);
  });
  linkPortfolio.addEventListener("click", () => {
    jump(portfolio, option);
  });
  linkExperience.addEventListener("click", () => {
    jump(experience, option);
  });
  linkContact.addEventListener("click", () => {
    jump(contact, option);
  });
};
