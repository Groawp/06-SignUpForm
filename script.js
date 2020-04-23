document.querySelector('.banner-btn').addEventListener('click',() => {
    document.querySelector(".banner").style.display ='none';
    document.querySelector(".popup").style.cssText ='opacity: 1; visibility: visible';
    document.querySelector(".container").style.cssText = "background: crimson;";
})

document.querySelector('.x-btn').addEventListener('click',() =>{
    document.querySelector(".banner").style.display ='flex';
    document.querySelector(".popup").style.cssText ='opacity: 0; visibility: hidden';
    document.querySelector(".container").style.cssText = 'background: url(bg.jpg) center no-repeat;background-size: cover';
})