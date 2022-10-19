`use strict`;
// EXPORTED THIS INTO A SEPERATE JS FILE COS, IT CONTAINS CODE PECULIAR TO THE HOME PAGE ALONE. HAVING IT IN
// MAIN FILE DISTRUPTS FUNCTIONALITIES ON THE PRODUCTS PAGE.
let counter = 1;
const tick = function () {
  document.getElementById(`radio` + counter).checked = true;
  counter++;
  if (counter > 3) {
    counter = 1;
  }
};
tick();
setInterval(tick, 2500);

const mediaQuery = window.matchMedia("(max-width : 430px)");
// IMPLEMENTING QUALITY SECTION FADE-IN WITH INTERSECTION OBSERVER
const qualitySectionEl = document.querySelector(`.quality-section`);
const navigationEl = document.querySelector(`nav`);
qualitySectionEl.classList.add(`hide-right`); // For performance, I am hiding the section with javascript so it's completely visible to anyone who has turned off JS engine
const ObsCallBack = function (entries) {
  const [entry] = entries;
  if (entry.isIntersecting) {
    qualitySectionEl.classList.remove(`hide-right`);
  } else {
    qualitySectionEl.classList.add(`hide-right`);
  }
};
const observer = new IntersectionObserver(ObsCallBack, {
  root: null,
  threshold: 0,
});

observer.observe(qualitySectionEl);

// IMPLEMENTING BALL ROLLING
const ballEl = document.querySelector(`.ball`);
const ballObsCallBack = function (entries) {
  const [entry] = entries;
  if (entry.isIntersecting) {
    entry.target.classList.remove(`hide-ball`);
  } else {
    entry.target.classList.add(`hide-ball`);
  }
};
const ballObsever = new IntersectionObserver(ballObsCallBack, {
  root: null,
  threshold: 0,
});
ballObsever.observe(ballEl);
