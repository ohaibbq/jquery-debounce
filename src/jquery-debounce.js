 (function($) {
  function debounce(callback, delay) {
    var self = this, timeout;
    return function() {
      timeout = clearTimeout(timeout),
      timeout = setTimeout(function() {
        callback.apply(self);
        timeout = 0;
      }, delay);

      return this;
    };
  }

  $.extend($.fn, {
    debounce: function(event, callback, delay) {
      this.bind(event, debounce.apply(this, [callback, delay]));
    }
  });
})(jQuery);