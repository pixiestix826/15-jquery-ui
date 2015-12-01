export default function() {
  var keys = $(`.letter`);
  var write = $(`.write`);
  var delKey = $(`.delete`);
  var tabKey = $(`.tab`);
  var returnKey = $(`.return`);

  keys.on(`click`, function() {
    var char = $(this).html();

    write.html(write.html() + char);
  });

  delKey.on(`click`, function() {
    var html = write.html();

    write.html(html.substr(0, html.length - 1));
  });

  tabKey.on(`click`, function() {
    var char = `\t`;

    write.html(write.html() + char);
  });

  returnKey.on(`click`, function() {
    var char = `\n`;

    write.html(write.html() + char);
  });

}
