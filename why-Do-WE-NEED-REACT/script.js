const firstBasket = document.querySelector(".basket-1 span");
const secondBasket = document.querySelector(".basket-2 span");
const rightArrow = document.querySelector(".right-arrow");
const LeftArrow = document.querySelector(".left-arrow");

let totalApples = 10;
let secondBasketAppleCount = 0;

let FirstBasketAppleCount = totalApples - secondBasketAppleCount;
firstBasket.innerText = FirstBasketAppleCount;
secondBasket.innerText = secondBasketAppleCount;

rightArrow.addEventListener("click", () => {
  if (FirstBasketAppleCount > 0) {
    FirstBasketAppleCount--;
    firstBasket.innerText = FirstBasketAppleCount;
    secondBasketAppleCount++;
    secondBasket.innerText = secondBasketAppleCount;
  }
});

LeftArrow.addEventListener("click", () => {
  if (secondBasketAppleCount > 0) {
    FirstBasketAppleCount++;
    firstBasket.innerText = FirstBasketAppleCount;
    secondBasketAppleCount--;
    secondBasket.innerText = secondBasketAppleCount;
  }
});
