`use strict`;

const productsEl = document.querySelectorAll(`.individual-product`);
const productNameEl = document.querySelectorAll(`.product-name`);
const receiptOptionEl = document.querySelector(`.Receipt-invoice-option`);
const selectEl = document.querySelector(`select`);
const optionEl = document.querySelectorAll(`option`);
const navEl = document.querySelector(`nav`);
const btnEl = document.querySelector(`.mobile-nav-btn`);
const orderNowEl = document.querySelectorAll(`.order-now`);
const searchEl = document.querySelector(`.searchfield`);

// POPULATING ALL THE `ORDER NOW` BUTTONS WITH THE WHATSAPP LINK
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

const mediaQueryEl = window.matchMedia("(max-width : 460px)");
if (mediaQueryEl.matches) {
  // IMPLEMENTING FADE-IN ON ALL THE PRODUCTS CARD. HERE'S THE LOGIC😊 ==> First, I looped over all the products and I added either a
  // 'product-even' or 'product-odd' class depending on the index of the product. I wanted all my even cards to scroll-in from the right and opposite
  // for the odd cards. I added 'hide-right' and 'hide-left' respectively, checkout what this classes do in CSS😉. I then created an observer to
  // implement this feature. I remove the class of 'hide-right' or 'hide-left if the' if the particular card is intersecting and add the class once it is
  // not intersecting.

  productsEl.forEach((product, index) => {
    if (index % 2 === 0) {
      product.classList.add(`product-even`);
      product.classList.add(`hide-right`);
    } else {
      product.classList.add(`product-odd`);
      product.classList.add(`hide-left`);
    }
  });
  const evenProducts = document.querySelectorAll(`.product-even`);
  const oddProducts = document.querySelectorAll(`.product-odd`);

  const obsCallBack = function (entries) {
    const [entry] = entries;
    if (
      entry.target.classList.contains(`product-even`) &&
      entry.isIntersecting
    ) {
      entry.target.classList.remove(`hide-right`);
    }
    if (
      entry.target.classList.contains(`product-even`) &&
      !entry.isIntersecting
    ) {
      entry.target.classList.add(`hide-right`);
    }
    if (
      entry.target.classList.contains(`product-odd`) &&
      entry.isIntersecting
    ) {
      entry.target.classList.remove(`hide-left`);
    }
    if (
      entry.target.classList.contains(`product-odd`) &&
      !entry.isIntersecting
    ) {
      entry.target.classList.add(`hide-left`);
    }
  };
  const observer = new IntersectionObserver(obsCallBack, {
    root: null,
    threshold: 0,
  });

  productsEl.forEach((product) => {
    observer.observe(product);
  });

  const reviewEl = document.querySelectorAll(`.review-box`);
  reviewEl.forEach((review, index) => {
    review.classList.add(`hide-left`);
  });
  const reviewObsCallBack = function (entries) {
    const [entry] = entries;
    if (entry.isIntersecting) {
      entry.target.classList.remove(`hide-left`);
    } else {
      entry.target.classList.add(`hide-left`);
    }
  };
  const reviewObsever = new IntersectionObserver(reviewObsCallBack, {
    root: null,
    threshold: 0.03,
  });
  reviewEl.forEach((review, index) => {
    reviewObsever.observe(review);
  });
}
// IMPLEMENTING DISPLAY OF PRODUCTS ON SELECTING DIFFERENT OPTIONS IN A SELECT DROPDOWN
selectEl.addEventListener(`change`, (e) => {
  /* AT EVERY POINT WE CLICK ON ANOTHER OPTION, WE FIRST WANT TO DISPLAY ALL THE PRODUCTS AS BLOCK
   THIS IS DUE TO THE PRODUCTS DISPLAYING AS NONE BECAUSE OF THE CONDITIONS IN THE LATER CODES OF THIS
   ADDEVENTLISTENER. I UNDERSTOOD WHY I DID THIS AS AT THE TIME I WROTE THIS CODE BUT I DOUBT BEING ABLE
   TO REFERENCE THIS CODE LATER ON....SO SAD😢*/
  productsEl.forEach((product, index) => {
    product.style.display = `block`;
  });
  let dataValue = selectEl[selectEl.selectedIndex].dataset.tab;
  productsEl.forEach((product) => {
    // RETURN WHEN DATAVALUE = 0 BECAUSE ALL PRODUCTS HAVE A DATA-TAB OF 0 SO WE DON'T WANT TO HIDE ANY PRODUCT
    // WHEN WE SELECT THIS OPTION
    if (dataValue == 0) return;
    if (!product.classList.contains(`product-${dataValue}`)) {
      product.style.display = `none`;
    }
  });
});

// IMPLEMENTING SEARCH INPUT FIELD TO RETURN SPECIFIC PRODUCT ON SEARCH
searchEl.addEventListener(`input`, (e) => {
  // WE ALSO WANT TO SET THE DISPLAY OF EACH PRODUCT TO BLOCK ANYTIME AN INPUT IS MADE, IT HIDES ON DEFAULT
  // AFTER WE RUN THE LINE OF CODE IN THIS EVENT LISTENER.
  productsEl.forEach((product, index) => {
    product.style.display = `block`;
  });
  let input = e.target.value.toLowerCase();
  productsEl.forEach((product, index) => {
    let productName = productNameEl[index].textContent.toLowerCase();
    if (!productName.includes(input)) {
      product.style.display = `none`;
    }
  });
});
