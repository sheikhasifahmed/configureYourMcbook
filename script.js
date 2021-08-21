const btn8GB = document.getElementById("btn-mem-8GB");
const btn16GB = document.getElementById("btn-mem-16GB");
const memoryCost = document.getElementById("memory-cost");
const btnStorage256GB = document.getElementById("btn-storage-256GB");
const btnStorage500GB = document.getElementById("btn-storage-500GB");
const btnStorage1TB = document.getElementById("btn-storage-1TB");
const storageCost = document.getElementById("storage-cost");
const btnDeliveryFree = document.getElementById("btn-delivery-free");
const btnDeliveryCharge = document.getElementById("btn-delivery-charge");
const deliveryCost = document.getElementById("delivery-charge");
const bestPrice = document.getElementById("best-price");
const totalPrice = document.getElementById("total-price");
const promoInput = document.getElementById("promo-input");
const btnPromo = document.getElementById("btn-promo");
const finalTotal = document.getElementById("final-total");
/************************************************
 !!!function created for calculating total price!!!
 *************************************************/
function totalPriceCalc() {
  const total =
    parseInt(bestPrice.innerText) +
    parseInt(memoryCost.innerText) +
    parseInt(storageCost.innerText) +
    parseInt(deliveryCost.innerText);
  totalPrice.innerText = total;
  finalTotal.innerText = total;
}

/************************************************
 !!!function created for calculating cost of memory!!!
 *************************************************/
function selectMemory(price) {
  memoryCost.innerText = price;
  totalPriceCalc();
}

/************************************************
 !!!function created for calculating cost of storage!!!
 *************************************************/
function selectStorage(price) {
  storageCost.innerText = price;
  totalPriceCalc();
}
/************************************************
 !!!function created for calculating cost of delivery!!!
 *************************************************/
function selectDelivery(price) {
  deliveryCost.innerText = price;
  totalPriceCalc();
}

btn8GB.addEventListener("click", function () {
  selectMemory(0);
});
btn16GB.addEventListener("click", function () {
  selectMemory(180);
});
btnStorage256GB.addEventListener("click", function () {
  selectStorage(0);
});
btnStorage500GB.addEventListener("click", function () {
  selectStorage(100);
});
btnStorage1TB.addEventListener("click", function () {
  selectStorage(180);
});
btnDeliveryFree.addEventListener("click", function () {
  selectDelivery(0);
});
btnDeliveryCharge.addEventListener("click", function () {
  selectDelivery(20);
});

/************************************************
 !!!calculating total price for promo code!!!
 *************************************************/
btnPromo.addEventListener("click", function () {
  if (promoInput.value == "stevekaku") {
    const final = parseFloat(totalPrice.innerText) * 0.8;
    finalTotal.innerText = final.toFixed(2);
  }
  promoInput.value == "";
});
