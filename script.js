// Count-up numbers in the hero panel
document.querySelectorAll('[data-count]').forEach(el => {
  const end = parseFloat(el.dataset.count), dec = +el.dataset.dec || 0;
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) { el.textContent = end.toFixed(dec); return; }
  const t0 = performance.now(), dur = 1800;
  (function tick(t) {
    const p = Math.min((t - t0) / dur, 1);
    el.textContent = (end * (1 - Math.pow(1 - p, 3))).toFixed(dec);
    if (p < 1) requestAnimationFrame(tick);
  })(t0);
});

// Contact form opens the visitor's email app (works on GitHub Pages, no server needed)
document.getElementById('form').addEventListener('submit', e => {
  e.preventDefault();
  const n = document.getElementById('name').value,
        m = document.getElementById('msg').value,
        f = document.getElementById('email').value;
  location.href = 'mailto:sakshi@example.com?subject=' + encodeURIComponent('Project enquiry from ' + n) +
    '&body=' + encodeURIComponent(m + '\n\nReply to: ' + f);
});

document.getElementById('yr').textContent = new Date().getFullYear();
