document.addEventListener("DOMContentLoaded", function () {
  function typeEffect(element, text, speed, callback) {
    let i = 0;
    function type() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, speed);
      } else if (callback) {
        setTimeout(callback, 500); // Pequena pausa antes de iniciar o próximo texto
      }
    }
    type();
  }

  const nameElement = document.getElementById("typing-name");
  const professionElement = document.getElementById("typing-profession");

  typeEffect(nameElement, "Taylor Souza", 100, function () {
    typeEffect(
      professionElement,
      "Estudante de Desenvolvimento de Sistemas",
      50
    );
  });
});

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    const offset = 80; // Altura da navbar

    window.scrollTo({
      top: targetElement.offsetTop - offset,
      behavior: "smooth",
    });
  });
});
