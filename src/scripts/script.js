document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".nav");
  const servicesLink = document.getElementById("services");
  const dropdownMenu = document.querySelector(".nav__dropdown");
  const arrow = document.querySelector(".nav__link-arrow");

  // Funkcja do zamykania menu
  function closeMenu() {
    nav.classList.remove("active");
    hamburger.classList.remove("open");
  }

  // Toggle całego menu nawigacyjnego
  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("open");
    nav.classList.toggle("active");
  });

  // Toggle dropdown menu
  servicesLink.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation(); // Zapobiega propagacji kliknięcia do document

    dropdownMenu.classList.toggle("visible");
    if (dropdownMenu.classList.contains("visible")) {
      arrow.innerHTML = "&#9652;"; // Strzałka w górę
    } else {
      arrow.innerHTML = "&#9662;"; // Strzałka w dół
    }
  });

  // Zamknij menu i dropdown, jeśli kliknięto poza nimi
  document.addEventListener("click", (event) => {
    if (
      !nav.contains(event.target) &&
      !hamburger.contains(event.target) &&
      nav.classList.contains("active")
    ) {
      closeMenu();
    }

    if (
      !dropdownMenu.contains(event.target) &&
      dropdownMenu.classList.contains("visible")
    ) {
      dropdownMenu.classList.remove("visible");
      arrow.innerHTML = "&#9662;"; // Strzałka w dół
    }
  });

  // Zapobiegaj zamykaniu menu przy kliknięciu wewnątrz nawigacji
  nav.addEventListener("click", (event) => {
    event.stopPropagation();
  });

  // Zapobiegaj zamykaniu dropdown przy kliknięciu wewnątrz dropdownu
  dropdownMenu.addEventListener("click", (event) => {
    event.stopPropagation();
  });
});
