export default function() {
  var bar = $('.accordion__bar');
  var list = $('.accordion__bar-ul');

  bar.on('click', function() {
    $(this).next(list).slideToggle();
  });
}
