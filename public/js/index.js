/**
 * Elements du DOM
 */
let carousselImage = document.querySelectorAll('.caroussel__contains__image');
i=0;
/**
 * Fonctions
 */
function ajoutSlideOUt(i,j){
    carousselImage[i].classList.add('slide-out-left');
    setTimeout(function test() {
        carousselImage[i].classList.remove('slide-out-left')
        carousselImage[i].classList.add('invisible')
        carousselImage[j].classList.remove('invisible')
        carousselImage[j].classList.add('slide-in-right')
    }, 500)
    setTimeout(function test() {
        carousselImage[j].classList.remove('slide-in-right')
    }, 1000)
};

function basculerAffichage(){
    j = i + 1; 
    if(j == carousselImage.length){
            j = 0;
    }

    ajoutSlideOUt(i,j);
    setTimeout(function modifieIndex(){i = j }, 1500)
}

function caroussel(){
    setInterval(function basculer(){
        basculerAffichage();
    }, 3500)
}



/**
 * Appel fonction
 */

caroussel();