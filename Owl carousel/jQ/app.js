$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:20,
        nav:true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    })





})