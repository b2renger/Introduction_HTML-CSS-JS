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
        endDelay : 1000
    },
    rotate: {
        value: 360,
        duration: 1000, 
        delay : 1000,
        easing: 'easeOutBounce'
    },
    loop: true,
    //duration: 2000,
    endDelay: 1000,
    direction: 'alternate',
    easing: 'easeInOutQuad' 
});


//https://tobiasahlin.com/moving-letters/
var tb = document.querySelectorAll('#code');
var b = anime({
    targets: tb,
    color: ['rgb(50, 255, 255)' , 'rgb(255, 50, 50)'],
    scale : [2, 2],
    direction: 'alternate',
    duration : 1000,
    easing: 'easeInOutQuad', 
    loop : true
})




// https://animejs.com/documentation/#colors

console.log(a)