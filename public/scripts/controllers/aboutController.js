'use strict';

(function(module){
  const aboutController = {};
  aboutController.init = function(){
    $('#home').hide();
    $('#contact').hide();
    $('title').html('About')
    $('#about').fadeIn('slow');
  };
  module.aboutController = aboutController;
})(window);
