$(document).ready(function(){
    window.onload = function(){
        $(".anime").animate({left: '250px'});

    }

    $(".anime").load(function(){
        alert("Image loaded.");
    });
})
