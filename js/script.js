
function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("myModal").style.display = "block";
}

// Contact Form Alert
function contactMe() {
    document.getElementById("WarningMessage").style.display = "block";
}

// Counter Section Scripts

function inVisible(element) {
    //Checking if the element is
    //visible in the viewport
    var WindowTop = $(window).scrollTop();
    var WindowBottom = WindowTop + $(window).height();
    var ElementTop = element.offset().top;
    var ElementBottom = ElementTop + element.height();
    //animating the element if it is
    //visible in the viewport
    if ((ElementBottom <= WindowBottom) && ElementTop >= WindowTop)
        animate(element);
}

function animate(element) {
    //Animating the element if not animated before
    if (!element.hasClass('ms-animated')) {
        var maxval = element.data('max');
        var html = element.html();
        element.addClass("ms-animated");
        $({
            countNum: element.html()
        }).animate({
            countNum: maxval
        }, {
            //duration 5 seconds
            duration: 5000,
            easing: 'linear',
            step: function() {
                element.html(Math.floor(this.countNum) + html);
            },
            complete: function() {
            element.html(this.countNum + html);
            }
        });
    }
}

//When the document is ready
$(function() {
    //This is triggered when the
    //user scrolls the page
    $(window).scroll(function() {
    //Checking if each items to animate are 
    //visible in the viewport        
        $(".counter-text[data-max]").each(function() {
            inVisible($(this));
        });
    })
    
    var sideMenuOverlay = `<div class="overlay hide"><div/>`
    $('.global-wrap').append(sideMenuOverlay);
});

// sideMenu Overlay
$('.navbar-toggler, .navbar-collapse').mouseover(function (e) {
    $('.navbar-collapse').addClass('show');
    $('.overlay').addClass('show');
    $('.navbar-toggler').removeClass('collapsed');
});
$('.navbar-collapse').mouseout(function(e){
    $('.navbar-collapse').removeClass('show');
    $('.overlay').removeClass('show');
    $('.navbar-toggler').addClass('collapsed');
});