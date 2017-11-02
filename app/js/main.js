import '../sass/style.scss';

import 'imports-loader?define=>false!animation.gsap';
import ScrollMagic from 'ScrollMagic';

import { $, $$ } from './lib/bling';


// load our helper functions
const h = require('./helpers');

// holders for our scenes
let sceneOne, 
    sceneThree,
    sceneFour;

const defaults = {
    offset() {
        return  0 - (h.viewportHeight() * 0.25);
    },
    offsetLarge() {
        return  0 - (h.viewportHeight() * 1);
    },
    imageDuration() {
        return  h.viewportHeight() * 0.5;
    },
    imageDurationLarge() {
        return  h.viewportHeight() * 0.75;
    },
    imageDurationFull() {
        return  h.viewportHeight();
    }
}

const keyboardKeysAnimation = {

    length : 0,
    keys : null,
    init() {
        this.keys = $$('.kb__key');
        this.length = this.keys.length - 1;
    },
    randomKey() {
        if (this.length > 2) {
            const num = Math.floor(Math.random() * this.length);
            return num;
        }
        return false;
    },
    start() {
        const num = this.randomKey();
        const i = this;
        if (num) {
            this.keys[num].classList.add('kb__key--pressed')
            setTimeout(function() {
                i.keys[num].classList.remove('kb__key--pressed')
            }, 250);
        }
        setTimeout(function() {
            i.start()
        }, 250);
    }


};

console.log(defaults.offsetLarge());

const resizing = () => {

    if (detectIE()) {
        setHeightOfContainers();
    }

    // reset the animation offset values
    //console.log("resizing");
}

const setUpAnimations = () => {

    /**
     * Define the animations
     */
    
    
    /**
     * Scene One
     * Chart Animation
     */

    var counter = { var: 0 };
    var counter2 = { var: 0 };
    var tal32 = document.getElementById("percentage32");
    var tal71 = document.getElementById("percentage71");

    const animateChart = new TimelineMax();
    animateChart
    .to('#chart32', 1, {css:{className:"play-animation"}})
    .to('#chart71', 1, {css:{className:"play-animation"}}, 0)
    .to(counter, 2, {var: 32, onUpdate: function () { tal32.innerHTML = Math.ceil(counter.var)+"%";},ease:Circ.easeOut}, 0)
    .to(counter2, 2, {var: 71, onUpdate: function () { tal71.innerHTML = Math.ceil(counter2.var)+"%";},ease:Circ.easeOut}, 0);

    sceneOne = new ScrollMagic.Scene({
        triggerElement: '#s1_trigger',
        offset: defaults.offset()
    }).setTween(animateChart);

    /**
     * Scene 3
     * Mutiple touch points
     */
     const animateTouchPoints = new TimelineMax();
     animateTouchPoints
        .fromTo('#globe', 0.25, {scaleX:0, scaleY:0, opacity:0, transformOrigin: "center center"},  {scaleX:1, scaleY:1, opacity:1,transformOrigin: "center center"})
        .fromTo('#sq_large_dark', 0.2, {scaleX:0, scaleY:0, opacity:0, transformOrigin: "center center"},  {scaleX:1, scaleY:1, opacity:1,transformOrigin: "center center"})
        .fromTo('#sq_little_yello', 0.2, {scaleX:0, scaleY:0, opacity:0, transformOrigin: "center center"},  {scaleX:1, scaleY:1, opacity:1,transformOrigin: "center center"})
        .fromTo('#sq_red', 0.2, {scaleX:0, scaleY:0, opacity:0, transformOrigin: "center center"},  {scaleX:1, scaleY:1, opacity:1,transformOrigin: "center center"})
        .fromTo('#sq_burgundy', 0.2, {scaleX:0, scaleY:0, opacity:0, transformOrigin: "center center"},  {scaleX:1, scaleY:1, opacity:1,transformOrigin: "center center"})
        .fromTo('#pieChart', 0.2, {scaleX:0, scaleY:0, opacity:0, transformOrigin: "center center"},  {scaleX:1, scaleY:1, opacity:1,transformOrigin: "center center"})
        .fromTo('#chart_1_', 0.2, {scaleX:0, scaleY:0, opacity:0, transformOrigin: "center center"},  {scaleX:1, scaleY:1, opacity:1,transformOrigin: "center center"})
        .fromTo('#A', 0.2, {scaleX:0, scaleY:0, opacity:0, transformOrigin: "center center"},  {scaleX:1, scaleY:1, opacity:1,transformOrigin: "center center"})
        .fromTo('#chart2', 0.2, {scaleX:0, scaleY:0, opacity:0, transformOrigin: "center center"},  {scaleX:1, scaleY:1, opacity:1,transformOrigin: "center center"})
        .fromTo('#sq_large_yello', 0.2, {scaleX:0, scaleY:0, opacity:0, transformOrigin: "center center"},  {scaleX:1, scaleY:1, opacity:1,transformOrigin: "center center"})
        .fromTo('#tree', 0.2, {scaleX:0, scaleY:0, opacity:0, transformOrigin: "center center"},  {scaleX:1, scaleY:1, opacity:1,transformOrigin: "center center"});

    sceneThree = new ScrollMagic.Scene({
        triggerElement: '#s3_trigger',
        //offset: defaults.offset()
    }).setTween(animateTouchPoints);


    /**
     * Scene Four
     * Animate the graph heights
     */
    
    const AnimateTree = new TimelineMax();
    AnimateTree
    /*
        .fromTo('#bar1', 0.5, {height : 0}, {height : `${barHeights[0]}%`, ease: Expo.easeOut})
        .fromTo('#bar2', 0.5, {height : 0}, {height : `${barHeights[1]}%`, ease: Expo.easeOut})
        .fromTo('#bar3', 0.5, {height : 0}, {height : `${barHeights[2]}%`, ease: Expo.easeOut})
        .fromTo('#bar4', 0.5, {height : 0}, {height : `${barHeights[3]}%`, ease: Expo.easeOut});
    */
    .fromTo('#box1_x5F_1', 0.3, {scaleX:0, scaleY:0, opacity:0, transformOrigin: "center center"},  {scaleX:1, scaleY:1, opacity:1,transformOrigin: "center center"})
    .fromTo('#line1_x5F_1', 0.3, {scaleY:0, opacity:0, transformOrigin: "top center"},  {scaleY:1, opacity:1,transformOrigin: "top center"})
    .fromTo('#line1_x5F_left', 0.5, {scalex:0, opacity:0, transformOrigin: "center center"},  {scaleY:1, opacity:1,transformOrigin: "center center"})
    .fromTo('#line1_x5F_right, #line1_x5F_mid', 0.5, {scalex:0, opacity:0, transformOrigin: "center center"},  {scaleY:1, opacity:1,transformOrigin: "center center"}, "-=0.5")
    .fromTo('#box2_x5F_1, #box2_x5F_2, #box2_x5F_3', 0.3, {scaleX:0, scaleY:0, opacity:0, transformOrigin: "center center"},  {scaleX:1, scaleY:1, opacity:1,transformOrigin: "center center"})
    .fromTo('#line2_x5F_1_x5F_1, #line2_x5F_3_x5F_1', 0.3, {scaleY:0, opacity:0, transformOrigin: "top center"},  {scaleY:1, opacity:1,transformOrigin: "top center"})
    .fromTo('#line2_x5F_1_x5F_right, #line2_x5F_1_x5F_left, #line2_x5F_3_x5F_left, #line2_x5F_3_x5F_right', 0.3, {scalex:0, opacity:0, transformOrigin: "center center"},  {scaleY:1, opacity:1,transformOrigin: "center center"})
    .fromTo('#line2_x5F_2_x5F_1', 0.3, {scaleY:0, opacity:0, transformOrigin: "top center"},  {scaleY:1, opacity:1,transformOrigin: "top center"}, "-=0.3")
    .fromTo('#box3_x5F_1, #box3_x5F_5', 0.3, {scaleX:0, scaleY:0, opacity:0, transformOrigin: "center center"},  {scaleX:1, scaleY:1, opacity:1,transformOrigin: "center center"})
    .fromTo('#box3_x5F_2, #box3_x5F_4', 0.3, {scaleX:0, scaleY:0, opacity:0, transformOrigin: "center center"},  {scaleX:1, scaleY:1, opacity:1,transformOrigin: "center center"})
    .fromTo('#box3_x5F_3', 0.3, {scaleX:0, scaleY:0, opacity:0, transformOrigin: "center center"},  {scaleX:1, scaleY:1, opacity:1,transformOrigin: "center center"});


    sceneFour = new ScrollMagic.Scene({
        triggerElement: '#s4_trigger',
        offset: defaults.offset()
    }).setTween(AnimateTree);


    /**
     * Scrolling graph....
     * this can run constantly, no need for scroll monitoring....
     */

    const animateGraph = new TimelineMax({repeat:-1, repeatDelay:0});
    animateGraph
        .fromTo('#graphContainer', 8, { x: '0%' }, { x: '-100%', ease: Linear.easeNone })
        .fromTo('#graphContainer2', 8, { x: '100%' }, { x: '0%', ease: Linear.easeNone }, "-=8");

    /**
        *Laptop and spanner
        * Can run constantly, as above
    */

    const animateLaptopAndSpanner = new TimelineMax({repeat:-1, repeatDelay:0, yoyo:true});
    animateLaptopAndSpanner
        .fromTo('#nutAndTool', 2, { rotation: "0" },  { rotation: "+=20", transformOrigin:"19.3px 22.3px",  ease: Bounce.easeOut })
        .fromTo('#nutAndTool', 2, { rotation: "20" },  { rotation: "-=30", transformOrigin:"19.3px 22.3px",  ease: Bounce.easeOut });
    // create our scroll magic instance
    const scroll = new ScrollMagic.Controller();


    /**
     * Summary Scene
     */
    
    const summaryAnimation = new TimelineMax();
    summaryAnimation.set('#txt1', { attr : { 'width' : 0 } })
    .set('#txt2', { attr : { 'width' : 0 } })
    .set('#txt3', { attr : { 'width' : 0 } })
    .to('#txt1', 0.25, { attr : { 'width' : 69 }, ease: Power2.easeInOut }, 0)
    .to('#txt2', 0.25, { attr : { 'width' : 69 }, ease: Power2.easeInOut }, 0.15)
    .to('#txt3', 0.25, { attr : { 'width' : 48 }, ease: Power2.easeInOut }, 0.3);

    // animate the quote marks (not on a scene as will move constantly)
    
    const animateQuotes = new TimelineMax({repeat: -1});
    animateQuotes.fromTo('#clippedQuotes', 2, { x : 0 }, { x : '-36%', ease: Linear.easeNone }, 0);

    const sceneSummary = new ScrollMagic.Scene({
        triggerElement: '#summary_trigger',
        offset: defaults.offset()
    }).setTween(summaryAnimation);


    // add our scenes
    scroll.addScene([
        sceneOne,
        sceneThree,
        sceneFour,
        sceneSummary
    ]);

}

document.addEventListener("DOMContentLoaded", function(event) { 
    
    if (detectIE()) {
        setHeightOfContainers();
    }
    
    setUpAnimations();

    window.on('resize', resizing);


    
});


function setHeightOfContainers() {
    
    const containerWidth = h.getElementWidth('intro_trigger');

    // intro image is 0.5486 height of container width
    const introImageHeight = containerWidth * 0.5486;
    document.getElementById('intro_graphic_container').style.height = introImageHeight +'px';

    // chatbots image is 0.4968 height of container width
    const chatbotImageHeight = containerWidth * 0.4968;
    document.getElementById('s7_trigger').style.height = chatbotImageHeight +'px';

}


function detectIE() {
  var ua = window.navigator.userAgent;

  // Test values; Uncomment to check result …

  // IE 10
  // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';
  
  // IE 11
  // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';
  
  // Edge 12 (Spartan)
  // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';
  
  // Edge 13
  // ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';

  var msie = ua.indexOf('MSIE ');
  if (msie > 0) {
    // IE 10 or older => return version number
    return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
  }

  var trident = ua.indexOf('Trident/');
  if (trident > 0) {
    // IE 11 => return version number
    var rv = ua.indexOf('rv:');
    return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
  }

  // other browser
  return false;
}

