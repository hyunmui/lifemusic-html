$(function () {
  setupMenu();
  $(window).resize(setupMenu);

  // footer position
  footerPositioning();
  $(window).resize(footerPositioning);

  // Javascript to enable link to tab
  var url = document.location.toString();
  if (url.match("#")) {
    $('.nav-tabs a[href="#' + url.split("#")[1] + '"]').tab("show");
  }

  // Change hash for page-reload
  // $(".nav-tabs a").on("shown.bs.tab", function (e) {
  //   window.location.hash = e.target.hash;
  // });
});

function setupMenu() {
  let $menu_buttons = $('a[data-toggle="dropdown"].nav-link');
  let $menu_ul = $('#menu-area > ul');
  let $menu_area = $('#menu-area');

  if (!isMobileScreen()) {
    $menu_area.addClass('show');

    $menu_buttons.hover(function () {
      $menu_buttons.dropdown("hide");
      $(this).dropdown("show");
    });

    $("li.nav-item .dropdown-menu").css("position", "absolute");
    $("li.nav-item .dropdown-menu").css("width", "inherit");

    $menu_ul.addClass('justify-content-between w-50').removeClass('flex-column w-100');
  } else {
    $menu_area.removeClass('show');
    $menu_buttons.off('mouseenter mouseleave');

    $("li.nav-item .dropdown-menu").css("position", "static");
    $("li.nav-item .dropdown-menu").css("width", "100%");

    $menu_ul.addClass('flex-column w-100').removeClass('justify-content-between w-50');
  }
}

function footerPositioning() {
  let diff = $("body").height() - $(document).height();
  $("footer#doc-footer").css("bottom", diff < 0 ? diff : 0);
}

function isMobileScreen() {
  return window.innerWidth < 768;
}
