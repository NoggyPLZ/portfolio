/*
 * Accessible Bootstrap 3 carousel (WCAG 2.1/2.2 AA, ARIA APG carousel pattern)
 *
 * Usage: on the .carousel element, replace data-ride="carousel" with
 * data-a11y-carousel, and add a .carousel-pause button (see auditorium.html).
 * Load this file after bootstrap(.min).js.
 *
 * Why we start the carousel ourselves instead of using data-ride:
 *   - Bootstrap's data-ride init runs on window load and always starts
 *     rotation, so it would override a reduced-motion or user pause.
 *   - Bootstrap's pause:"hover" restarts rotation on mouseleave, even
 *     after the user pressed Pause. We pass pause:false and handle hover here.
 *
 * Behaviour:
 *   - Pause/play button: a "sticky" pause that only the user undoes.
 *   - Keyboard focus moving onto a carousel control (other than the
 *     pause button) stops rotation, as the APG recommends, unless the
 *     user explicitly pressed Play while inside the carousel.
 *   - Mouse hover pauses temporarily; it resumes on mouse leave.
 *   - prefers-reduced-motion: the carousel starts paused.
 *   - aria-live is "off" while rotating (no constant announcements) and
 *     "polite" when paused, so user-driven slide changes are announced.
 *   - aria-current is moved to the indicator button for the active slide.
 *   - Left/Right arrow keys already work: Bootstrap binds them on the
 *     carousel element, and key presses bubble up from focused controls.
 */
(function ($) {
  'use strict';

  var mq = function (q) {
    return !!(window.matchMedia && window.matchMedia(q).matches);
  };
  var prefersReducedMotion = mq('(prefers-reduced-motion: reduce)');
  var canHover = mq('(hover: hover)');

  $('[data-a11y-carousel]').each(function () {
    var el = this;
    var $carousel = $(el);
    var $inner = $carousel.find('.carousel-inner');
    var $items = $inner.children('.item');
    var $toggle = $carousel.find('.carousel-pause');
    var $dots = $carousel.find('.carousel-indicators button');

    var userPaused = prefersReducedMotion; // sticky pause
    var keepPlaying = false; // user pressed Play while focus was inside
    var hovering = false; // temporary pause

    $carousel.carousel({
      interval: $carousel.data('interval') || 5000,
      pause: false
    });

    function update() {
      $carousel.carousel(!userPaused && !hovering ? 'cycle' : 'pause');

      $toggle
        .find('.glyphicon')
        .toggleClass('glyphicon-pause', !userPaused)
        .toggleClass('glyphicon-play', userPaused);
      $toggle
        .find('.sr-only')
        .text(userPaused ? 'Play slideshow' : 'Pause slideshow');

      $inner.attr('aria-live', userPaused ? 'polite' : 'off');
    }

    $toggle.on('click', function () {
      userPaused = !userPaused;
      keepPlaying = !userPaused;
      update();
    });

    $carousel.on('focusin', function (e) {
      if (e.target !== $toggle[0] && !userPaused && !keepPlaying) {
        userPaused = true;
        update();
      }
    });

    $carousel.on('focusout', function (e) {
      if (!$.contains(el, e.relatedTarget)) keepPlaying = false;
    });

    if (canHover) {
      $carousel
        .on('mouseenter', function () {
          hovering = true;
          update();
        })
        .on('mouseleave', function () {
          hovering = false;
          update();
        });
    }

    $carousel.on('slid.bs.carousel', function () {
      var i = $items.index($items.filter('.active'));
      $dots.removeAttr('aria-current').eq(i).attr('aria-current', 'true');
    });

    update();
  });
})(jQuery);
