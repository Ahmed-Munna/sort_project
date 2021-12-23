$(document).ready(function(){
    $(".toggle-btn").on("click",function(){
        $(".manuWrappar ul").toggleClass("active","1000").css("transition",".5s");
        $(".overlay").toggleClass("activeOverlay");
    });

    $(".protfolio").click(function(){
        $(".manuWrappar ul li ul").slideToggle();
    });

})