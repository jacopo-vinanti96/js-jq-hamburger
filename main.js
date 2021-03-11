var hamburgerMenu = $('.hamburger-menu'),
    openClose = $('.close, .header-right > a');

openClose.click( function(){
  hamburgerMenu.toggle('slow');
});
