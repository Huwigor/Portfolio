$(document).ready(function(){

    anime({
        targets: '.box-tittle, .box-buttons',
        translateY: 15,
        delay: anime.stagger(500, {direction: 'reverse'})
        });



    anime({
        targets: '.box-img-dev',
        translateX: 500,
        duration: 2000
        });  
             
        
    anime({
        targets: '.box-tittle-dev',
        translateX: -200,
        duration: 3000
        });


    anime({
        targets: '.tooltip-container, .box-contact-dev',
        translateX: 50,
        scale: 1.1,
        rotate: '1turn',
        duration: 4000
        });

});