export default function() {
  var bar = $(`.accordion__bar`);
  var list = $(`.accordion__bar-list`);

  bar.on('click', function(ev) {
    $(this).siblings(list).slideToggle();
    $(this).next.parent(bar).slideUp();
    ev.preventDefault();
  });
}
