document.getElementsByTagName('body')[0].style.overflow = 'hidden';

$(document).ready(function () {

    const loader = $('#loader');
    const content = $('#content');

    $(window).on('load', function() {
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

    document.getElementById('main-btn-to-collection').onclick = function () {
        document.getElementById('main-collection').scrollIntoView({behavior: "smooth"});
    }

    document.getElementById('btn-to-main-about-company').onclick = function () {
        document.getElementById('about-company').scrollIntoView({behavior: "smooth"});
    }

    document.getElementById('btn-to-main-about-shop').onclick = function () {
        document.getElementById('shop').scrollIntoView({behavior: "smooth"});
    }

    document.getElementById('btn-to-main-about-reviews').onclick = function () {
        document.getElementById('reviews').scrollIntoView({behavior: "smooth"});
    }

});