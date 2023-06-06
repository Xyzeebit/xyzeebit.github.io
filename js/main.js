window.addEventListener("DOMContentLoaded", contentLoaded);

function contentLoaded(event) {
    window.appState = {
        open: false,
        aboutMe: [false, false, false, false],
    };

    const aboutMe = document.querySelector('.page-about');
    observeElement(aboutMe, window.appState.aboutMe, true);

    const menuBtn = document.querySelector(".mb-menu-btn input[type='checkbox']");
    menuBtn.onclick = toggleMenu;
}

function observeElement(el, state, isList) {
    if(isList) {
        for(let i = 0; i < el.children.length; i++) {
            const observer = elementObserve(state[i], flag => {
                if(flag) {
                   state[i] = flag;
                   el.children[i].classList.add('slide-in');
                }
            });
            observer.observe(el.children[i]);
        }
    } else {
        const observe = elementObserve(state, flag => {
            if(flag) {
                state = flag;
                el.classList.add('slide-in');

            }
        });
        observe.observe(el);
    }
}

function elementObserve(visible, setVisible) {
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
        menu.style = 'height: 350px; padding-top: 3rem';
    } else {
        menu.style = 'height: 0px; padding-top: 0';
    }
}