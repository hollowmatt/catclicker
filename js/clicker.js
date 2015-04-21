// clicker.js
// This is the main JS file for the project
$(function(){

  //Model - refactor to object, rather than array - for easier search
  var cats = {
    "1": {
      "name" : "Oscar",
      "image" : "cat1.jpg",
      "clicks" : 0
    },
    "2": {
      "name" : "Fred",
      "image" : "cat2.jpg",
      "clicks" : 0
    },
    "3": {
      "name" : "Peach and Fuzz",
      "image" : "cat3.jpg",
      "clicks" : 0
    },
    "4": {
      "name" : "Bubbles",
      "image" : "cat4.jpg",
      "clicks" : 0
    },
    "5": {
      "name" : "Minnie",
      "image" : "cat5.jpg",
      "clicks" : 0
    }
  };

  //Controller
  var controller = {
    getCats: function() {
      return cats;
    },

    getCat: function(id) {
      var cat = cats[id];
      viewContent.render(id, cat);
    },

    increment: function(id) {
      var cat = cats[id]
      cat.clicks++;
      viewContent.render(id, cat);
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
      this.render();
    },

    render: function() {
      var html = '';
      $.each(controller.getCats(), (function(key, cat){
        html += "<li>" +
                "<span id='" + key + "'>" +
                cat.name + "</a>" +
                "</span>";
      }));
      this.catList.html(html);
      this.addListeners();
    },

    addListeners: function() {
      $.each(controller.getCats(), (function(key, cat){
        $('#'+key).on('click', function(e) {
          controller.getCat(key);
        });
      }));
    }
  };

  //View (Content)
  var viewContent = {
    init: function() {
      this.cat = $('#cat');
      this.derender();
    },

    render: function(id, cat) {
      viewContent.derender();
        var html = '<h2>' + "Cat " + cat.name + '</h2>';
        html += '<p>' + 'Clicked ' +cat.clicks + ' times </p>';
        html += '<img class="img-responsive" id="cat' + id + '" src="img/' + cat.image + '"></img>';
        this.cat.html(html);
        this.addListener(id);
    },

    addListener: function(id) {
      $('#cat' + id).click(id, function(e) {
        controller.increment(id);
      });
    },

    derender: function() {
      var html = '';
      this.cat.html(html);
    }
  };

  //Initiallize
  controller.init();
});


