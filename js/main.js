window.addEventListener("DOMContentLoaded", contentLoaded);

function contentLoaded(event) {
    window.appState = {
        open: false,
        aboutMe: [false, false, false, false],
        projectOne: [false, false, false],
        projectTwo: [false, false, false],
        uiElements: [false, false, false, false, false, false, false, false, false, false, false, false],
        contactInfo: [false, false, false, false],
    };

    const year = new Date().getFullYear();
    document.getElementById("year").innerText = year + '';

    const aboutMe = document.querySelector('.page-about');
    observeElement(aboutMe, window.appState.aboutMe, true);

    const projects = document.querySelectorAll('.project-container');
    observeElement(projects[0], window.appState.projectOne, true);
    observeElement(projects[1], window.appState.projectTwo, true);


    const menuBtn = document.querySelector(".mb-menu-btn input[type='checkbox']");
    menuBtn.onclick = toggleMenu;

    const uiElements = document.querySelector('.ui-list');
    observeElement(uiElements, window.appState.uiElements, true);

    // const contactInfo = document.querySelector('.contact-info');
    // observeElement(contactInfo, window.appState.contactInfo, true);

    const mobileLinks = document.querySelectorAll('.mb-nav a');
    attachListeners(mobileLinks);
}

function observeElement(el, state, isList) {
    if(isList) {
        for(let i = 0; i < el.children.length; i++) {
            const observer = elementObserver(state[i], flag => {
                if(flag) {
                   state[i] = flag;
                   el.children[i].classList.add('slide-in');
                }
            });
            observer.observe(el.children[i]);
        }
    } else {
        const observe = elementObserver(state, flag => {
            if(flag) {
                state = flag;
                el.classList.add('slide-in');

            }
        });
        observe.observe(el);
    }
}

function elementObserver(visible, setVisible) {
    const inter = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting && !visible) {
                setVisible(true);
            }
        })
    }, { threshold: 1 });
    return inter;
}

function toggleMenu() {
    const menu = document.querySelector('.mb-nav');
    const spans = document.querySelector('.menu-btn-group');
    for(let i = 0; i < spans.children.length; i++) {
        spans.children[i].classList.remove('no-animation');
    }
    if(this.checked) {
        menu.style = 'height: 320px; padding-top: 3rem';
    } else {
        menu.style = 'height: 0px; padding-top: 0';
    }
}

/**
 * Attach click listeners to the mobile anchor tags
 *
 * @param elements
 */
function attachListeners(elements) {
    for (let el of elements) {
        el.addEventListener('click', closeMenu);
    }
}

function closeMenu() {
    const menuBtn = document.querySelector(".mb-menu-btn input[type='checkbox']");
    menuBtn.checked = false;
    toggleMenu.call(menuBtn);
}