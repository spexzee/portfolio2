//Logo Animation
let spexzee = document.querySelector('.spexzee');
let movingtext = document.querySelector('.text1');
let movingtext2 = document.querySelector('.text2');
spexzee.addEventListener('click', () => {
    if (movingtext.classList.contains('text1')) {
        movingtext.classList.toggle('movetext');
        movingtext2.classList.toggle('animation');
    }
});

 // button color blink
let btn = document.querySelector('.send-msg')
btn.addEventListener('mouseover', () => {
    if (btn.classList.contains('send-msg')) {
        btn.classList.remove('clr-blink')
    }
});
btn.addEventListener('mouseout',()=>{    
    if (btn.classList.contains('send-msg')) {
        btn.classList.add('clr-blink')
    }
})

// photo hover effect
let frontFace = document.querySelector('.front');
let backFace = document.querySelector('.back');
let Hire = document.querySelector('#hire-me');

//first pic to second pic
Hire.addEventListener('mouseover', () => {
    if (frontFace.classList.contains('front')) {
        frontFace.classList.remove('active');
        setTimeout(() => {
            backFace.classList.add('active');
        }, 130);
    }
});

//second pic to first pic
Hire.addEventListener('mouseout', () => {
    if (backFace.classList.contains('active')) {
        backFace.classList.remove('active');
        setTimeout(() => {
            frontFace.classList.add('active');
        }, 130);
    }
});

// opacity on scolling window
let homePage = document.querySelector('.home');
window.addEventListener('scroll', () => {
    let value = 1 + window.scrollY / -3500;
    homePage.style.opacity = value;
});

//hamBurger Menu
let ham = document.querySelector('.ham');
let cross = document.querySelector('.cross');
let menu = document.querySelector('list');

ham.addEventListener('click', () => {
    if (ham.classList.contains('ham')) {
        cross.classList.add('activeMenu');
        ham.classList.remove('activeMenu');
    }

})

cross.addEventListener('click', () => {
    if (cross.classList.contains('cross')) {
        ham.classList.add('activeMenu');
        cross.classList.remove('activeMenu');
    }
})

//contact form submisson
document.querySelector('.send-msg').addEventListener('click',()=>{
    alert('The message have been Sent. Thank You :) ')
})
