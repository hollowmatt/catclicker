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
  var node = document.getElementById('cats');
  var catdiv = document.createElement('div');
  catdiv.setAttribute("id", "cat" + cat);
  catdiv.innerHTML = 'new div';
  node.appendChild(catdiv);
  //$('#cats').append(html);
  elem = document.getElementById("cat" + cat);
  elem.addEventListener('click'), (function(catCopy){
    return function() {
      alert(catCopy);
    }
  })(cat);

  // $(eventID).click(cat,function(e) {
  //   CLICK_COUNT["cat" + cat] ++;
  //   var whichCat =eventID +'-count';
  //   $(whichCat).text("Clicked " + CLICK_COUNT["cat" + cat] + " times");
  // });
}
