window.addEventListener("DOMContentLoaded", contentLoaded);

function contentLoaded(event) {
    window.appState = {
        aboutMe: [false, false, false, false]
    };

    const aboutMe = document.querySelector('.page-about');
    observeElement(aboutMe, window.appState.aboutMe, true);
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