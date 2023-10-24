//Vettore con indirzzo immagini
const imagesArray = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg"];
//Variabile con elemento che conterrà img
let itemElem = document.querySelector(".item");
//Variabile con elemento individuato dalla classe .prev
const arrowUp = document.querySelector(".prev");
//Variabile con elemento individuato dalla classe .next
const arrowDown = document.querySelector(".next");
//Vettore che conterrà il template literal di img 
let imageDisplayArray = [];
//indice che scorre il carosello
let index = 0;

//Ciclo che inserisce il template literal con l'indirizzo dell'immagine nel vettore imageDisplayArray
for (let i = 0; i < imagesArray.length; i++) {
    imageDisplayArray[i] = `<img src="${imagesArray[i]}">`
}
//Viasualizziamo la prima immagine
itemElem.innerHTML = imageDisplayArray[0];

//Al click dell'elemento con classe .next viene incrementato l'indice di 1 e visualizziamo l'immagine seguente
arrowDown.addEventListener("click", function () {
    index++;
    //Se l'indice supera la lunghezza del vettore - 1 si reinizializza a zero
    if (index > imageDisplayArray.length - 1) {
        index = 0;
    }
    itemElem.innerHTML = imageDisplayArray[index];
    
})

//Al click dell'elemento con classe .prev viene decrementato l'indice di 1 e visualizziamo l'immagine antecedente
arrowUp.addEventListener("click", function () {
    index--;
    //Se l'indice diventa minore di 0 allore si reinizializza alla lunghezza dell'array - 1
    if (index < 0) {
        index = imageDisplayArray.length - 1;
    }
    itemElem.innerHTML = imageDisplayArray[index];
})