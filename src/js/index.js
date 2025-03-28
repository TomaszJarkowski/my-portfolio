import "../scss/style.scss";

import AOS from "aos";
import "aos/dist/aos.css";
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';

import { menu } from "./menu";
import { skills } from "./skills";
import { portfolio } from "./portfolio";
import { animationScroll } from "./animationScroll";
import { spinner } from "./spinner";

spinner();
menu();
skills();
// portfolio();
animationScroll();

tippy('.info__item', {
  placement: 'right',
  content: "Click to copy!",
});

tippy('.info__item', {
  placement: 'right',
  trigger: "click",
  content: "Copied!",
  duration: '1s',
});

const itemsToCopy = document.querySelectorAll('.info__item')

itemsToCopy.forEach(el => {
  el.addEventListener('click', () => {
    navigator.clipboard.writeText(el.innerText);
  })
})

AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
  initClassName: "aos-init", // class applied after initialization
  animatedClassName: "aos-animate", // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1500, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});
