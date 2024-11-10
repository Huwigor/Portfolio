$(document).ready(function(){

    function handleScroll() {
        const boxes = document.querySelectorAll('.box-txt-about, .box-img-about');
        const viewportHeight = window.innerHeight;

        boxes.forEach(box => {
            const boxTop = box.getBoundingClientRect().top;
            const boxHeight = box.offsetHeight;

            if (boxTop < viewportHeight * 0.7 && boxTop + boxHeight > viewportHeight * 0.3) {
                box.style.opacity = 1;
            } else {
                box.style.opacity = 0;
            }
        });
    }

    window.addEventListener('scroll', handleScroll);

    window.addEventListener('load', handleScroll);

});