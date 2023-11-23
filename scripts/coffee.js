$(document).ready(function () {


    let reloaded = function () {
        let headerSetsCoffee = $('#header-sets-coffee');
        let headerSetsTea = $('#header-sets-tea');
        let headerSetsMan = $('#header-sets-man');
        headerSetsCoffee.addClass('beforeunload-action');
        headerSetsTea.addClass('beforeunload-action');
        headerSetsMan.addClass('beforeunload-action');
        console.log(1);
    }

    let loaded = sessionStorage.getItem('loadedCoffeePageYet');
    if (loaded) {
        reloaded();
    } else {
        sessionStorage.setItem('loadedCoffeePageYet', 'seen');
    }


    //
    $('#lt13-item').click(function () {
        $('#lt13').css('display', 'flex');
    });

    $('#lt13-image').click(function () {
        $('#lt13').css('display', 'flex');
    });

    $('#lt13-cancel').click(function () {
        $('#lt13').css('display', 'none');
    });

    //
    $('#lt2-item').click(function () {
        $('#lt2').css('display', 'flex');
    });

    $('#lt2-image').click(function () {
        $('#lt2').css('display', 'flex');
    });

    $('#lt2-cancel').click(function () {
        $('#lt2').css('display', 'none');
    });

    //
    $('#lt14r-item').click(function () {
        $('#lt14r').css('display', 'flex');
    });

    $('#lt14r-image').click(function () {
        $('#lt14r').css('display', 'flex');
    });

    $('#lt14r-cancel').click(function () {
        $('#lt14r').css('display', 'none');
    });

    //
    $('#lt22-item').click(function () {
        $('#lt22').css('display', 'flex');
    });

    $('#lt22-image').click(function () {
        $('#lt22').css('display', 'flex');
    });

    $('#lt22-cancel').click(function () {
        $('#lt22').css('display', 'none');
    });

    //
    $('#lt10-item').click(function () {
        $('#lt10').css('display', 'flex');
    });

    $('#lt10-image').click(function () {
        $('#lt10').css('display', 'flex');
    });

    $('#lt10-cancel').click(function () {
        $('#lt10').css('display', 'none');
    });

    //
    $('#lt6-item').click(function () {
        $('#lt6').css('display', 'flex');
    });

    $('#lt6-image').click(function () {
        $('#lt6').css('display', 'flex');
    });

    $('#lt6-cancel').click(function () {
        $('#lt6').css('display', 'none');
    });

    //
    $('#lt7r-item').click(function () {
        $('#lt7r').css('display', 'flex');
    });

    $('#lt7r-image').click(function () {
        $('#lt7r').css('display', 'flex');
    });

    $('#lt7r-cancel').click(function () {
        $('#lt7r').css('display', 'none');
    });

    //
    $('#lt3r-item').click(function () {
        $('#lt3r').css('display', 'flex');
    });

    $('#lt3r-image').click(function () {
        $('#lt3r').css('display', 'flex');
    });

    $('#lt3r-cancel').click(function () {
        $('#lt3r').css('display', 'none');
    });

    //
    $('#lt11Bag-item').click(function () {
        $('#lt11Bag').css('display', 'flex');
    });

    $('#lt11Bag-image').click(function () {
        $('#lt11Bag').css('display', 'flex');
    });

    $('#lt11Bag-cancel').click(function () {
        $('#lt11Bag').css('display', 'none');
    });

    //
    $('#lt31-item').click(function () {
        $('#lt31').css('display', 'flex');
    });

    $('#lt31-image').click(function () {
        $('#lt31').css('display', 'flex');
    });

    $('#lt31-cancel').click(function () {
        $('#lt31').css('display', 'none');
    });

    //
    $('#lt14r-item-middle').click(function () {
        $('#lt14r-middle').css('display', 'flex');
    });

    $('#lt14r-image-middle').click(function () {
        $('#lt14r-middle').css('display', 'flex');
    });

    $('#lt14r-middle-cancel').click(function () {
        $('#lt14r-middle').css('display', 'none');
    });

    //
    $('#lt3r-item-middle').click(function () {
        $('#lt3r-middle').css('display', 'flex');
    });

    $('#lt3r-image-middle').click(function () {
        $('#lt3r-middle').css('display', 'flex');
    });

    $('#lt3r-middle-cancel').click(function () {
        $('#lt3r-middle').css('display', 'none');
    });

    document.getElementById('coffee-btn-to-coffees').onclick = function () {
        document.getElementById('coffees').scrollIntoView({behavior: "smooth"});
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