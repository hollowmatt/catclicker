// clicker.js
// This is the main JS file for the project

// jQuery event handler for click event
var CAT1_CLICK_COUNT = 0;
var CAT2_CLICK_COUNT = 0;

$('#cat1').click(function(e) {
  CAT1_CLICK_COUNT += 1;
  console.log('clicked ' + CAT1_CLICK_COUNT + ' times');
  $("#cat1-count").text("Clicked " + CAT1_CLICK_COUNT + " times");
});

$('#cat2').click(function(e) {
  CAT2_CLICK_COUNT += 1;
  console.log('clicked ' + CAT2_CLICK_COUNT + ' times');
  $("#cat2-count").text("Clicked " + CAT2_CLICK_COUNT + " times");
});