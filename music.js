SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4'
});

$(document).ready(function()   {

  SC.stream('/tracks/44919196', function(sound) {
  $('#start1').click(function(e) {
    e.preventDefault();
    sound.start();
  });
  $('#stop1').click(function(e) {
    e.preventDefault();
    sound.stop();
  });
});


$(document).ready(function()   {

  SC.stream('/tracks/293048698', function(sound) {
  $('#start2').click(function(e) {
    e.preventDefault();
    sound.start();
  });
  $('#stop2').click(function(e) {
    e.preventDefault();
    sound.stop();
  });
});


$(document).ready(function()   {

  SC.stream('/tracks/791619174', function(sound) {
  $('#start3').click(function(e) {
    e.preventDefault();
    sound.start();
  });
  $('#stop3').click(function(e) {
    e.preventDefault();
    sound.stop();
  });
});


$(document).ready(function()   {

  SC.stream('/tracks/283990281', function(sound) {
  $('#start4').click(function(e) {
    e.preventDefault();
    sound.start();
  });
  $('#stop4').click(function(e) {
    e.preventDefault();
    sound.stop();
  });
});


$(document).ready(function()   {

  SC.stream('/tracks/276933119', function(sound) {
  $('#start5').click(function(e) {
    e.preventDefault();
    sound.start();
  });
  $('#stop5').click(function(e) {
    e.preventDefault();
    sound.stop();
  });
});


$(document).ready(function()   {

  SC.stream('/tracks/536634576', function(sound) {
  $('#start6').click(function(e) {
    e.preventDefault();
    sound.start();
  });
  $('#stop6').click(function(e) {
    e.preventDefault();
    sound.stop();
  });
});


$(document).ready(function()   {

  SC.stream('/tracks/340549856', function(sound) {
  $('#start7').click(function(e) {
    e.preventDefault();
    sound.start();
  });
  $('#stop7').click(function(e) {
    e.preventDefault();
    sound.stop();
  });
});


$(document).ready(function()   {

  SC.stream('/tracks/7863733', function(sound) {
  $('#start8').click(function(e) {
    e.preventDefault();
    sound.start();
  });
  $('#stop8').click(function(e) {
    e.preventDefault();
    sound.stop();
  });
});

});
