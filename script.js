// Función para el desplazamiento suave al hacer clic en un enlace de navegación
function smoothScroll(target, duration) {
    const targetElement = document.querySelector(target);
    const targetPosition = targetElement.getBoundingClientRect().top;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;
  
    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const scrollAmount = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, scrollAmount);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }
  
    // Función de aceleración para el desplazamiento suave
    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }
  
    requestAnimationFrame(animation);
  }
  
  // Evento para desplazamiento suave al hacer clic en enlaces de navegación
  document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav a");
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const target = link.getAttribute("href");
        const duration = 1000; // Duración en milisegundos (ajústalo según prefieras)
        smoothScroll(target, duration);
      });
    });
  });
  

  // Efecto de realce al pasar el mouse sobre la tarjeta
document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");
  
    cards.forEach((card) => {
      card.addEventListener("mouseover", function () {
        this.classList.add("shadow-lg"); // Agregar la sombra de Bootstrap al pasar el mouse sobre la tarjeta
      });
  
      card.addEventListener("mouseout", function () {
        this.classList.remove("shadow-lg"); // Remover la sombra de Bootstrap cuando el mouse deja la tarjeta
      });
    });
  });
  