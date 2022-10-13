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

// IMPLEMENTING QUALITY SECTION FADE-IN WITH INTERSECTION OBSERVER
const qualitySectionEl = document.querySelector(`.quality-section`);
const ObsCallBack = function (entries) {
  const [entry] = entries;
  if (entry.isIntersecting) {
    qualitySectionEl.classList.add(`fade-in`);
  } else {
    qualitySectionEl.classList.remove(`fade-in`);
  }
};

const observer = new IntersectionObserver(ObsCallBack, {
  root: null,
  threshold: 0,
});

observer.observe(qualitySectionEl);
