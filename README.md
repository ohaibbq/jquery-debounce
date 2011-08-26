jquery-debounce
===============
jquery-debounce is a jQuery plugin that allows you to easily debounce event callbacks.

How do I use it?
================

Signature
---------

`$.fn.debounce(event, callback, delay);`


Example
-------
`$("#foo").debounce("click", function() { }, 500);`
  - Debounce the click event on #foo for 500 milliseconds

Tests
-----
Running the test suite requires RubyGems and the Bundler gem.
To run the tests run `rake jasmine`