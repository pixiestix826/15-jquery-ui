export default function() {
  var bar = $(`.accordion__bar`);
  var list = $(`.accordion__bar-list`);

  bar.on('click', function() {
    $(this).next(list).slideToggle();
  });
};

$(`.accordion__bar`).click(function() {
  $(`.accordion__bar-ul`).slideUp();
  $(this).next(`.accordion__bar-list`).slideToggle;
});
