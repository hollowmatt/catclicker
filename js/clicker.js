// clicker.js
// This is the main JS file for the project

// jQuery event handler for click event
var CLICK_COUNT = 0;
$('#my-elem').click(function(e) {
  CLICK_COUNT += 1;
  console.log('clicked ' + CLICK_COUNT + ' times');
  $("#count").text("Clicked " + CLICK_COUNT + " times");
});