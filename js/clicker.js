// clicker.js
// This is the main JS file for the project

var CATS = 2;
var CLICK_COUNT = { "cat1": 0, "cat2" : 0 };

for (var i = 0; i < CATS; i++) {
  var cat = i + 1;
  var node = document.getElementById('cats');
  var catdiv = createDiv("cat" + cat);
  node.appendChild(catdiv);
  
  var elem = document.getElementById("cat" + cat);
  elem.appendChild(createH2("Cat " + cat));
  elem.appendChild(createPara("cat" + cat));
  elem.appendChild(createImg("cat" + cat));
  
  var clickNode = document.getElementById("img-cat" + cat);
  (function(catCopy){
    $(clickNode).click(catCopy,function(e) {
      CLICK_COUNT["cat" + catCopy] ++;
      var whichCat = "which-cat" + catCopy;
      $("#" + whichCat).text("Clicked " + CLICK_COUNT["cat" + catCopy] + " times");
    });
  })(cat);
}

// HTML Creator functions
function createDiv(id) {
  var newDiv = document.createElement('div');
  newDiv.setAttribute("id", id);
  newDiv.setAttribute("class", 'col-md-6');
  return newDiv;  
}

function createPara(id) {
  var newP = document.createElement('p');
  newP.setAttribute("id", "which-" + id);
  newP.innerHTML = "Clicked 0 times";
  return newP;
}

function createImg(id) {
  var newImg = document.createElement('img');
  newImg.setAttribute("id", "img-" + id);
  newImg.setAttribute("class", 'img-responsive');
  newImg.setAttribute("src", "img/" + id + ".jpg");
  return newImg;
}

function createH2(innerText) {
  var newH2 = document.createElement('h2');
  newH2.innerHTML = innerText;
  return newH2;
}

