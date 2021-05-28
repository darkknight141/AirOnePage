let header = document.querySelector('.header');


window.addEventListener('scroll', function(){
    if (window.pageYOffset > 150){
        header.style.backgroundColor = 'rgb(255,255,255)';
    }else{
        header.style.backgroundColor = 'transparent';
    }
})