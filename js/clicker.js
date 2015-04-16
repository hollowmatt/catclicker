// clicker.js
// This is the main JS file for the project

// jQuery event handler for click event
var CATS = [
  {
    "name" : "Oscar",
    "image" : "cat1.jpg",
    "clicks" : 0
  },
  {
    "name" : "Fred",
    "image" : "cat2.jpg",
    "clicks" : 0
  },
  {
    "name" : "Peach and Fuzz",
    "image" : "cat3.jpg",
    "clicks" : 0
  },
  {
    "name" : "Bubbles",
    "image" : "cat4.jpg",
    "clicks" : 0
  },
  {
    "name" : "Minnie",
    "image" : "cat5.jpg",
    "clicks" : 0
  }]

console.log(CATS.length);
for (var i = 0; i < CATS.length; i++) {
  var cat = i + 1;
  var eventID = '#cat' + cat;
  $('#nav').append(navMenuItem(i));
  $('#cats').append(htmlString(cat));
  console.log(eventID);
  (function(catCopy){
    var node = "cat" + catCopy;
    $("#" + node).click(catCopy,function(e) {
      CLICK_COUNT["cat" + catCopy] ++;
      var whichCat = node + '-count';
      $("#" + whichCat).text("Clicked " + CLICK_COUNT["cat" + catCopy] + " times");
    });
  })(cat);
}

// HTML builder
function htmlString(cat) {
  var html = '<div id=' + "cat" + cat + ' class="col-md-6">';
  html += '<h2>' + "Cat " + cat + '</h2>';
  html += '<p id="cat' + cat + '-count">';
  html += 'Clicked 0 times </p>';
  html += '<img class="img-responsive" id="cat' + cat + '" src="img/cat' + cat + '.jpg"></img>';
  return html;
}

function navMenuItem(cat) {
  var html = "<li>";
  html += "<a href='index.html' id='" + CATS[cat]['name'] + "'>" + CATS[cat]['name'] + "</a>";
  html += "</li>";
  return html;
}
