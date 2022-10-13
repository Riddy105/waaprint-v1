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
