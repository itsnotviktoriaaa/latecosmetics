const loader = $('#loader');
document.getElementsByTagName('body')[0].style.overflow = 'hidden';

//
let mediaQuery = window.matchMedia("(max-width: 882px)");

function handleScreenSizeChange(mediaQuery) {
    if (mediaQuery.matches) {
        loader.hide();
        document.getElementsByTagName('body')[0].style.overflow = 'auto';
        document.getElementById('main-text').classList.add('text-block');
        document.getElementById('main-product').classList.add('image-block');
    } else {
        loader.show();
    }
}

handleScreenSizeChange(mediaQuery);
mediaQuery.addListener(handleScreenSizeChange);

//

$(document).ready(function () {

    let reloaded = function () {
        let headerSetsCoffee = $('#header-sets-coffee');
        let headerSetsTea = $('#header-sets-tea');
        let headerSetsMan = $('#header-sets-man');
        headerSetsCoffee.addClass('beforeunload-action');
        headerSetsTea.addClass('beforeunload-action');
        headerSetsMan.addClass('beforeunload-action');
    }

    let loaded = sessionStorage.getItem('loadedCoffeePageYet');
    if (loaded) {
        reloaded();
    } else {
        sessionStorage.setItem('loadedCoffeePageYet', 'seen');
    }

    const content = $('#content');

    $(window).on('load', function () {
        loader.hide();
        content.show();
        document.getElementsByTagName('body')[0].style.overflow = 'auto';
        document.getElementById('main-text').classList.add('text-block');
        document.getElementById('main-product').classList.add('image-block');
        new WOW().init();
    });

    $('.multiple-items').slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1250,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ],
        dotsClass: "my-dots",
        // autoplay: true
    });

    document.getElementById('btn-to-main-about-company').onclick = function () {
        document.getElementById('about-company').scrollIntoView({behavior: "smooth"});
    }

    document.getElementById('btn-to-main-about-shop').onclick = function () {
        document.getElementById('shop').scrollIntoView({behavior: "smooth"});
    }

    document.getElementById('btn-to-main-about-reviews').onclick = function () {
        document.getElementById('reviews').scrollIntoView({behavior: "smooth"});
    }

    //

    let arrowTop = document.getElementById("arrow-top");

    window.onscroll = function () {
        showScrollBtn();
    };

    function showScrollBtn() {

        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            arrowTop.style.display = "flex";
        } else {
            arrowTop.style.display = "none";
        }
    }

    arrowTop.onclick = function () {
        scrollToTop();
    }

    function scrollToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

});