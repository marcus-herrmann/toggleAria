# toggleAria

Little jQuery-Plugin for toggling [WAI-ARIA states](https://www.w3.org/TR/wai-aria/states_and_properties) like `aria-busy`, `aria-disabled`, `aria-expanded`, and `aria-hidden`.

Imagine it as the counterpart to jQuery's `toggleClass`.

Just pass the state name as a parameter. Usage example for `aria-expanded` on a mobile menu trigger (why on the trigger? [See here](http://www.3needs.org/en/testing/code/aria-expanded.html)):

```
$("#nav__toggle").click(function(){

  $(this).toggleAria("expanded");

  $("#nav").toggleClass("nav--open");

});
```

[See demo on CodePen](https://codepen.io/marcus/pen/wMPwba/) (and use your browser's inspector on the button).