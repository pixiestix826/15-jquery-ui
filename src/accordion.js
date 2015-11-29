export default function() {
  var bar = $(`.accordion__bar`);
  var list = $(`.accordion__bar-list`);

  bar.on('click', function(ev) {
    var siblings = list.nextSibling;
    $(this).siblings().slideToggle();
    $(this).find(siblings).slideUp();
    ev.preventDefault();
  });
}
