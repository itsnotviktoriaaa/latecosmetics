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
    $('#ltmen5-item').click(function () {
        $('#ltmen5').css('display', 'flex');
    });

    $('#ltmen5-image').click(function () {
        $('#ltmen5').css('display', 'flex');
    });

    $('#ltmen5-cancel').click(function () {
        $('#ltmen5').css('display', 'none');
    });

    //
    $('#ltmen6-item').click(function () {
        $('#ltmen6').css('display', 'flex');
    });

    $('#ltmen6-image').click(function () {
        $('#ltmen6').css('display', 'flex');
    });

    $('#ltmen6-cancel').click(function () {
        $('#ltmen6').css('display', 'none');
    });

    //
    $('#ltmen7-item').click(function () {
        $('#ltmen7').css('display', 'flex');
    });

    $('#ltmen7-image').click(function () {
        $('#ltmen7').css('display', 'flex');
    });

    $('#ltmen7-cancel').click(function () {
        $('#ltmen7').css('display', 'none');
    });

    //
    $('#ltmen4-item').click(function () {
        $('#ltmen4').css('display', 'flex');
    });

    $('#ltmen4-image').click(function () {
        $('#ltmen4').css('display', 'flex');
    });

    $('#ltmen4-cancel').click(function () {
        $('#ltmen4').css('display', 'none');
    });

    //
    $('#ltmen2-item').click(function () {
        $('#ltmen2').css('display', 'flex');
    });

    $('#ltmen2-image').click(function () {
        $('#ltmen2').css('display', 'flex');
    });

    $('#ltmen2-cancel').click(function () {
        $('#ltmen2').css('display', 'none');
    });

    //
    $('#ltmen1-item').click(function () {
        $('#ltmen1').css('display', 'flex');
    });

    $('#ltmen1-image').click(function () {
        $('#ltmen1').css('display', 'flex');
    });

    $('#ltmen1-cancel').click(function () {
        $('#ltmen1').css('display', 'none');
    });

    //
    $('#ltmen3-item').click(function () {
        $('#ltmen3').css('display', 'flex');
    });

    $('#ltmen3-image').click(function () {
        $('#ltmen3').css('display', 'flex');
    });

    $('#ltmen3-cancel').click(function () {
        $('#ltmen3').css('display', 'none');
    });

    //
    $('#ltmen1-item-middle').click(function () {
        $('#ltmen1-middle').css('display', 'flex');
    });

    $('#ltmen1-image-middle').click(function () {
        $('#ltmen1-middle').css('display', 'flex');
    });

    $('#ltmen1-middle-cancel').click(function () {
        $('#ltmen1-middle').css('display', 'none');
    });

    document.getElementById('man-btn-to-man').onclick = function () {
        document.getElementById('man').scrollIntoView({behavior: "smooth"});
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