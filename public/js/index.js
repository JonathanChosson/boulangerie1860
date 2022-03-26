import listImage from '../datas/listImage.js';


/**
 * Elements du DOM
 */
let carousselImage = document.querySelectorAll('.caroussel__contains__image');
let listCategorie = document.querySelectorAll('.ulRea__li');
let realisations = document.getElementById('realisations');
let i=0;
/**
 * Fonctions
 */

/**
 * Fonction qui toogle l'affichage et l'animation sur les images
 * @param {number} i index de l'image en cours
 * @param {number} j index de l'image suivante
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

/**
 * Gère l'indentation de J
 */
function basculerAffichage(){
    let j = i + 1; 
    if(j == carousselImage.length){
            j = 0;
    }

    ajoutSlideOUt(i,j);
    setTimeout(function modifieIndex(){i = j }, 1500)
}

/**
 * appel de la fonction qui idente J
 */
function caroussel(){
    setInterval(function basculer(){
        basculerAffichage();
    }, 3500)
}

/**
 * Affiche la classe active de base
 */
afficheRealisation(Array.from(listCategorie).find(cat => cat.classList.contains('active')).outerText)

/**
 * Listener sur les clic de catégorie
 */
listCategorie.forEach(cat => {
    cat.addEventListener('click', function (){
        changeActive(cat.outerText)
        afficheRealisation(cat.outerText)
    })
});

/**
 * Change la class active sur les onglets
 * @param {string} catActive categorie que l'on souhaite activer
 */
function changeActive(catActive){
    Array.from(listCategorie).map(cat => {
        if(cat.outerText === catActive){
            cat.classList.add('active')
        }else{
            cat.classList.remove('active')
        }
    })
}

/**
 * Affiche les images pour une catégorie choisie
 * @param {string} catActive categorie que l'on souhaite activer
 */
function afficheRealisation(catActive){
    realisations.innerHTML = ''
    let images  = listImage.filter(image => image.cat === catActive)
    images.forEach(image => {
        realisations.innerHTML += composantImage(image) ;
    });
}

/**
 * Retourne le composant image
 * @param {object} image Objet image fournis par @see {afficheRealisation()}
 * @returns html composant pour l'image
 */
function composantImage(image){
    return `
    <div class="realisations__div">
        <p class="realisations__div__p">${image.name}</p>
        <img src="${image.url}" alt="${image.name}" class="realisations__div__img">
    </div>
    `;
}


/**
 * Appel fonction Générale
 */
caroussel();