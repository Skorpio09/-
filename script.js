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
  
  // Уголемяване на снимка в галерията с надпис и навигация със стрелки
document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.querySelector('.gallery');
  if (!gallery) return;

  const images = Array.from(gallery.querySelectorAll('img'));

  gallery.addEventListener('click', function (e) {
    if (e.target.tagName === 'IMG') {
      showEnlarged(images.indexOf(e.target));
    }
  });

  function showEnlarged(index) {
    // Премахни предишна уголемена снимка
    const old = document.querySelector('.enlarged-img');
    if (old) old.remove();

    // Създай оверлей
    const overlay = document.createElement('div');
    overlay.className = 'enlarged-img';
    overlay.style.position = 'fixed';
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.background = 'rgba(0,0,0,0.85)';
    overlay.style.display = 'flex';
    overlay.style.flexDirection = 'column';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.zIndex = 1000;

    // Създай снимка
    const img = document.createElement('img');
    img.src = images[index].src;
    img.alt = images[index].alt;
    img.style.maxWidth = '96vw';
    img.style.maxHeight = '80vh';
    img.style.boxShadow = '0 0 40px #000';
    img.style.borderRadius = '12px';
    img.style.background = '#fff';

    // Надпис
    const caption = document.createElement('div');
    caption.textContent = images[index].alt;
    caption.style.color = '#fff';
    caption.style.fontSize = '2rem';
    caption.style.marginTop = '18px';
    caption.style.textAlign = 'center';
    caption.style.textShadow = '0 2px 8px #000';

    // Стрелки
    const left = document.createElement('span');
    left.textContent = '←';
    left.style.position = 'absolute';
    left.style.left = '30px';
    left.style.top = '50%';
    left.style.transform = 'translateY(-50%)';
    left.style.fontSize = '3rem';
    left.style.color = '#fff';
    left.style.cursor = 'pointer';
    left.style.userSelect = 'none';

    const right = document.createElement('span');
    right.textContent = '→';
    right.style.position = 'absolute';
    right.style.right = '30px';
    right.style.top = '50%';
    right.style.transform = 'translateY(-50%)';
    right.style.fontSize = '3rem';
    right.style.color = '#fff';
    right.style.cursor = 'pointer';
    right.style.userSelect = 'none';

    // Добави стрелки само ако има повече от 1 снимка
    if (images.length > 1) {
      overlay.appendChild(left);
      overlay.appendChild(right);
    }

    overlay.appendChild(img);
    overlay.appendChild(caption);
    document.body.appendChild(overlay);

    // Клик извън снимката затваря
    overlay.addEventListener('click', function (ev) {
      if (ev.target === overlay) overlay.remove();
    });

    // Навигация със стрелки
    left.addEventListener('click', function (ev) {
      ev.stopPropagation();
      showEnlarged((index - 1 + images.length) % images.length);
    });
    right.addEventListener('click', function (ev) {
      ev.stopPropagation();
      showEnlarged((index + 1) % images.length);
    });

    // Клавиатурни стрелки
    function keyHandler(ev) {
      if (!document.body.contains(overlay)) {
        document.removeEventListener('keydown', keyHandler);
        return;
      }
      if (ev.key === 'ArrowLeft') {
        showEnlarged((index - 1 + images.length) % images.length);
      } else if (ev.key === 'ArrowRight') {
        showEnlarged((index + 1) % images.length);
      } else if (ev.key === 'Escape') {
        overlay.remove();
      }
    }
    document.addEventListener('keydown', keyHandler);

    // Затвори при клик на кръстче (по желание)
    // Може да добавиш бутон за затваряне, ако искаш
  }
});
