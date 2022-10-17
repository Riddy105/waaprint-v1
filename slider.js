`use strict`;
// EXPORTED THIS INTO A SEPERATE JS FILE COS THE PRODUCTS PAGE
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
qualitySectionEl.classList.add(`fade-in`); // For performance, I am hiding the section with javascript so it's completely visible to anyone who has turned off JS engine
// const navElement = document.querySelector(`nav`);
const ObsCallBack = function (entries) {
  const [entry] = entries;
  if (entry.isIntersecting) {
    qualitySectionEl.classList.remove(`fade-in`);
    navigationEl.classList.remove(`nav-open`);
    // navElement.classList.remove(`nav-open`);
  } else {
    qualitySectionEl.classList.add(`fade-in`);
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
  console.log(entry.isIntersecting);
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
