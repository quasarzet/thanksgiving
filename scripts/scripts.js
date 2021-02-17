// BURGER MENU ANIMATIONS
const burgerMenu = document.querySelector('.burger-menu');
const overlay = document.querySelector('.navigation-container');
const body = document.body;
const line1 = document.querySelector('.line-1');
const line2 = document.querySelector('.line-2');
const line3 = document.querySelector('.line-3');

burgerMenu.timeline = gsap.timeline({paused:true});
burgerMenu.timeline
.to('.line-1', {x:-25, duration: 0.2, opacity: 0})
.to('.line-3', {x:25, duration: 0.2, opacity: 0}, "-=0.2")
.to('.line-1', {x:25, duration: 0.1, opacity: 0})
.to('.line-3', {x:-25, duration: 0.1, opacity: 0})
.to('.line-2', {duration: 0.1, opacity: 0}, "-=0.2")
.to('.line-1', {opacity: 0, transform:"rotateZ(-45deg)", transformOrigin: "right", translateY: '-1px', duration: 0.1})
.to('.line-3', {opacity: 0, transform:"rotateZ(45deg)", transformOrigin: "right", translateY: '4px', duration: 0.1})
.to(['.line-1', '.line-3'], {duration: 0.1, opacity: 1},)
.to(overlay, {left: 0, duration: 0.1},"-=0.3")
.to(overlay, {opacity: 1, duration: 0.3})

burgerMenu.addEventListener('click', ()=>{
    body.classList.toggle('hide-scrolling');
    if(burgerMenu.classList.contains('active')){
        burgerMenu.classList.remove('active');
        burgerMenu.timeline.reverse();
    }else{
        burgerMenu.classList.add('active');
        burgerMenu.timeline.play();
    }
})

