document.addEventListener('DOMContentLoaded', function() {
    //find wich slide is the middle one
    // var carousel_items = document.querySelectorAll('.carousel-item').length;
    // var middle_slide = Math.round(carousel_items / 2) 
    
    // console.log('The slide in the middle is the ' + middle_slide + ' out of ' + carousel_items)
    //Carousel initialization
    var options = {};
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, options);
    
    //Set the carousel to show the middle slide first
    // var elem = document.querySelector('.carousel');
    // var instance = M.Carousel.getInstance(elem);
    // instance.set(middle_slide);
    var instance = M.Carousel.init({
        fullWidth: true
      });
})