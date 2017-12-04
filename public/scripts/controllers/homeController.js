'use strict';
(function(module){
  const homeController = {};
  homeController.init = function(){
    $('#contact').hide();
    $('#about').hide();
    $('title').html('Home');
    $('#home').fadeIn('slow');
  };
  module.homeController = homeController;
})(window);
