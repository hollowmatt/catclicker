// clicker.js
// This is the main JS file for the project
$(function(){
  //Model
  var cats = [
    {
      "id" : "1",
      "name" : "Oscar",
      "image" : "cat1.jpg",
      "clicks" : 0
    },
    {
      "id" : "2",
      "name" : "Fred",
      "image" : "cat2.jpg",
      "clicks" : 0
    },
    {
      "id" : "3",
      "name" : "Peach and Fuzz",
      "image" : "cat3.jpg",
      "clicks" : 0
    },
    {
      "id" : "4",
      "name" : "Bubbles",
      "image" : "cat4.jpg",
      "clicks" : 0
    },
    {
      "id" : "5",
      "name" : "Minnie",
      "image" : "cat5.jpg",
      "clicks" : 0
    }];

  //Controller
  var controller = {
    getCats: function() {
      return cats;
    },

    increment: function(id) {
      cats[id].clicks++;
      viewContent.render(cats[id]);
    },

    init: function() {
      viewList.init();
      viewContent.init();
    }
  };

  //View (List)
  var viewList = {
    init: function() {
      this.catList = $('#cat-nav');
      viewList.render();
    },

    render: function() {
      var html = '';
      controller.getCats().forEach(function(cat){
        html += "<li>" +
                "<span id='" + cat.id + "'>" +
                cat.name + "</a>" +
                "</span>";
      });
      this.catList.html(html);
      viewList.addListeners();
    },

    addListeners: function() {
      controller.getCats().forEach(function(cat){
        $('#'+cat.id).on('click', function(e) {
          viewContent.render(cat);
        });
      });
    }
  };

  //View (Content)
  var viewContent = {
    init: function() {
      this.cat = $('#cat');
      viewContent.derender();
    },

    render: function(cat) {
      viewContent.derender();
        var html = '<h2>' + "Cat " + cat.name + '</h2>';
        html += '<p>' + 'Clicked ' +cat.clicks + ' times </p>';
        html += '<img class="img-responsive" id="cat' + cat.id + '" src="img/' + cat.image + '"></img>';
        this.cat.html(html);
        viewContent.addListener(cat.id);
    },

    addListener: function(id) {
      $('#cat' + id).click(id, function(e) {
        controller.increment(id-1);
      });
    },

    derender: function() {
      var html = '';
      this.cat.html(html);
    }
  };

  controller.init();
});


