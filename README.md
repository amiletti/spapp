Spapp.
===============================
**Spapp** is a simple jquery plugin that help to create single page application. The principle is quite simple.
With this plugin you will load a main page wrapper that will load every other view (or if you prefer page) on url hash change.

----------


HTML
-------------
```html
<main id="spapp" role="main">
  <section id="view_xxx"></section>
  ...
  <section id="view_2"></section>
  <section id="view_1"></section>
</main>
```
create the main html structure, like above.
Some rules:

 - The `<main>` tag need to have "spapp" id.
 - All `<section>` tags inside the `<main>` tag will be treated as views.
 - If default view is not declared on init, the last section is automatically set as default.
 - You can add `data-load="file_to_load.html"` in section tag to set a file to load in section. Alternatively you can set a template for every section via js (see below).


----------
JS
-------------
When you have set your html you can write the javascript to run the plugin. First of all init the app via `$.spapp()`, add your route and finally run the app. At the end you should have a snippet like this
```js
var app = $.spapp({
  defaultView  : "#view_xxx",
  templateDir  : "./tpl/",
  pageNotFound : "error_404"
});

app.route({
  view : "view_1",
  load : "view_xxx.html",
  onCreate: function() {  },
  onReady: function() {  }
});

app.run();
```

On init ou can pass an object to the plugin to set the main config, detail of **config** object is:

 - **defaultView** is the view will be launched if the url does not have an hash
 - **templateDir**  is the directory where the plugin try to find any html file to load in `<section>` tags
 - **pageNotFound** is the view to use when the hash in the url don't mach any defined routes

After this you need to define your routes. The basic routes object was automatically created at the init of the plugin following the `<main id="spapp">` tag. To extend functionality you can define every single view with the `route()` method.
The options of the route method are the foillowing:

 - **view** is the section id, this is a mandatory field
 - **load** is the filename of the html file to load when the view is showed for the first time. 
 - **onCreate** is a function launched once when the view is built for the first time
 - **onReady** is a function launched every time the view is showed

If `load` property is declared in the `route()` method it override the `data-load` attribute set in the `<section>` tag.

If `load` property is declared when the view are built the `onCreate()` and `onReady()` functions are launched only when template are loaded.
