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

    //
    $('#lt46-item').click(function () {
        $('#lt46').css('display', 'flex');
    });

    $('#lt46-image').click(function () {
        $('#lt46').css('display', 'flex');
    });

    $('#lt46-cancel').click(function () {
        $('#lt46').css('display', 'none');
    });

    //
    $('#lt5gr-item').click(function () {
        $('#lt5gr').css('display', 'flex');
    });

    $('#lt5gr-image').click(function () {
        $('#lt5gr').css('display', 'flex');
    });

    $('#lt5gr-cancel').click(function () {
        $('#lt5gr').css('display', 'none');
    });

    //
    $('#lt3gr-item').click(function () {
        $('#lt3gr').css('display', 'flex');
    });

    $('#lt3gr-image').click(function () {
        $('#lt3gr').css('display', 'flex');
    });

    $('#lt3gr-cancel').click(function () {
        $('#lt3gr').css('display', 'none');
    });

    //
    $('#lt40-item').click(function () {
        $('#lt40').css('display', 'flex');
    });

    $('#lt40-image').click(function () {
        $('#lt40').css('display', 'flex');
    });

    $('#lt40-cancel').click(function () {
        $('#lt40').css('display', 'none');
    });

    //
    $('#lt48-item').click(function () {
        $('#lt48').css('display', 'flex');
    });

    $('#lt48-image').click(function () {
        $('#lt48').css('display', 'flex');
    });

    $('#lt48-cancel').click(function () {
        $('#lt48').css('display', 'none');
    });

    //
    $('#lt1gr-item').click(function () {
        $('#lt1gr').css('display', 'flex');
    });

    $('#lt1gr-image').click(function () {
        $('#lt1gr').css('display', 'flex');
    });

    $('#lt1gr-cancel').click(function () {
        $('#lt1gr').css('display', 'none');
    });

    //
    $('#lt2gr-item').click(function () {
        $('#lt2gr').css('display', 'flex');
    });

    $('#lt2gr-image').click(function () {
        $('#lt2gr').css('display', 'flex');
    });

    $('#lt2gr-cancel').click(function () {
        $('#lt2gr').css('display', 'none');
    });

    //
    $('#lt4gr-item').click(function () {
        $('#lt4gr').css('display', 'flex');
    });

    $('#lt4gr-image').click(function () {
        $('#lt4gr').css('display', 'flex');
    });

    $('#lt4gr-cancel').click(function () {
        $('#lt4gr').css('display', 'none');
    });

    //
    $('#ltms2-item').click(function () {
        $('#ltms2').css('display', 'flex');
    });

    $('#ltms2-image').click(function () {
        $('#ltms2').css('display', 'flex');
    });

    $('#ltms2-cancel').click(function () {
        $('#ltms2').css('display', 'none');
    });

    //
    $('#lt25Bag-item').click(function () {
        $('#lt25Bag').css('display', 'flex');
    });

    $('#lt25Bag-image').click(function () {
        $('#lt25Bag').css('display', 'flex');
    });

    $('#lt25Bag-cancel').click(function () {
        $('#lt25Bag').css('display', 'none');
    });

    //
    $('#lt3gr-item-middle').click(function () {
        $('#lt3gr-middle').css('display', 'flex');
    });

    $('#lt3gr-image-middle').click(function () {
        $('#lt3gr-middle').css('display', 'flex');
    });

    $('#lt3gr-middle-cancel').click(function () {
        $('#lt3gr-middle').css('display', 'none');
    });

    //
    $('#lt4gr-item-middle').click(function () {
        $('#lt4gr-middle').css('display', 'flex');
    });

    $('#lt4gr-image-middle').click(function () {
        $('#lt4gr-middle').css('display', 'flex');
    });

    $('#lt4gr-middle-cancel').click(function () {
        $('#lt4gr-middle').css('display', 'none');
    });


    document.getElementById('tea-btn-to-tea').onclick = function () {
        document.getElementById('tea').scrollIntoView({behavior: "smooth"});
    }

    //

    let arrowTop = document.getElementById("arrow-top");

    window.onscroll = function() {
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