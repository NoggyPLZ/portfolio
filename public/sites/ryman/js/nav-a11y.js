/*
 * Accessible Bootstrap 3 nav dropdowns.
 * Load after bootstrap(.min).js.
 *
 * Bootstrap 3 already handles Enter/Space/Down to open, Up/Down to move,
 * Escape to close, and aria-expanded. What it lacks: closing the menu when
 * keyboard focus tabs out of it. Without this, an open menu stays on screen
 * and can cover whatever the user tabs to next (WCAG 2.2 — 2.4.11 Focus Not
 * Obscured).
 */
(function ($) {
  'use strict';

  $(document).on('focusout', '.navbar-nav .dropdown', function (e) {
    // relatedTarget = element receiving focus. null means focus left the
    // page or a click on non-focusable space; Bootstrap's own click handler
    // already closes menus in that case.
    if (
      $(this).hasClass('open') &&
      e.relatedTarget &&
      !$.contains(this, e.relatedTarget)
    ) {
      $(this)
        .removeClass('open')
        .find('[data-toggle="dropdown"]')
        .attr('aria-expanded', 'false');
    }
  });
})(jQuery);
