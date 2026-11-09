/* Portfolio demo behaviour. Dropdowns use Bootstrap 3.3.7 + jQuery; this file covers the rest
   (navbar toggle, native dialogs, carousel, demo buttons).
   No network requests, no tracking. */
(function () {
  'use strict';

  var DEMO_MSG = 'Portfolio demo: job search and applications are turned off.';
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function each(sel, root, fn) { Array.prototype.forEach.call((root || document).querySelectorAll(sel), fn); }

  /* ---- Navbar collapse toggle (mobile) ---- */
  each('.navbar-toggle[aria-controls]', null, function (btn) {
    var panel = document.getElementById(btn.getAttribute('aria-controls'));
    if (!panel) { return; }
    btn.addEventListener('click', function () {
      var open = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!open));
      btn.classList.toggle('collapsed', open);
      panel.classList.toggle('in', !open);
    });
  });

  /* ---- Dropdowns: handled by Bootstrap 3.3.7's own dropdown plugin
     (assets/js/bootstrap.min.js, via data-toggle="dropdown"). ---- */

  /* ---- Dialogs: native <dialog> with showModal() ---- */
  each('[data-dialog]', null, function (btn) {
    var dlg = document.getElementById(btn.getAttribute('data-dialog'));
    if (!dlg || typeof dlg.showModal !== 'function') { return; }
    btn.addEventListener('click', function () {
      dlg._opener = btn;
      dlg.showModal();
      document.documentElement.classList.add('dialog-open');
    });
  });
  each('dialog', null, function (dlg) {
    each('[data-close]', dlg, function (b) { b.addEventListener('click', function () { dlg.close(); }); });
    dlg.addEventListener('click', function (e) { if (e.target === dlg) { dlg.close(); } }); // backdrop
    dlg.addEventListener('close', function () {
      document.documentElement.classList.remove('dialog-open');
      if (dlg._opener) { dlg._opener.focus(); }
    });
  });

  /* ---- Disabled job search / apply buttons ---- */
  each('[data-demo-apply]', null, function (btn) {
    btn.addEventListener('click', function () {
      var id = btn.getAttribute('data-demo-target');
      var out = id ? document.getElementById(id) : btn.nextElementSibling;
      if (!out || !(id || out.classList.contains('demo-msg'))) { return; }
      out.textContent = '';
      window.setTimeout(function () { out.textContent = DEMO_MSG; }, 100);
    });
  });

  /* ---- Carousel with pause control ---- */
  each('[data-carousel]', null, function (c) {
    var slides = c.querySelectorAll('.item');
    var picks = c.querySelectorAll('[data-goto]');
    var inner = c.querySelector('.carousel-inner');
    var pauseBtn = c.querySelector('[data-pause]');
    var delay = parseInt(c.getAttribute('data-interval'), 10) || 7000;
    var idx = 0, timer = null;
    var userPaused = reduceMotion;   // never auto-rotate when reduced motion is requested
    var hover = false;

    function render() {
      Array.prototype.forEach.call(slides, function (s, i) { s.classList.toggle('active', i === idx); });
      Array.prototype.forEach.call(picks, function (p, i) {
        if (i === idx) { p.setAttribute('aria-current', 'true'); } else { p.removeAttribute('aria-current'); }
      });
    }
    function go(n) { idx = (n + slides.length) % slides.length; render(); }
    function playing() { return !userPaused && !hover; }
    function sync() {
      window.clearInterval(timer);
      timer = null;
      if (playing()) { timer = window.setInterval(function () { go(idx + 1); }, delay); }
      inner.setAttribute('aria-live', playing() ? 'off' : 'polite');
      pauseBtn.querySelector('.label-text').textContent = userPaused ? 'Play slideshow' : 'Pause slideshow';
      var icon = pauseBtn.querySelector('.glyphicon');
      icon.className = 'glyphicon ' + (userPaused ? 'glyphicon-play' : 'glyphicon-pause');
    }
    function stop() { if (!userPaused) { userPaused = true; sync(); } }

    pauseBtn.addEventListener('click', function () { userPaused = !userPaused; sync(); });
    c.querySelector('[data-prev]').addEventListener('click', function () { stop(); go(idx - 1); });
    c.querySelector('[data-next]').addEventListener('click', function () { stop(); go(idx + 1); });
    Array.prototype.forEach.call(picks, function (p) {
      p.addEventListener('click', function () { stop(); go(parseInt(p.getAttribute('data-goto'), 10)); });
    });
    // Keyboard focus anywhere in the carousel stops rotation until the user presses Play.
    c.addEventListener('focusin', function (e) { if (e.target !== pauseBtn) { stop(); } });
    c.addEventListener('mouseenter', function () { hover = true; sync(); });
    c.addEventListener('mouseleave', function () { hover = false; sync(); });
    render();
    sync();
  });
})();
