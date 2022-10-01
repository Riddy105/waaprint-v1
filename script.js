`use strict`;
let counter = 1;
setInterval(function () {
  document.getElementById(`radio` + counter).checked = true;
  counter++;
  if (counter > 3) {
    counter = 1;
  }
}, 3000);

const productsEl = document.querySelectorAll(`.individual-product`);
const receiptOptionEl = document.querySelector(`.Receipt-invoice-option`);
const selectEl = document.querySelector(`select`);
const optionEl = document.querySelectorAll(`option`);
const navEl = document.querySelector(`nav`);
const btnEl = document.querySelector(`.mobile-nav-btn`);
const orderNowEl = document.querySelectorAll(`.order-now`);

function generateWhatsappLink() {
  for (const order of orderNowEl) {
    order.setAttribute(`href`, `https://wa.link/409lp4`);
  }
}
generateWhatsappLink();

// IMPLEMENTING MOBILE NAV BAR
btnEl.addEventListener(`click`, () => {
  navEl.classList.toggle(`nav-open`);
});

// IMPLEMENTING DISPLAY OF PRODUCTS ON SELECTING DIFFERENT OPTIONS IN A SELECT DROPDOWN
selectEl.addEventListener(`change`, () => {
  /* AT EVERY POINT WE CLICK ON ANOTHER OPTION, WE FIRST WANT TO DISPLAY ALL THE PRODUCTS AS BLOCK
   THIS IS DUE TO THE PRODUCTS DISPLAYING AS NONE BECAUSE OF THE CONDITIONS IN THE LATER CODES OF THIS
   ADDEVENTLISTENER. I UNDERSTOOD WHY I DID THIS AS AT THE TIME I WROTE THIS CODE BUT I DOUBT BEING ABLE
   TO REFERENCE THIS CODE LATER ON....SO SAD😢*/
  for (const div of productsEl) {
    div.style.display = `block`;
  }

  //Let the loop start from 1 cos 'All products' is at pos 0
  for (let i = 1; i < optionEl.length; i++)
    if (selectEl.selectedIndex == i) {
      for (const product of productsEl) {
        if (!product.classList.contains(`product-${i}`)) {
          product.style.display = `none`;
        }
      }
    }
});

/* TO IMPLEMENT SPECIFIC PRODUCTS DISPLAYING WHEN WE SELECT A MATCHING OPTION FROM A DROPDOWN SELECT, THE CODE 
BELOW WAS A SIMPLER AND MORE READABLE WAY OF DOING THAT BUT THE CODE IS REPITITIVE AND HENCE THE NEED 
TO OPTIMIZE IT WHICH GAVE WAY TO THE CODE BELOW. ALL I DID WAS FIND A WAY TO COMPUTE THE PRODUCTS CLASSES 
IN SUCH A WAY THAT IT CONTAINS DIGITS, EACH DIGIT IS UNIQUE AND POINTS TO THE INDEX OF THE OPTION FOR THAT 
PARTICULAR PRODUCT. I'M SUPER PROUD OF MYSELF COS AT THE MOMENT I BUILT THIS, I HAD BARELY TAKEN AN ADVANCED
DOM MANIPULATION COURSE. 
*/
/*
selectEl.addEventListener(`change`, () => {
  // AT EVERY POINT WE CLICK ON ANOTHER OPTION, WE FIRST WANT TO DISPLAY ALL THE PRODUCTS AS BLOCK
  // THIS IS DUE TO THE PRODUCTS DISPLAYING AS NONE BECAUSE OF THE CONDITIONS IN THE LATER CODES OF THIS
  // ADDEVENTLISTENER. I UNDERSTOOD WHY I DID THIS AS AT THE TIME I WROTE THIS CODE BUT I DOUBT BEING ABLE
  // TO REFERENCE THIS CODE LATER ON....SO SAD😢
  for (const div of productsEl) {
    div.style.display = `block`;
  }

  if (selectEl[selectEl.selectedIndex].value == `Receipt-invoice`) {
    for (const product of productsEl) {
      if (!product.classList.contains(`Receipt-invoice`)) {
        product.style.display = `none`;
      }
    }
  } else if (selectEl[selectEl.selectedIndex].value == `business-cards`) {
    for (const product of productsEl) {
      if (!product.classList.contains(`Business-card`)) {
        product.style.display = `none`;
      }
    }
  } else if (selectEl[selectEl.selectedIndex].value == `Flex-banner`) {
    for (const product of productsEl) {
      if (!product.classList.contains(`flex-banner`)) {
        product.style.display = `none`;
      }
    }
  }
});

*/
