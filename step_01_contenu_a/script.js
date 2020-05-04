var wall = new Wall('#wall');
console.log(wall);

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
                "virtual reality", "shaders", "dataviz", "print", "robots"]

//https://tobiasahlin.com/moving-letters/
var tb = document.querySelectorAll('#code');

console.log(tb)
var b = anime({
    targets: tb, 
    duration: 2000,
    
    loop: true,
    loopComplete: function (anim) {
        let index = Math.floor((Math.random() * skills.length))
        document.querySelectorAll('#code')[0].childNodes[0].data = skills[index]
    }
})




// https://animejs.com/documentation/#colors

console.log(a)