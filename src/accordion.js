export default function() {
  var bar = $(`.accordion__bar`);
  var list = $(`.accordion__bar-list`);

  bar.on('click', function() {
    $(this).siblings().slideToggle();

    ev.preventDefault();
  });
};
