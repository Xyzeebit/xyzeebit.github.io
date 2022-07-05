const state = {
  menuIsOpen: false,
};

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  spaceBetween: 20,
  effect: "cube",
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
});

function resetOverflow(el) {
  el.style.height = "100%";
  el.style.overflow = "auto";
}

function closeMenu(menuButton, header) {
    const body = document.querySelector("body");

    setTimeout(function () {
      menuButton.classList.remove("open-menu");
    }, 400);

    menuButton.classList.toggle("rotate-menu");
    state.menuIsOpen = false;
    header.classList.remove("expand");
    state.menuIsOpen = false;
    resetOverflow(body);
}

function openMenu(menuButton, header) {
    const body = document.querySelector("body");

    menuButton.classList.add("open-menu");
    setTimeout(function () {
      menuButton.classList.toggle("rotate-menu");
    }, 400);
    state.menuIsOpen = true;
    header.classList.add("expand");
    body.style.height = "100vh";
    body.style.overflow = "hidden";
}

function toggleMenu(evt) {
  const menuContainer = document.getElementById("header");

  if (state.menuIsOpen) {
    closeMenu(evt, menuContainer)
  } else {
    openMenu(evt, menuContainer)
  }
}

(() => {
  const menuLinks = document.querySelectorAll(".menu a");
  menuLinks.forEach((element) => {
    element.addEventListener("click", () => {
        const navButton = document.querySelector(".nav-button");
        const menuContainer = document.getElementById("header");
        closeMenu(navButton, menuContainer);
    });
  });
  
})();
