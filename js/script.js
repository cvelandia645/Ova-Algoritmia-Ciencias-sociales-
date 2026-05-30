let getSideBar = document.querySelector(".sidebar");
let getLoader = document.querySelector(".loader");
let getToggle = document.querySelectorAll(".toggle");
let getHeart = document.querySelector(".heart");
let getSidebarLink = document.querySelectorAll(".sidebar-link");

if (getLoader) {
  window.addEventListener("load", () => {
    getLoader.remove();
  });
}

if (getHeart) {
  getHeart.addEventListener("click", () => {
    if (getHeart.classList.contains("fa-regular")) {
      getHeart.classList.replace("fa-regular", "fa-solid");
      getHeart.style.color = "red";
    } else {
      getHeart.classList.replace("fa-solid", "fa-regular");
      getHeart.style.color = "#888";
    }
  });
}

if (getToggle) {
  getToggle.forEach((item) => {
    item.addEventListener("click", () => {
      if (item.classList.contains("left")) {
        item.classList.remove("left");
      } else {
        item.classList.add("left");
      }
    });
  });
}

if (getSidebarLink) {
  getSidebarLink.forEach((item) => {
    if (window.location.href.includes(item.getAttribute("href").replace("./", ""))) {
      item.classList.add("active");
    }
  });
}
  

// celulares
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const sidebarUl = document.querySelector(".sidebar ul");

  if (menuToggle && sidebarUl) {
    menuToggle.addEventListener("click", function (e) {
      e.stopPropagation(); // Evita que el menú se cierre inmediatamente al hacer clic
      sidebarUl.classList.toggle("open");
    });

    // Cierra el menú automáticamente si el estudiante toca cualquier otra parte de la pantalla
    document.addEventListener("click", function (e) {
      if (!sidebarUl.contains(e.target) && e.target !== menuToggle) {
        sidebarUl.classList.remove("open");
      }
    });
  }
});