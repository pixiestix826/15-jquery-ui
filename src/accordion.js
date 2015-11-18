export default function() {
  var bar = $(`.accordion__bar`);
  var list = $(`.accordion__bar-list`);

  bar.on('click', function() {
    $(`.accordion__bar-ul`).slideUp();
    $(this).next(list).slideDown();

    ev.preventDefault();
  });
};
