$(document).ready(function() {

  $("main#spapp > section").height($(document).height() - 60);

  var app = $.spapp({error404 : 'error404'}); // initialize

  // define routes
  app.route({
    view: 'view1',
    onCreate: function() { $("#view1").append($.now()+': Written on create<br/>'); },
    onReady: function() { $("#view1").append($.now()+': Written when ready<br/>'); }
  });
  app.route({view: 'view2', load: 'view2.html' });
  app.route({
    view: 'view3', 
    onCreate: function() { $("#view3").append("I'm the third view"); }
  });

  // run app
  app.run();

});