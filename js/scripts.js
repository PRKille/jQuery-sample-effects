$(document).ready(function() {

    $('.clickable').click(function(){
        $('#walrus-showing').toggle();
        $('#walrus-hidden').toggle();
    });

    $('.pi-toggle').click(function(){
        $('#thispirate').slideToggle();
        $('#thiscat').slideToggle();
    });

    $('#this-ninja').click(function(){
        $('#pro-ninja').fadeToggle();
    });

  });