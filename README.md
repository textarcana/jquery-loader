# Load jQuery in compatibility mode. 

Intended for use in hostile environments :) where another JS library has
previously been loaded.

[Use `jQuery.noConflict()`](http://api.jquery.com/jQuery.noConflict/) to
load a clean version of jQuery, avoiding collisions with other JS
libraries that are installed on the page.

I originally wrote this code in order to be able to embed jQuery
modules into the Jenkins UI, on pages where Prototype was already
loaded.  Should also work to avoid conflicts with other versions of
jQuery, if installed.

## How does it work?

Works by loading an instance of jQuery that is wrapped in a
closure. Code executed inside that closure sees the clean jQuery
instance. Code *outside* the closure cannot access or modify (and so
shouldn't be able to collide with) the jQuery instance inside the
closure.



