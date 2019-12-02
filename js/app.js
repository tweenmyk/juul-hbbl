function goTo(selector, screen, isClose) {
  const button = $(selector);
  let rootCurrentScreen = button
    .parent()
    .parent()
    .parent();

  if (isClose) {
    rootCurrentScreen = button.parent().parent();
  }

  button.click(function() {
    rootCurrentScreen.fadeOut(function() {
      $(screen).fadeIn();
    });
  });
}

$(document).ready(function() {
  goTo('#less18-btn', '#screen2', false);
  goTo('#more18-btn', '#screen3', false);
  goTo('#main-menu-btn', '#screen1', false);
  goTo('#close-video', '#screen1', true);
});
