
const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'), 
    smooth: true
});



function mouseMoveDistort(){
window.addEventListener("mousemove",(dets)=>{

}
)

}










function firstPageAnim(){
    let tl= gsap.timeline();


    tl.from(".nav",{
        y:'-10',
        opacity:0,
        duration:1.5,
        ease: Expo.easeInOut
    })
    .to(".animeElem",{
        y:0,
        duration:2,
        ease: Expo.easeInOut,
        stagger:0.2,
        delay:-1
    })
    .from(".heroFooter",{
        y:-10,
        duration:1.5,
        opacity:0,
        delay:-1,
        ease: Expo.easeInOut
    })
}

firstPageAnim();



let circle =document.querySelector(".minicircle");
function circleMouseFollower(){
window.addEventListener("mousemove",(dets)=>{
circle.style.transform=`translate( ${dets.clientX}px, ${dets.clientY}px)`;
}
)}
circleMouseFollower();

let rotate= 0;
let rotDiff=0;





document.querySelectorAll(".elem")
.forEach((elem)=>{

elem.addEventListener("mouseleave",(e)=>{
gsap.to(elem.querySelector("img"),{
    opacity:0,
    ease:Power3,
    duration:0.5
})
});




elem.addEventListener("mousemove",(e)=>{
    let diffe = e.clientY-elem.getBoundingClientRect().top;
    
    rotDiff=e.clientX-rotate;
    rotate=e.clientX;
   
gsap.to(elem.querySelector("img"),{
    opacity:1,
    ease:  Power3,
    top:diffe,
    left:e.clientX,
    rotate: gsap.utils.clamp(-20,20, rotDiff*0.5)
   
});

})});
