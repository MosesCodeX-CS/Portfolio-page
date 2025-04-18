// 1. Load navbar & footer
async function loadComponents() {
  try {
    const [navRes, footRes] = await Promise.all([
      fetch('components/navbar.html'),
      fetch('components/footer.html')
    ]);
    document.querySelector('header').innerHTML = await navRes.text();
    document.querySelector('footer').innerHTML = await footRes.text();
    setActiveNavLink();
    setupDarkMode();
    setCurrentYear();
  } catch (e) {
    console.error('Component load error:', e);
  }
}

// Set current year
document.addEventListener('DOMContentLoaded', function () {
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Filter functionality
  const filterButtons = document.querySelectorAll('.filter-buttons .btn');
  const serviceItems = document.querySelectorAll('.service-item');

  filterButtons.forEach((button) => {
    button.addEventListener('click', function () {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove('active'));
      // Add active class to clicked button
      this.classList.add('active');

      const filter = this.getAttribute('data-filter');

      serviceItems.forEach((item) => {
        if (filter === 'all' || item.getAttribute('data-category') === filter) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // Dark mode toggle
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      const icon = darkModeToggle.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-moon');
        icon.classList.toggle('fa-sun');
      }
    });
  }
});

// 2. Highlight active nav link
function setActiveNavLink() {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === page);
  });
}

// 3. Dark mode toggle
function setupDarkMode() {
  const btn = document.getElementById('dark-mode-toggle');
  if (!btn) return;
  const apply = isDark => {
    document.body.classList.toggle('dark-mode', isDark);
    btn.innerHTML = isDark
      ? '<i class="fas fa-sun"></i>'
      : '<i class="fas fa-moon"></i>';
    localStorage.setItem('darkMode', isDark);
  };
  apply(localStorage.getItem('darkMode') === 'true');
  btn.addEventListener('click', () => apply(!document.body.classList.contains('dark-mode')));
}

// 4. Set current year
function setCurrentYear() {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
}

// 5. Project filtering
function setupFiltering() {
  document.querySelectorAll('[data-filter]').forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');
      document.querySelectorAll('.project-item').forEach(item => {
        item.style.display = (filter === 'all' || item.dataset.category === filter) ? '' : 'none';
      });
      document.querySelectorAll('[data-filter]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
}

// 6. Init particles & components
document.addEventListener('DOMContentLoaded', () => {
  loadComponents();
  setupFiltering();
  if (document.getElementById('particles-js')) {
    particlesJS('particles-js', {
      particles: {
        number: { value: 80 },
        color: { value: '#ffffff' },
        shape: { type: 'circle' },
        opacity: { value: 0.5 },
        size: { value: 3 },
        line_linked: { enable: true, distance: 150 }
      }
    });
  }
});
