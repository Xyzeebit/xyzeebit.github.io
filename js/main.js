const state = {
  menuIsOpen: false,
};

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

const menuButton = document.getElementById('nav-button');
menuButton.addEventListener('click', toggleMenu);

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
    closeMenu(menuButton, menuContainer)
  } else {
    openMenu(menuButton, menuContainer)
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
