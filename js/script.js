//Array that contains the image names
const arrayImmagini = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg"];
//Element that will contains the images
const itemsElem = document.querySelector(".items");
//Variable that contains the string with the images elements
let imagesString = "";
//Index that slides the images
let index = 0;
//Variable that controls setInterval
let curInterval;
console.log(curInterval);

//Innering of the images 
for (let i = 0; i < arrayImmagini.length; i++) {
    imagesString += `
    <div class="item">
        <img src="${arrayImmagini[i]}">
    </div>`
}

itemsElem.innerHTML += imagesString;


const itemElem = document.querySelectorAll(".item");

itemElem[index].classList.add("active");


// document.querySelector(".next").addEventListener("click", function () {
//     itemElem[index].classList.remove("active");
//     if (index < itemElem.length - 1) {
//         index++;
//     } else {
//         index = 0;
//     }
//     itemElem[index].classList.add("active");
// });

// document.querySelector(".prev").addEventListener("click", function () {
//     itemElem[index].classList.remove("active");
//     if (index <= 0) {
//         index = arrayImmagini.length - 1;
//     } else {
//         index--;
//     }
//     itemElem[index].classList.add("active");
// });

slideImages();

 document.querySelector(".items").addEventListener("mouseover", function () {
    clearInterval(curInterval);
    curInterval = undefined;
  
 });


 document.querySelector(".items").addEventListener("mouseout", slideImages);

 /****************************/
 //FUNCTION

 function slideImages() {
    if (curInterval === undefined) {
        curInterval = setInterval(function () {
            itemElem[index].classList.remove("active");
         if (index < itemElem.length - 1) {
             index++;
         } else {
             index = 0;
         }
         itemElem[index].classList.add("active");
        }, 2000)
    } 
 }
