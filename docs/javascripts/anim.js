(function () {
  "use strict";

  var TARGETS = '.md-typeset .grid.cards li, .md-typeset table, ' +
                '.md-typeset .admonition, .md-typeset .mermaid, ' +
                '.md-typeset h2, .md-typeset h3';

  function init() {
    var els = document.querySelectorAll(TARGETS);
    if (!els.length) return;

    // Stagger the hero cards
    document.querySelectorAll('.grid.cards').forEach(function (grid) {
      grid.querySelectorAll('li').forEach(function (li, i) {
        li.style.animationDelay = (i * 110) + 'ms';
      });
    });

    els.forEach(function (el) { el.setAttribute('data-reveal', ''); });

    if (!('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    els.forEach(function (el) { io.observe(el); });
  }

  // Works with Material's instant loading
  if (window.document$ && typeof window.document$.subscribe === 'function') {
    window.document$.subscribe(init);
  } else {
    document.addEventListener('DOMContentLoaded', init);
  }
})();