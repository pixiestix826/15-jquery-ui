export default function() {
  var bar = $(`.accordion__bar`);

  bar.on('click', function(ev) {
    $(this).parent().siblings().find(`.accordion__bar-ul`).slideUp();
    $(this).siblings().slideToggle();
    ev.preventDefault();
  });
}
