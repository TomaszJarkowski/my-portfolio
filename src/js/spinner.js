export const spinner = () => {
  const content = document.querySelector(".content");
  const spinner = document.querySelector(".loading__spinner");
  window.addEventListener("load", () => {
    console.log("ok");
    spinner.style.display = "none";
    content.style.display = "block";
  });
};
