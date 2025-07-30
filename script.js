const sections = document.querySelectorAll('.section');
const options = { threshold: 0.2 };

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
}, options);

sections.forEach(section => {
  observer.observe(section);
});

function toggleMenu() {
  const nav = document.querySelector('.nav-links');
  nav.classList.toggle('show');
}

  const form = document.querySelector('.contact-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you! Your message has been sent.');
    form.reset();
  });
  
const themeToggle = document.getElementById('theme-toggle');
const savedTheme = localStorage.getItem('theme') || 'light';

document.body.classList.add(savedTheme + '-theme');
themeToggle.textContent = savedTheme === 'dark' ? '☀︎' : '☼';

themeToggle.addEventListener('click', () => {
  const isDark = document.body.classList.contains('dark-theme');
  
  document.body.classList.toggle('dark-theme', !isDark);
  document.body.classList.toggle('light-theme', isDark);

  const newTheme = isDark ? 'light' : 'dark';
  localStorage.setItem('theme', newTheme);
  themeToggle.textContent = newTheme === 'dark' ? '☀︎' : '☼';
});
