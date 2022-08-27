let elSelect = document.querySelector(".form-select");
let elForm = document.querySelector(".form");
let elBreadTypeText = document.querySelector(".order__bread-text");
let elDimensionText = document.querySelector(".order__dimension-text");
let elSpan1 = document.querySelector("#dimension-span1")
let elSpan2 = document.querySelector("#dimension-span2")
let elSpan3 = document.querySelector("#dimension-span3")

// let elVegetableList = document.querySelector(".order__vegetable-box-list")
let elVegetableText1 = document.querySelector("#order__vegetable-text1");
let elVegetableText2 = document.querySelector("#order__vegetable-text2");
let elVegetableText3 = document.querySelector("#order__vegetable-text3");
let elVegetableText4 = document.querySelector("#order__vegetable-text4");
let elVegetableText5 = document.querySelector("#order__vegetable-text5");
let elVegetableText6 = document.querySelector("#order__vegetable-text6");
let elextraText1 = document.querySelector("#order__extra-text1")
let elextraText2 = document.querySelector("#order__extra-text2")

let elItemVegetable1 = document.querySelector("#order__vegetable-box-item1");
let elItemVegetable2 = document.querySelector("#order__vegetable-box-item2");
let elItemVegetable3 = document.querySelector("#order__vegetable-box-item3");
let elItemVegetable4 = document.querySelector("#order__vegetable-box-item4");
let elItemVegetable5 = document.querySelector("#order__vegetable-box-item5");
let elItemVegetable6 = document.querySelector("#order__vegetable-box-item6");
let elItemExtra1 = document.querySelector("#order__extra-item1")
let elItemExtra2 = document.querySelector("#order__extra-item2")

elSelect.addEventListener("change", (e) => {
  e.preventDefault();
  elBreadTypeText.textContent = (" " + elSelect.value);


});

elSpan1.addEventListener("click", (r) => {
  r.preventDefault()
  elDimensionText.textContent = elSpan1.textContent


})

elSpan2.addEventListener("click", (r) => {
  r.preventDefault()
  elDimensionText.textContent = elSpan2.textContent
})

elSpan3.addEventListener("click", (r) => {
  r.preventDefault()
  elDimensionText.textContent = elSpan3.textContent
})

elVegetableText1.addEventListener("click", (e) => {
  elItemVegetable1.classList.toggle("box-item-show");
})

elVegetableText2.addEventListener("click", (e) => {
  elItemVegetable2.classList.toggle("box-item-show");
})

elVegetableText3.addEventListener("click", (e) => {
  elItemVegetable3.classList.toggle("box-item-show");
})

elVegetableText4.addEventListener("click", (e) => {
  elItemVegetable4.classList.toggle("box-item-show");
})

elVegetableText5.addEventListener("click", (e) => {
  elItemVegetable5.classList.toggle("box-item-show");
})

elVegetableText6.addEventListener("click", (e) => {
  elItemVegetable6.classList.toggle("box-item-show");
})

elextraText1.addEventListener("click", () => {
  elItemExtra1.classList.toggle("extra-box-item-show");
})

elextraText2.addEventListener("click", () => {
  elItemExtra2.classList.toggle("extra-box-item-show");
})