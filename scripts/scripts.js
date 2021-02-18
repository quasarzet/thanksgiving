// BURGER MENU ANIMATIONS
const burgerMenu = document.querySelector('.burger-menu');
const overlay = document.querySelector('.navigation-container');
const body = document.body;
const line1 = document.querySelector('.line-1');
const line2 = document.querySelector('.line-2');
const line3 = document.querySelector('.line-3');
const cross = document.querySelector('.svg-cross');

burgerMenu.timeline = gsap.timeline({paused:true});
burgerMenu.timeline
.to(line1, {x:-40, duration: 0.2, opacity: 0})
.to(line3, {x:40, duration: 0.2, opacity: 0}, "-=0.2")
.to(line2, {duration: 0.1, opacity: 0}, "-=0.2")
.to(overlay, {left: 0, duration: 0.1},"-=0.3")
.to(overlay, {opacity: 1, duration: 0.3})
.from(cross, {opacity: 0, scale: 0.5, duration: 0.5})

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

