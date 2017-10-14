'use strict';

(function(module){
const homeController = {};
homeController.init = function(){
  $('#home').hide();
  $('#repo').hide();
  $('title').html('About')
  $('#about').fadeIn('slow');
}
module.homeController = homeController;
})(window);
