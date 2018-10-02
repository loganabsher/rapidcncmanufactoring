'use strict';
(function(module){
  const contactController = {};
  contactController.init = function(){
    $('#home').hide();
    $('#about').hide();
    $('title').html('Repositories');
    $('#contact').fadeIn('slow');
  };
  module.contactController = contactController;
})(window);
