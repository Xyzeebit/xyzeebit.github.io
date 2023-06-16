window.addEventListener("DOMContentLoaded", contentLoaded);

function contentLoaded(event) {
    window.appState = {
        projectsHeader: [false, false, false, false],
        projectsList: [false, false, false, false, false, false, false, false, false, false],
        uiList: [false, false, false, false, false, false, false, false, false, false,
            false, false, false, false, false, false, false, false, false, false,
            false, false, false, false, false, false, false, false, false, false,
            false, false, false, false, false, false, false, false, false, false],
        contacts: [false, false, false, false],
    };

    const projectsHeader = document.querySelector('.header');
    if(projectsHeader) {
        observeElement(projectsHeader, window.appState.projectsHeader, true, 2);
    }

    const projectsList = document.querySelector('.list');
    if(projectsList) {
        observeElement(projectsList, window.appState.projectsList, true);
    }

    const uiList = document.querySelector('.ui-list');
    if(uiList) {
        observeElement(uiList, window.appState.uiList, true);
    }

    const contacts = document.querySelector('.contact-info');
    if(contacts) {
        observeElement(contacts, window.appState.contacts, true);
    }
}

function observeElement(el, state, isList, skipElement) {
    if(isList) {
        for(let i = 0; i < el.children.length; i++) {
            if (skipElement == i) return;
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