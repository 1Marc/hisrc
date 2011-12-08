HiSRC
=====

### A simple jQuery plugin to replace default (low resolution images) with larger images based on browser width.

A twist on the old [`LOWSRC` IMG attribute](http://www.w3.org/TR/html5/obsolete.html#attr-img-lowsrc), which set a low-resolution image to be loaded first as a progressive JPEG loaded over it. Old school.

The browser loads the low-resolution image first. Then jQuery plugin checks the resolution of the browser, if the high-resolution solution should be delivered to the browser.

After downloading and setting up the plugin alongside jQuery, make the value of `SRC` attribute as the low-resolution image. 

The high-resolutions should be placed as the value of `data-hisrc` in the markup of your web page:

```html
<img src='http://placehold.it/400x200.png' data-hisrc='http://placehold.it/800x200.png'>
```

* * * 

Do you need a more robust, server-side solution? Try [Responsive Images](https://github.com/filamentgroup/Responsive-Images). Requires PHP and editing `.htaccess` files

