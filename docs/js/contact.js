document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  if(!form) return;
  form.addEventListener('submit', (e) => {
    const honeypot = document.getElementById('website').value;
    if(honeypot) {
      e.preventDefault();
    }
  });
});
