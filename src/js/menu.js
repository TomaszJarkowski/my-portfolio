export const menu = () => {
  const burger = document.querySelector(".burger");
  const menuItems = document.querySelector(".menu");
  const navLinks = document.querySelectorAll(".menu li");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      burger.classList.remove("toggle");
      flague = false;
      menuItems.style.animation = "backAnimation .65s ease forwards";
      navLinks.forEach((link, index) => {
        link.style.animation = `backNavLinkFade 0.7s ease forwards`;
      });
    });
  });
  let flague = false;
  burger.addEventListener("click", () => {
    burger.classList.toggle("toggle");
    if (flague) {
      flague = false;
      menuItems.style.animation = "backAnimation .65s ease forwards";
    } else {
      flague = true;
      menuItems.style.animation = "menuAnimation .65s ease forwards";
    }
    navLinks.forEach((link, index) => {
      if (!flague) {
        link.style.animation = `backNavLinkFade 0.7s ease forwards`;
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 5 + 0.3
        }s`;
      }
    });
  });
};
