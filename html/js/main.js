$(function () {
  let $menu_buttons = $('a[data-toggle="dropdown"].nav-link');
  if (!isMobileScreen()) {
    $menu_buttons.hover(function () {
      $menu_buttons.dropdown("hide");
      $(this).dropdown("show");
    });
  } else {
    // $menu_buttons.attr("data-display", "static");
    $("li.nav-item .dropdown-menu").css("position", "static");
    $("li.nav-item .dropdown-menu").css("width", "100%");
  }
});

function isMobileScreen() {
  return window.innerWidth < 768;
}