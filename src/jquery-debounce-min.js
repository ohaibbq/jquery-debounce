/*   Copyright (c) 2011, Diaspora Inc.  This file is
*   licensed under the Affero General Public License version 3 or later.  See
*   the COPYRIGHT file.
*/
(function(a){function b(a,b){var c=this,d;return function(){return d=clearTimeout(d),d=setTimeout(function(){a.apply(c),d=0},b),this}}a.extend(a.fn,{debounce:function(a,c,d){this.bind(a,b.apply(this,[c,d]))}})})(jQuery);