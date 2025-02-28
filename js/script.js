$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load',function(){

        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if($(window).scrollTop() > 0){
            $('.scroll-top').show();
        }else{
            $('.scroll-top').hide();
        }

        // scroll spy

        $('section').each(function(){
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let id = $(this).attr('id');
            let top = $(window).scrollTop();

            if(top > offset && top < offset + height){
                $('.navbar ul li a').removeClass('active')
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
        
    });

});

// Custom scroll bar

window.onscroll = function() {
    updateScrollBar();
};

function updateScrollBar() {
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollPercentage = (scrollTop / scrollHeight) * 100;
    
    document.getElementById("scroll-progress").style.width = scrollPercentage + "%";
}

