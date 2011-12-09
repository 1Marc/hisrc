HiSRC
=====

### A simple jQuery plugin for adaptive images in responsive web design

A twist on the old school [`LOWSRC` `IMG` attribute](http://www.w3.org/TR/html5/obsolete.html#attr-img-lowsrc), which would render a lower file size image first while a larger file size image would appears in its place later.

* * * 

How the HiSRC jQuery Plugin Works
=====

The browser loads the low-resolution image first with an old-fashion `IMG` `SRC` attribute.

Then the HiSRC jQuery plugin checks the resolution of the browser. 

If the browser resolution is wider than the default 640 pixels width, then the plugin overwrites the low-resolution image for the higher resolution image.

Setting up
=====

Associate jQuery to your web document as well as the HiSRC plugin as well.

In this example, jQuery is link to Google's CDN and the HiSRC plugin is in the same directory as the web document:

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.0/jquery.min.js"></script>
<script src="hisrc.js"></script>
```

The high-resolutions should be placed as the value of `data-hisrc` in the markup of your web page:

```html
<img src="http://placehold.it/400x200.png" data-hisrc="http://placehold.it/800x200.png" alt="unicorns">
```

* * * 

More Resources
=====

Do you need a more robust, server-side solution? Try [Responsive Images](https://github.com/filamentgroup/Responsive-Images). Requires PHP and editing `.htaccess` files

