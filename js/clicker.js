// clicker.js
// This is the main JS file for the project

// jQuery event handler for click event
var CATS = 2;
var CLICK_COUNT = { "cat1": 0, "cat2" : 0 };

for (var i = 0; i < CATS; i++) {
  var cat = i + 1;
  var eventID = '#cat' + cat;
  var html = '<div id=' + "cat" + cat + ' class="col-md-6">';
  html += '<h2>' + "Cat " + cat + '</h2>';
  html += '<p id="cat' + cat + '-count">';
  html += 'Clicked 0 times </p>';
  html += '<img class="img-responsive" id="cat' + cat + '" src="img/cat' + cat + '.jpg"></img>';
  $('#cats').append(html);
  console.log(eventID);
  $(eventID).click(cat,function(e) {
    CLICK_COUNT["cat" + cat] ++;
    var whichCat =eventID +'-count';
    alert(whichCat + ", " + cat + ", " + CLICK_COUNT["cat" + cat]);
    $(whichCat).text("Clicked " + CLICK_COUNT["cat" + cat] + " times");
  });
}
