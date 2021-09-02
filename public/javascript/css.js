document.addEventListener('DOMContentLoaded', function() {
    var options = {};
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, options);
     
    var instance = M.Carousel.init({
        fullWidth: true,
        duration: 75
    });
})
