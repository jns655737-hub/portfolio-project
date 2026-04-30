 function toggleTheme() {
    document.documentElement.classList.toggle('dark');
  }

  // Run after page loads
  window.addEventListener('DOMContentLoaded', () => {

    const progressBar = document.getElementById('progressBar');

    // Scroll Progress Logic
    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;

      if (docHeight > 0) {
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + "%";
      }
    });

    // Feather icons safe load
    if (window.feather) {
      feather.replace();
    }
  });
