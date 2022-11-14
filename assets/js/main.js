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

// CAROUSEL
// var splide = new Splide( '.splide', {
//     perPage: 3,
//     type   : 'loop',
//     perMove: 1,
// });
// if (document.body.clientWidth < 1000) {
//     var splide = new Splide( '.splide', {
//         perPage: 2,
//         type   : 'loop',
//         perMove: 1,
//     });
// }
// if (document.body.clientWidth < 680) {
//     var splide = new Splide( '.splide', {
//         perPage: 1,
//         type   : 'loop',
//         perMove: 1,
//     });
// }
// splide.mount();
                            
                            