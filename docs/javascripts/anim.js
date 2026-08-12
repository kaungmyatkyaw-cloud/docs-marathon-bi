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

// Mark tabs with children as nested for hover dropdown
function markNestedTabs() {
  document.querySelectorAll('.md-tabs__item').forEach(function(item) {
    var link = item.querySelector('.md-tabs__link');
    if (!link) return;
    var href = link.getAttribute('href');
    if (!href || href === '#') return;
    
    // Check if this tab has children in nav
    var nav = document.querySelector('.md-nav--primary');
    if (!nav) return;
    
    var navItem = nav.querySelector('a[href="' + href + '"]');
    if (!navItem) return;
    
    var parentLi = navItem.closest('li');
    if (!parentLi) return;
    
    var subNav = parentLi.querySelector('.md-nav__list');
    if (subNav && subNav.children.length > 1) {
      item.classList.add('md-tabs__item--nested');
      
      // Create dropdown
      var dropdown = document.createElement('div');
      dropdown.className = 'md-tabs__dropdown';
      subNav.querySelectorAll(':scope > li > a').forEach(function(subLink) {
        var a = document.createElement('a');
        a.href = subLink.href;
        a.textContent = subLink.textContent;
        dropdown.appendChild(a);
      });
      item.appendChild(dropdown);
    }
  });
}

// Run on load and after navigation
if (window.document$ && typeof window.document$.subscribe === 'function') {
  window.document$.subscribe(markNestedTabs);
} else {
  document.addEventListener('DOMContentLoaded', markNestedTabs);
}

// ── Back button: inject and show only if history exists ─────
(function () {
  "use strict";

  function injectBackButton() {
    // Don't inject twice
    if (document.getElementById('md-back-button')) return;
    
    // Only show if there's actual history to go back to
    if (window.history.length <= 1) return;
    // Don't show if user came from a different domain
    if (!document.referrer) return;

    var btn = document.createElement('button');
    btn.id = 'md-back-button';
    btn.className = 'back-button';
    btn.type = 'button';
    btn.setAttribute('aria-label', 'Go back to previous page');
    btn.innerHTML = 
      '<svg viewBox="0 0 24 24"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>' +
      '<span>Back</span>';
    
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      window.history.back();
    });
    
    document.body.appendChild(btn);
    
    // Fade in after a short delay (so page content renders first)
    setTimeout(function () {
      btn.classList.add('is-visible');
    }, 300);
  }

  // Works with Material's instant-loading
  if (window.document$ && typeof window.document$.subscribe === 'function') {
    window.document$.subscribe(injectBackButton);
  } else {
    document.addEventListener('DOMContentLoaded', injectBackButton);
  }
})();