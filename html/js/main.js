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

  // footer position
  footerPositioning();
  $(window).resize(footerPositioning);
  
});

function footerPositioning() {
  let diff = $('body').height() - $(document).height();
  $('footer#doc-footer').css('bottom', diff < 0 ? diff : 0);
}

function isMobileScreen() {
  return window.innerWidth < 768;
}