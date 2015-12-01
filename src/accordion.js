export default function() {
  var bar = $(`.accordion__bar`);

  // var list = $(`.accordion__drop-down`);

  bar.on('click', function(ev) {
    $(this).siblings().slideToggle();
    $(this).find(parent).slideUp();
    ev.preventDefault();
  });
}
