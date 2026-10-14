/* Sets light/dark before the page paints. Always light unless the user chose dark (suite rule).
   Keeps the original key 'mbpaystub_theme_v1' so returning users keep their choice. */
(function () {
  var t = null;
  try { t = localStorage.getItem('mbpaystub_theme_v1'); } catch (e) {}
  document.documentElement.setAttribute('data-theme', t === 'dark' ? 'dark' : 'light');
})();
