$(document).ready(function(){

$(".fa-bars").on({
    click : function(){
        $(this).hide();
        $(".fa-times").show();
        $(".logo").css("padding","41px 0");
        $(".slide").addClass("add-slide");
        $(".overlay").addClass("add-overlay");
    }
});

$(".fa-times").on({
    click : function(){
        $(this).hide();
        $(".fa-bars").show();
        $(".logo").css("padding","41px 0");
        $(".slide").removeClass("add-slide");
        $(".overlay").removeClass("add-overlay");
    }
});
$(".overlay").on({
    click : function(){
        $(".fa-bars").show();
        $(".fa-times").hide();
        $(".logo").css("padding","41px 0");
        $(".slide").removeClass("add-slide");
        $(".overlay").removeClass("add-overlay");
    }
});

















})