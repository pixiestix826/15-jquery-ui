$(function() {
  var $write = $(`.write`),
      shift = false,
      capslock = false,

$(`.keyboard-keys li`).click(function() {
    var $this = $(this),
        character = $this.html(); // If it's a lowercase letter, nothing happens to this variable
//Shift keyboard-keys
if ($this.hasClass(`left-shift`) || $this.Class(`right-shift`)) {
    $(`.letter`).toggleClass(`uppercase`);
    $(`.symbol span`).toggle();

    shift = (shift === true) ? false : true;
    capslock = false;
    return false;
  }
// Caps lock
if ($this.hasClass(`capslock`)) {
    $(`.letter`).toggleClass(`uppercase`);
    capslock = true;
    return false;
}
// Delete
if ($this.hasClass(`delete`)) {
    var html = $write.html();

    $write.html(html.substr(0, html.length - 1));
    return false;
}
// Special characters
if ($this.hasClass(`symbol`)) character = $(`span:visible`, $this).html();
if ($this.hasClass(`space`)) character = ' ';
if ($this.hasClass(`tab`)) character = `/t`;
if ($this.hasClass(`return`)) character = `/n`;
// Uppercase letter
if ($this.hasClass(`Uppercase`)) character = character.toUpperCase();

});
});
