var hamburgerMenu = $('.hamburger-menu'),
    close = $('.close'),
    hamburgerIcon = $('.header-right > a');

hamburgerIcon.click( function(){
  hamburgerMenu.addClass('active');
});

close.click( function(){
  hamburgerMenu.removeClass('active');
});
