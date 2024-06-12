let isExpanded = false;

function scrollCloud() {
    var position = window.scrollY;
    $('.cloud').css('background-position', position + 'px 0');
    console.log(position);
}

function expandMenu() {
    isExpanded = !isExpanded;
    if(isExpanded == true) {
        $('header').css('height', '300px');
        $('header').css('padding-top', '50px');
        $('header a').css('display', 'block');
        console.log('expend');
    }
    else {
        $('header').css('height', '80px');
        $('header').css('padding-top', '0');
        $('header a').css('display', 'none');
    }    
 }


$(document).ready(function () {
    document.addEventListener('scroll', scrollCloud)
    document.getElementById('menu_button').addEventListener('click', expandMenu)
});

window.onresize = function () {
    if(window.innerWidth >= 768) {
        $('header a').css('display', 'block');
    }
    else {
        $('header a').css('display', 'none');
        $('header').css('height', '80px');
    }
}
