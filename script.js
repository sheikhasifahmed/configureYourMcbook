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

/************************************************
 !!!function created for calculating cost of memory!!!
 *************************************************/
function selectMemory(price) {
  memoryCost.innerText = price;
}

/************************************************
 !!!function created for calculating cost of storage!!!
 *************************************************/
function selectStorage(price) {
  storageCost.innerText = price;
}
/************************************************
 !!!function created for calculating cost of delivery!!!
 *************************************************/
function selectDelivery(price) {
  deliveryCost.innerText = price;
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
