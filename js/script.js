var navbarCollapse = function() {
  const navbar = $('#navbar');
  $(window).scrollTop() > navbar.height() ? navbar.addClass('scrolled') : navbar.removeClass('scrolled');
};
navbarCollapse();
$(window).on('scroll', navbarCollapse);