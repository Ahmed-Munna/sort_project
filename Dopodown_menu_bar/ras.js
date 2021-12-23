$(document).ready(function(){

    $("#about").click(function(){
        $("#sublist").slideToggle();
    });

    $("#service").click(function(){
        $("#serviceList").slideToggle(500);
    });

    $(".toggleBtn").click(function(){
        $(".mainManu ul").slideToggle();
    });



})