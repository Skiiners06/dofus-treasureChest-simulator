// retourne un nombre aléatoire compris entre min et max
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let nbrose = getRndInteger(51, 250)
console.log(`nb roses : ${nbrose}`)
// Ex 52

// Pour gérer les multiplicateur de nombres de roses des sables
let probaMultiplier = getRndInteger(0, 100)
console.log(`proba : ${probaMultiplier}`)

if (probaMultiplier <= 75) {
    console.log(nbrose)
} else if (probaMultiplier <= 97) {
    console.log(nbrose * 10)
} else {
    console.log(nbrose * 100)
}


let listeCoffre = document.getElementsByClassName('treasure')


for (let i = 0; i<listeCoffre.length; i++){

    listeCoffre[i].addEventListener("click", function() {displaySelectedTreasure(i)})
}


function displaySelectedTreasure(i){
    console.log(i)

    console.log(document.getElementsByClassName('treasure')[i])

    let divContent = document.createElement('div')
    let treasureIcon = document.getElementsByClassName('icon')[i]
    let treasureDescr = document.getElementsByTagName('p')[i]

    let openButton = document.createElement('p')
    let textButton = document.createTextNode('Open !')

    openButton.className = "buttonOpen"

    divContent.append(treasureIcon)
    divContent.append(treasureDescr)
    openButton.appendChild(textButton)
    divContent.append(openButton)

    divContent.className = 'divSelectedTreasure'

    document.getElementsByClassName('container-main')[0].appendChild(divContent)

    let listeCoffres = document.querySelector('.container h1 h2, .treasure-list')
    listeCoffres.style.display = 'none'

    // Appelle la fonction qui affiche l'image
    displayBlackArrow()

}

function displayBlackArrow(){
    let backArrow = document.createElement('img')
    backArrow.src ="./img/back-arrow.svg"
    backArrow.className = 'backArrow'

    let container = document.getElementsByClassName('container')[0]
    container.appendChild(backArrow)

    backArrow.addEventListener("click",backHome)
}



function backHome(){
    document.location.reload();

}









