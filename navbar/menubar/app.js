$(document).ready(function(){


$(".fa-bars").click(function(){
    $(".mainContant ul").toggle(500);
});
$(".fa-plus-square").click(function(){
    $(".mainContant ul").toggle(500);
});

$(".fa-bars").click(function(){
    $(this).hide();
});
$(".fa-bars").click(function(){
    $(".fa-plus-square").show();
});
$(".fa-plus-square").click(function(){
    $(".fa-bars").show();
});
$(".fa-plus-square").click(function(){
    $(this).hide();
});







})