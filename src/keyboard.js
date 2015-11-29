export default function() {
  var keys = $(`.keyboard-keys-li`);
  var write = $(`.write`);

  keys.on('click', function() {
    var characters = $(this).html();
    write.html(write.html() + characters);
  });
}
