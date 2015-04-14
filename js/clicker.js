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
  var catdiv = createDiv("cat" + cat);
  node.appendChild(catdiv);
  elem = document.getElementById("cat" + cat);
  var catHeader = document.createElement('h2');
  catHeader.innerHTML = "Cat " + cat;
  elem.appendChild(catHeader);
  elem.appendChild(createPara("cat" + cat));
  elem.appendChild(createImg("cat" + cat));
  var clickNode = document.getElementById("img-cat" + cat);

  // clickNode.addEventListener('click'), (function(catCopy){
  //   return function() {
  //     alert(catCopy);
  //   }
  // })(cat);
  
  (function(catCopy){
    $(clickNode).click(catCopy,function(e) {
      alert('click' + catCopy);
      CLICK_COUNT["cat" + catCopy] ++;
      var whichCat = "which-cat" + catCopy;
      $(whichCat).text("Clicked " + CLICK_COUNT["cat" + catCopy] + " times");
    });
  })(cat);
}


// <div class="row">
//   <div class="col-md-6">
//     <h2>
//       Carson
//     </h2>
//     <p id="cat1-count">
//       Clicked 0 times
//     </p>
//     <img class="img-responsive" id="cat1" src="img/kitten.jpg"></img>
//   </div>
//   <div class="col-md-6">
//     <h2>
//       Chewie
//     </h2>
//     <p id="cat2-count">
//       Clicked 0 times
//     </p>
//     <img class="img-responsive" id="cat2" src="img/chewie.jpg"></img>
//   </div>
// </div>

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

