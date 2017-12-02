'use strict';

const page = require('../vendors/scripts/page.js');

const controller = {};

controller.home = function(){
  $('#about').hide();
  $('#contact').hide();
  $('title').html('welcome')
  $('#home').fadeIn('slow');
};

controller.contact = function(){
  $('#home').hide();
  $('#about').hide();
  $('title').html('contact')
  $('#contact').fadeIn('slow');
};

controller.about = function(){
  $('#home').hide();
  $('#contact').hide();
  $('title').html('about us')
  $('#about').fadeIn('slow');
};

page('/', controller.home);
page('/contact', controller.contact);
page('/about', controller.about);

page();
