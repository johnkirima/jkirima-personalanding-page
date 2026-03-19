/* scripts.js — Minimal interactivity */

document.addEventListener('DOMContentLoaded', function () {

  /* Smooth scroll for nav links (fallback for browsers without CSS scroll-behavior) */
  var navLinks = document.querySelectorAll('nav a[href^="#"]');

  navLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

});
