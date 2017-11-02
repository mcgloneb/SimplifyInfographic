import '../sass/style.scss';

import 'imports-loader?define=>false!animation.gsap';
import ScrollMagic from 'ScrollMagic';

import { $, $$ } from './lib/bling';


// load our helper functions
const h = require('./helpers');

// holders for our scenes
let sceneOne, 
    sceneTwo,
    sceneThree,
    sceneFour,
    sceneFive,
    sceneSix,
    sceneSeven;



const defaults = {
    offset() {
        return  0 - (h.viewportHeight() * 0.25);
    },
    imageDuration() {
        return  h.viewportHeight() * 0.5;
    }
}

const resizing = () => {

    // reset the animation offset values
    sceneFive.offset = defaults.offset();
    alert(defaults.offset());
}

const setUpAnimations = () => {

    /**
     * Define the animations
     */

    // first block
    const el1Animation = TweenMax.to('#el1', 1, {
        transform: 'scale(.75)',
        ease: Linear.easeNone
    });

    // second block
    const el2Animation = TweenMax.to('#el2', 1, {
        transform: 'scale(0.75)',
        ease: Linear.easeNone
    });

    // third block
    const el3Animation = TweenMax.to('#el3', 1, {
        transform: 'scale(0.75)',
        opacity: 0.5,
        ease: Linear.easeNone
    });




    // computer arrow animation
    const computerArrow = TweenMax.fromTo('#svgComputerArrow', 1,
        { y: '-100%' }, 
        { y: '0%', ease: Linear.easeNone},      
    );

    const computerTL = new TimelineMax();
    computerTL.fromTo('#s4_content', 4, {opacity : 0}, {opacity : 1});


    // pie chart
    const pieChartPiece = TweenMax.fromTo('#piePiece', 1,
        { x: '-16.5%', y: '25%' }, 
        { x: '0%', y: '0%', ease:  Circ.easeOut},      
    );
    // number spinner
    var counter = { var: 0 };
    const pieChartCountdown = TweenMax.to(counter, 5, {
        var: 80, 
        onUpdate: function () {
            $('#s1_number').innerHTML = Math.ceil(counter.var);
        },
        ease:Circ.easeOut
    });    

    /**
     * Add the animations as scenes to fire at various scroll points
     */

    const scroll = new ScrollMagic.Controller();

    sceneOne = new ScrollMagic.Scene({
        triggerElement: '#el1'
    }).setTween(el1Animation);

    sceneTwo = new ScrollMagic.Scene({
        triggerElement: '#el2'
    }).setTween(el2Animation);

    sceneThree = new ScrollMagic.Scene({
        triggerElement: '#el3'
    }).setTween(el3Animation);


    /**
     * Laptop
     */
    sceneFour = new ScrollMagic.Scene({
        triggerElement: '#s4_graphic',
        duration: defaults.imageDuration(),
        offset: defaults.offset()
    }).setTween(computerArrow);

    sceneFive = new ScrollMagic.Scene({
        triggerElement: '#s4',
        duration: 400,
        offset: defaults.offset()
    }).setTween(computerTL);

    /**
     * Pie Chart
     */
    sceneSix = new ScrollMagic.Scene({
        triggerElement: '#s1_graphic',
        duration: defaults.imageDuration(),
        offset: defaults.offset()
    }).setTween(pieChartPiece);

    sceneSeven = new ScrollMagic.Scene({
        triggerElement: '#s1_content',
        offset: defaults.offset()
    }).setTween(pieChartCountdown);




    scroll.addScene([
        sceneOne,
        sceneTwo,
        sceneThree,
        sceneFour,
        sceneFive,
        sceneSix,
        sceneSeven
    ]);
}


document.addEventListener("DOMContentLoaded", function(event) { 
    //setUpAnimations();

    window.on('resize', resizing);
});
