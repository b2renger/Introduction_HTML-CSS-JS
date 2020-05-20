var wall = new Wall('#wall');
console.log(wall);


/////////////////////////////////////////
// Activation des fenêtres modales

// Get all the modal conatiners windows
var modalO = document.getElementsByClassName('modal__overlay');
// Get all the buttons that open a modal
var btn = document.getElementsByClassName("modal__button");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("modal__close");


for (let i = 0; i < modalO.length; i++) {
    btn[i].onclick = function () {

        let d = modalO[i]

        if (d.classList.contains("modal__inline")) {
            d.style.display = "contents"; // try this !!
        } else {
             d.style.display = "block";
            d.style.position = "fixed";

            const scrollY = document.body.style.top;

            d.style.margin.left = (document.body.clientWidth - d.clientWidth) / 2 + 'px';
            d.style.margin.top = (document.body.clientHeight - d.offsetHeight) / 2 + scrollY + 'px';
        }

        /*
        let d = modalO[i]
       // d.style.display = "block";
        d.style.position = "fixed";
       
        const scrollY = document.body.style.top;
        d.style.margin.left = (document.body.clientWidth - d.clientWidth)/2 + 'px';
        d.style.margin.top = (document.body.clientHeight - d.offsetHeight)/2 + scrollY+ 'px';
        
        console.log(document.body.clientHeight, document.body.clientWidth)
        console.log(modalO[i])*/



    }

    span[i].onclick = function () {
        modalO[i].style.display = "none";

    }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modalO) {
        modalO.style.display = "none";
        //const body = document.body;
        //const scrollY = body.style.top;
        //body.style.position = '';
        //body.style.top = '';
        //window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
}

window.addEventListener('scroll', () => {
    document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
});



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
                targets: gal[indexImage],
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
        targets: gal[indexImage],
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
                targets: gal[indexImage],
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