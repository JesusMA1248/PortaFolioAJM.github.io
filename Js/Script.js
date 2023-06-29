const nav = document.querySelector(".menu-bar");

window.addEventListener("scroll", function () {
  nav.classList.toggle("active", window.scrollY > 0);
});

// Obtener el checkbox y los elementos de la lista
const checkbox = document.getElementById("check");
const menuItems = document.querySelectorAll("#menul li a");

// Agregar evento click a cada elemento de la lista
menuItems.forEach((item) => {
  item.addEventListener("click", function (event) {
    checkbox.checked = false;
  });
});

//****************** auto generar texto *********************************

consoleText(
  [
    "Data Analytic",
    "Developer",
    "Full Stack",
    "Designer",
    "Freelancer",
    "Tech Support",
  ],
  "text",
  ["crimson", "indigo", "lime", "gold"]
);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ["#fff"];
  var visible = true;
  var con = document.getElementById("console");
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id);
  target.setAttribute("style", "color:" + colors[0]);
  window.setInterval(function () {
    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount);
      window.setTimeout(function () {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute("style", "color:" + colors[0]);
        letterCount += x;
        waiting = false;
      }, 1000);
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function () {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000);
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount);
      letterCount += x;
    }
  }, 120);
  window.setInterval(function () {
    if (visible === true) {
      con.className = "console-underscore hidden";
      visible = false;
    } else {
      con.className = "console-underscore";

      visible = true;
    }
  }, 400);
}

// texto2
consoleText(
  [
    "Data Analytic",
    "Developer",
    "Full Stack",
    "Designer",
    "Freelancer",
    "Tech Support",
  ],
  "text2",
  ["crimson", "indigo", "lime", "gold"]
);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ["#fff"];
  var visible = true;
  var con = document.getElementById("console");
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id);
  target.setAttribute("style", "color:" + colors[0]);
  window.setInterval(function () {
    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount);
      window.setTimeout(function () {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute("style", "color:" + colors[0]);
        letterCount += x;
        waiting = false;
      }, 1000);
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function () {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000);
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount);
      letterCount += x;
    }
  }, 120);
  window.setInterval(function () {
    if (visible === true) {
      con.className = "console-underscore hidden";
      visible = false;
    } else {
      con.className = "console-underscore";

      visible = true;
    }
  }, 400);
}

// carusel de skills

const carousel = document.querySelector(".carousel");
const slidesContainer = carousel.querySelector(".slides-container");
const slides = carousel.querySelectorAll(".slide");
const prevBtn = carousel.querySelector(".prev-btn");
const nextBtn = carousel.querySelector(".next-btn");

let currentIndex = 0;
let timer = null;

// Función para mostrar el slide actual
function showSlide(index) {
  // Calcular el desplazamiento
  const slideWidth = slides[0].offsetWidth;
  const displacement = -slideWidth * index;

  // Aplicar el desplazamiento a los slides
  slidesContainer.style.transform = `translateX(${displacement}px)`;

  // Ocultar todos los slides
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  // Mostrar el slide actual
  slides[index].classList.add("active");
}

// Mostrar el primer slide al cargar la página
showSlide(currentIndex);

// Función para avanzar al siguiente slide
function nextSlide() {
  currentIndex++;
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
  showSlide(currentIndex);
}

// Función para retroceder al slide anterior
function prevSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }
  showSlide(currentIndex);
}

// Evento click para el botón siguiente
nextBtn.addEventListener("click", nextSlide);

// Evento click para el botón anterior
prevBtn.addEventListener("click", prevSlide);

// Función para iniciar el slide automático

function startSlideShow() {
  timer = setInterval(nextSlide, 3000);
}

// Función para detener el slide automático
function stopSlideShow() {
  clearInterval(timer);
}

// Iniciar el slide automático al cargar la página
startSlideShow();

// Detener el slide automático al pasar el mouse por encima del carrusel
carousel.addEventListener("mouseenter", stopSlideShow);

// Reiniciar el slide automático al quitar el mouse del carrusel
carousel.addEventListener("mouseleave", startSlideShow);

// ************desplazamiento del nav bar****************
// Este código asegura que el desplazamiento suave funcione en todos los navegadores
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
