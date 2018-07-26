import '../sass/style.scss';

import 'imports-loader?define=>false!animation.gsap';
import ScrollMagic from 'ScrollMagic';

import { $, $$ } from './lib/bling';


// load our helper functions
const h = require('./helpers');

// breakpoints
const breakPointLg = 992;


// holders for our scenes
let sceneOne, 
    sceneOneB,
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

        if (detectIE()) {
            return false;
        }
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
        setHeightOfSVGContainers();
    }

    setHeightOfContainers();

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
     * Scene One B
     * Dial Animation
     */
    const dialSpinner = new TimelineMax();
    dialSpinner
        .set('#dialPointer', { rotation : -180, transformOrigin: '28% 54%' })
        .to('#dialPointer', 2, { rotation : -160, transformOrigin: '28% 54%', ease: Back.easeOut.config(70) }, 1);
      //  .to('#dialPointer', 2, { rotation : 23, ease: Back.easeOut.config(1.9) });

    sceneOneB = new ScrollMagic.Scene({
        triggerElement: '#s1b_trigger',
        offset: defaults.offset()
    }).setTween(dialSpinner);

    /**
     * Scene 3
     * Mutiple touch points
     */
     const animateTouchPoints = new TimelineMax();
     animateTouchPoints
        .fromTo('#sq_little_dark', 0.25, {scaleX:0, scaleY:0, opacity:0, transformOrigin: "center center"},  {scaleX:1, scaleY:1, opacity:1,transformOrigin: "center center"})
        .set('#sq_little_dark', {className:'floating-icon'})
        .fromTo('#sq_large_dark', 0.2, {scaleX:0, scaleY:0, opacity:0, transformOrigin: "center center"},  {scaleX:1, scaleY:1, opacity:1,transformOrigin: "center center"})
        .set('#sq_large_dark', {className:'floating-icon'})
        .fromTo('#sq_little_yello', 0.2, {scaleX:0, scaleY:0, opacity:0, transformOrigin: "center center"},  {scaleX:1, scaleY:1, opacity:1,transformOrigin: "center center"})
        .set('#sq_little_yello', {className:'floating-icon'})
        .fromTo('#sq_red', 0.2, {scaleX:0, scaleY:0, opacity:0, transformOrigin: "center center"},  {scaleX:1, scaleY:1, opacity:1,transformOrigin: "center center"})
        .set('#sq_red', {className:'floating-icon'})
        .fromTo('#sq_burgundy', 0.2, {scaleX:0, scaleY:0, opacity:0, transformOrigin: "center center"},  {scaleX:1, scaleY:1, opacity:1,transformOrigin: "center center"})
        .set('#sq_burgundy', {className:'floating-icon'})
        .fromTo('#pieChart', 0.2, {scaleX:0, scaleY:0, opacity:0, transformOrigin: "center center"},  {scaleX:1, scaleY:1, opacity:1,transformOrigin: "center center"})
        .set('#pieChart', {className:'floating-icon'})
        .fromTo('#chart_1_', 0.2, {scaleX:0, scaleY:0, opacity:0, transformOrigin: "center center"},  {scaleX:1, scaleY:1, opacity:1,transformOrigin: "center center"})
        .set('#chart_1_', {className:'floating-icon'})
        .fromTo('#A', 0.2, {scaleX:0, scaleY:0, opacity:0, transformOrigin: "center center"},  {scaleX:1, scaleY:1, opacity:1,transformOrigin: "center center"})
        .set('#A', {className:'floating-icon'})
        .fromTo('#chart2', 0.2, {scaleX:0, scaleY:0, opacity:0, transformOrigin: "center center"},  {scaleX:1, scaleY:1, opacity:1,transformOrigin: "center center"})
        .set('#chart2', {className:'floating-icon'})
        .fromTo('#sq_large_yello', 0.2, {scaleX:0, scaleY:0, opacity:0, transformOrigin: "center center"},  {scaleX:1, scaleY:1, opacity:1,transformOrigin: "center center"})
        .set('#sq_large_yello', {className:'floating-icon'})
        .fromTo('#tree', 0.2, {scaleX:0, scaleY:0, opacity:0, transformOrigin: "center center"},  {scaleX:1, scaleY:1, opacity:1,transformOrigin: "center center"})
        .set('#tree', {className:'floating-icon'});

    sceneThree = new ScrollMagic.Scene({
        triggerElement: '#s3_trigger',
        //offset: defaults.offset()
    }).setTween(animateTouchPoints);


    /**
     * Microscope
     */
    
    const animateMicroscope = new TimelineMax( { repeat: -1, repeatDelay: 1});
    animateMicroscope.to('#plateMount', 0.5, { y : -6 })
    .to('#plateMount', 0.5, { y : -2 }, 1)
    .to('#plateMount', 1, { y : -8 }, 2)
    .to('#plateMount', 1, { y : 0 }, 6);

    // come on....

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
        .fromTo('#graphElements', 8, { x: '0%' }, { x: '-50%', ease: Linear.easeNone });    
    


    /**
        *Laptop and spanner
        * Can run constantly, as above
    */
    const animateLaptopAndSpanner = new TimelineMax({repeat:-1, repeatDelay:0});
    animateLaptopAndSpanner
        .to('#nutAndTool', 0.5, { rotation : "-=20", transformOrigin:"19.3px 22.3px" }, 0)
        .to('#nutAndTool', 1.5, { rotation : "+=30", transformOrigin:"19.3px 22.3px", ease: Power2.easeOut }, 1);
    // animateLaptopAndSpanner
    //     .set('#nutAndTool', { x: "-=6", y: "+=10" })
    //     .fromTo('#nutAndTool', 2, { rotation: "-=20" },  { rotation: "+=30", transformOrigin:"19.3px 22.3px" })
    //     .fromTo('#nutAndTool', 1, { rotation: "20" },  { rotation: "-20", transformOrigin:"19.3px 22.3px" });
    // create our scroll magic instance
    


    /**
     * Maginifying Glass & Chart
     */
    const animateChartMagnifyingGlass = new TimelineMax();
    animateChartMagnifyingGlass
        .set('#IconMagnifyingGlass_line1', { attr : { width : 0 } })
        .set('#IconMagnifyingGlass_line2', { attr : { width : 0 } })
        .set('#IconMagnifyingGlass_bar1', { attr : { y : 111, height : 0 } })
        .set('#IconMagnifyingGlass_bar2', { attr : { y : 111, height : 0 } })
        .set('#IconMagnifyingGlass_bar3', { attr : { y : 111, height : 0 } })
        .set('#IconMagnifyingGlass_bar4', { attr : { y : 111, height : 0 } })
        .set('#IconMagnifyingGlass_bar3Large', { attr : { y : 80.8, height : 0 } })
        .set('#IconMagnifyingGlass_bar4Large', { attr : { y : 90.9, height : 0 } })        
        .to('#IconMagnifyingGlass_line1', 0.3, { attr : { width : 69 } }, 0)
        .to('#IconMagnifyingGlass_line2', 0.3, { attr : { width : 69 } }, 0.15)        
        .to('#IconMagnifyingGlass_bar1', 0.2, { attr : { y : 84, height : 27 } }, 0.2)
        .to('#IconMagnifyingGlass_bar2', 0.3, { attr : { y : 63, height : 48 } }, 0.4)
        .to('#IconMagnifyingGlass_bar3', 0.3, { attr : { y : 47, height : 64 } }, 0.6)
        .to('#IconMagnifyingGlass_bar3Large', 0.25, { attr : { y : 30.1, height : 50.7 } }, 0.75)
        .to('#IconMagnifyingGlass_bar4', 0.25, { attr : { y : 54, height : 57 } }, 1.1)
        .to('#IconMagnifyingGlass_bar4Large', 0.25, { attr : { y : 48.6, height : 32.3 } }, 1.215);


    const sceneFourA = new ScrollMagic.Scene({
        triggerElement: '#s4_trigger_1',
        offset: defaults.offset()
    }).setTween(animateChartMagnifyingGlass);








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
        sceneOneB,
        sceneThree,
        sceneFourA,
        sceneFour,
        sceneSummary
    ]);

}

document.addEventListener("DOMContentLoaded", function(event) { 
    
    if (detectIE()) {
        setHeightOfSVGContainers();
    }
    
    setHeightOfContainers();

    setUpAnimations();

    window.on('resize', resizing);


    
});

function setHeightOfContainers() {

    // get viewport size
    const viewportWidth = h.viewportWidth();

    // set heights of SVG containers for Scene 3

    let s3Items = document.querySelectorAll('.s3__match');
    let s3Height = 0;
    let s3Large = 0;
    for(let i = 0; i < s3Items.length; i++) {

        
        if (viewportWidth < breakPointLg) {
            s3Items[i].style.height = '';
        } else {
            if (s3Items[i].clientHeight > s3Height) {
                s3Height = s3Items[i].clientHeight;
            }
        }

    }

    if (viewportWidth >= breakPointLg) {
        for(let i = 0; i < s3Items.length; i++) {
            s3Items[i].style.height = s3Height+'px';
        }
    }
    



}


function setHeightOfSVGContainers() {
    


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

