var wall = new Wall('#wall');
console.log(wall);


/////////////////////////////////////////
// Animations de la gallerie
let indexImage = 0
// le nombre d'images
let gal = document.querySelectorAll('#gallerie') // récupérer l'élément img dans la div gallerie
//console.log(gal.length)
// écouter les clicks sur l'élément "next-slide"
document.querySelector('.next-slide').addEventListener('click', function () {
    // créer une anim pour tout décaler vers la gauche
    anime({
        targets: gal[indexImage],
        translateX: {
            value: [0, -4000],
            duration: 500,
            easing: 'easeInOutQuad'
        },
        loopComplete: function (anim) { // lorsque la première anim est finie
            gal[indexImage].style.display = "none"
            indexImage += 1 // on augmente la valeur de l'index permettant de déterminer l'image à charger
            changeImageSrc() // on change l'image       
            // on crée une seconde anim quand l'image est chargée
            //gal.onload = function () {
                anime({
                    targets:  gal[indexImage],
                    translateX: {
                        value: [4000, 0],
                        duration: 500,
                        easing: 'easeInOutQuad'
                    }
                });
           // }
        }
    });
});

// écouter les clicks sur l'élément "prev-slide"
document.querySelector('.prev-slide').addEventListener('click', function () {
    anime({
        targets:  gal[indexImage],
        translateX: {
            value: [0, 4000],
            duration: 500,
            easing: 'easeInOutQuad'
        },
        loopComplete: function (anim) {
            gal[indexImage].style.display = "none"
            indexImage -= 1
            changeImageSrc()
           // gal.onload = function () {
                anime({
                    targets:  gal[indexImage],
                    translateX: {
                        value: [-4000, 0],
                        duration: 500,
                        easing: 'easeInOutQuad'
                    }
                });
           // }
        }
    });
})


function changeImageSrc() {
    if (indexImage < 0) indexImage = gal.length - 1
    else if (indexImage > gal.length - 1) indexImage = 0
    gal[indexImage].style.display = "inline-block"
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