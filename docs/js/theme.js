(function(){
  const root = document.documentElement;
  const stored = localStorage.getItem('theme');
  if(stored){
    root.setAttribute('data-theme', stored);
  }
  document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('theme-toggle');
    btn && btn.addEventListener('click', () => {
      const current = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', current);
      localStorage.setItem('theme', current);
    });
  });
})();
