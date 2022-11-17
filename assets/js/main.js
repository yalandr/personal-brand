// ANIMATION ON SCROLL
let animatedItems = document.querySelectorAll('.animated');

if (animatedItems.length) {
    function fadeInOnScroll() {
        for (i = 0; i < animatedItems.length; i++) {
            let animatedItem = animatedItems[i];
            let animatedItemHeight = animatedItem.offsetHeight;
            let animatedItemOffset = offset(animatedItem).top;
            let animationStart = 2;

            let animatedItemPoint = window.innerHeight - animatedItemHeight / animationStart;

            if (animatedItemHeight > window.innerHeight) {
                animatedItemPoint = window.innerHeight - window.innerHeight / animationStart;
            }

            if ((pageYOffset > animatedItemOffset - animatedItemPoint) && pageYOffset < (animatedItemOffset + animatedItemHeight)) {
                animatedItem.classList.add('fade-in');
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
}

window.addEventListener('scroll', fadeInOnScroll);

// MENU
const menuBtn = document.querySelector('.menu-btn-img');
const navMenu = document.querySelector('.navigation');
const navMenuMobile = document.querySelector('.navigation-mobile');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle("opened");
    navMenu.classList.toggle("opened");
    navMenuMobile.classList.toggle("opened");
})

// NAVIGATION
const scrollToElem = (elem) => {
    document.querySelector(elem).scrollIntoView({behavior:"smooth"});
}

// FORM SENDING
const form = document.getElementById('form');
const messageSuccess = document.querySelector('.message-success');
const messageError = document.querySelector('.message-error');
form.addEventListener('submit', formSend);

async function formSend(e) {
    e.preventDefault();

    let error = formValidate(form);

    let formData = new FormData(form);

    if (error === 0) {
        form.classList.add('sending');
        let response = await fetch('send.php', {
            method: 'POST',
            body: formData
        });
        if (response.ok) {
            letresult = await response.json();
            // alert(result.message);
            form.reset();
            form.classList.remove('sending');
            messageSuccess.classList.add('visible');
        } else {
            // alert('fetch error!');
            form.classList.remove('sending');
            messageError.classList.add('visible');
            form.reset();
        }
    } else {
        alert('pre-fetch error!')
    }
}

function formValidate(form) {
    let error = 0;
    let requiredFields = document.querySelectorAll('.required');

    for (let i = 0; i < requiredFields.length; i++) {
        const input = requiredFields[i];
        formRemoveError(input);

        if (input.value === '') {
            formAddError(input);
            error++;
        }

        if (input.classList.contains('email')) {
            if (emailTest(input)) {
                formAddError(input);
                error++;
            } else {
                if (input.value === '') {
                    formAddError(input);
                    error++;
                }
            }
        }
    }
    
    return error;
}

function formAddError(input) {
    input.classList.add('error');
}

function formRemoveError(input) {
    input.classList.remove('error');
}

function emailTest(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}
                            
                            