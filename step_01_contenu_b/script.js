var wall = new Wall('#wall');
console.log(wall);


/////////////////////////////////////////
// Animations de la gallerie
let indexImage = 0 
// le nom des images stockés dans un tableau
let images = ["image00.jpg", "image01.jpg", "image02.gif", "image03.gif", "image04.jpg",
    "image06.jpg", "image07.jpg", "image08.jpg", "image09.jpg"
]
let gal = document.querySelectorAll('#gallerie')[0].childNodes[1] // récupérer l'élément img dans la div gallerie

// écouter les clicks sur l'élément "next-slide"
document.querySelector('.next-slide').addEventListener('click', function () {
    indexImage += 1 // on augmente la valeur de l'index permettant de déterminer l'image à charger
    // créer une anim pour tout décaler vers la gauche
    anime({
        targets: gal,
        translateX: {
            value: [0, -4000],
            duration: 500,
            easing: 'easeInOutQuad'
        },
        loopComplete: function (anim) { // lorsque la première anim est finie
            changeImageSrc() // on change l'image
            // on créer une seconde anim
            anime({
                targets: gal,
                translateX: {
                    value: [4000, 0],
                    duration: 500,
                    easing: 'easeInOutQuad'
                }});
        }
    });
});

// écouter les clicks sur l'élément "prev-slide"
document.querySelector('.prev-slide').addEventListener('click', function () {
    indexImage -= 1 
    anime({
        targets: gal,
        translateX: {
            value: [0, 4000],
            duration: 500,
            easing: 'easeInOutQuad'
        },
        loopComplete: function (anim) {
            changeImageSrc()
            anime({
                targets: gal,
                translateX: {
                    value: [-4000, 0],
                    duration: 500,
                    easing: 'easeInOutQuad'
                }});
        }
    });
})


function changeImageSrc() {
    if (indexImage < 0) indexImage = images.length - 1
    else if (indexImage > images.length - 1) indexImage = 0
    gal.src = "assets/" + images[indexImage] 
}


/////////////////////////////////////////
// Animations de la page d'accueil

// https://animejs.com/documentation/#specificPropParameters
// https://animejs.com/documentation/#pennerFunctions
var ta = document.querySelectorAll('#welcome');

var a = anime({
    targets: ta,
    opacity: {
        value: ['0%', '100%'],
        duration: 2000,
        easing: 'easeInOutQuad'
    },
    scale: {
        value: [0.25, .8],
        duration: 1000,
        easing: 'easeInOutQuad',
        endDelay: 1000
    },
    rotate: {
        value: 360,
        duration: 1000,
        delay: 1000,
        easing: 'easeOutBounce'
    },
    loop: true,
    endDelay: 1000,
    direction: 'alternate',
    easing: 'easeInOutQuad'
});


var skills = ["code", "computer graphics", "electronics", "machine learning", "3D printers", "computer vision", "augmented reality",
    "virtual reality", "shaders", "dataviz", "print", "robots"
]

//https://tobiasahlin.com/moving-letters/
var tb = document.querySelectorAll('#code');
var b = anime({
    targets: tb,
    duration: 2000,

    loop: true,
    loopComplete: function (anim) {
        let index = Math.floor((Math.random() * skills.length))
        document.querySelectorAll('#code')[0].childNodes[0].data = skills[index]
    }
})