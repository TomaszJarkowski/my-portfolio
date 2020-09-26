import "../scss/style.scss";
import * as THREE from "three";
import AOS from "aos";
import "aos/dist/aos.css";

import WAVES from "vanta/dist/vanta.waves.min";
import { menu } from "./menu";
import { skills } from "./skills";
import { portfolio } from "./portfolio";
import { contact } from "./contact";
import { animationScroll } from "./animationScroll";
import { spinner } from "./spinner";

spinner();
menu();
skills();
portfolio();
contact();
animationScroll();

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

window.addEventListener("load", () => {
  const headerBG = document.querySelector(".header");

  WAVES({
    el: headerBG,
    THREE: THREE, // use a custom THREE when initializing
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 1.0,
    scaleMobile: 1.0,
    color: 0x6634,
    shininess: 6.0,
    waveHeight: 21.0,
    waveSpeed: 0.45,
    zoom: 0.8,
  });
});
