# toggleAria

jQuery-Plugin for toggling [WAI-ARIA states](https://www.w3.org/TR/wai-aria/states_and_properties) like `aria-busy`, `aria-disabled`, `aria-expanded`, and `aria-hidden`.

Imagine it as the counterpart to jQuery's `toggleClass`.

Usage example:

```
$("#nav__toggle").click(function(){

  $(this).toggleAria("expanded");

  $(".nav").toggleClass("nav--open");

});
```