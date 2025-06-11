// Приветствие според часа
window.addEventListener("DOMContentLoaded", () => {
    const now = new Date().getHours();
    const greeting = document.createElement("p");
    greeting.className = "greeting";
  
    if (now >= 5 && now < 12) greeting.textContent = "Добро утро, будители!";
    else if (now >= 12 && now < 18) greeting.textContent = "Добър ден, родолюбци!";
    else greeting.textContent = "Добър вечер, просветители!";
  
    document.querySelector("main").prepend(greeting);
  });
  
  // Превключване на тъмна тема
  function toggleTheme() {
    document.body.classList.toggle("dark-mode");
  }
  
 // Анимация при зареждане на основното съдържание
window.addEventListener("load", () => {
    document.body.classList.add("loaded");
  });
  
  
  // Скрол до началото
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  // Уголемяване на снимка в галерията
document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.querySelector('.gallery');
  if (!gallery) return;

  gallery.addEventListener('click', function (e) {
    if (e.target.tagName === 'IMG') {
      // Ако вече има уголемена снимка, премахни я
      const enlarged = document.querySelector('.enlarged-img');
      if (enlarged) enlarged.remove();

      // Създай контейнер за уголемената снимка
      const overlay = document.createElement('div');
      overlay.className = 'enlarged-img';
      overlay.style.position = 'fixed';
      overlay.style.top = 0;
      overlay.style.left = 0;
      overlay.style.width = '100vw';
      overlay.style.height = '100vh';
      overlay.style.background = 'rgba(0,0,0,0.7)';
      overlay.style.display = 'flex';
      overlay.style.alignItems = 'center';
      overlay.style.justifyContent = 'center';
      overlay.style.zIndex = 1000;

      // Създай ново изображение
      const img = document.createElement('img');
      img.src = e.target.src;
      img.alt = e.target.alt;
      img.style.maxWidth = '90vw';
      img.style.maxHeight = '90vh';
      img.style.boxShadow = '0 0 30px #000';
      img.style.borderRadius = '10px';

      overlay.appendChild(img);
      document.body.appendChild(overlay);

      // Клик извън снимката затваря
      overlay.addEventListener('click', function (ev) {
        if (ev.target !== img) overlay.remove();
      });
    }
  });
});
