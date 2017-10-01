$(document).ready(function(){
    
    var noteCountContainer = $('nav .note-count'),
        slideContainer = $('.intro-slider li'),
        current = 0,
        slideNav = $('.slide-nav li'),
        slideCount = 5,
        down_x = null,
        up_x = null;
    
    //move page back when clicking on a nav item
    $("nav li a").click(function(){
        $('#nav').removeClass('active-flyout');
    });
    
    $("label.nav-tap").click(function(){
        $('#nav').toggleClass('active-flyout');
    });
    
    $("#page").on('swipeleft', function(){
        $('#nav').removeClass('active-flyout');
    });
    
    //how this works swipe left event
    $('.intro-slide-wrapper').on('swipeleft', function(){     
            var
                $current = ($('.intro-slide-wrapper .intro-slider li.active-slide')?  $('.intro-slide-wrapper .intro-slider li.active-slide') : $('.intro-slide-wrapper .intro-slider li:first')),            
                $next = (($current.next().length) ? (($current.next().hasClass('active-slide')) ? $('.intro-slide-wrapper .intro-slider li:first') : $current.next()) : $('.intro-slide-wrapper .intro-slider li:first')),
        //slide indicator
                $imageNav = $('.slide-nav li.active-nav') ? $('.slide-nav li.active-nav'): $('.slide-nav li:first'),
                $imageNavNext = (($imageNav.next().length) ? (($imageNav.next().hasClass('active-nav')) ? $('.slide-nav li:first') : $imageNav.next()) : $('.slide-nav li:first'));

        //switch class on slides to display
        $current.removeClass('active-slide');
        $next.addClass('active-slide');
        
        //if the slide indicator exists switch class
        if($imageNav){
            $imageNav.removeClass('active-nav');
            $imageNavNext.addClass('active-nav');
        }
        
        $('.slide-6.active-slide').parents('.intro-slide-wrapper').siblings('.welcome-header').children('.green-btn').hide();
    });
    
    //how this works swipe right event
    $('.intro-slide-wrapper').on('swiperight', function(){     
        var
            $current = ($('.intro-slide-wrapper .intro-slider li.active-slide')?  $('.intro-slide-wrapper .intro-slider li.active-slide') : $('.intro-slide-wrapper .intro-slider li:first')),            
            $prev = (($current.prev().length) ? (($current.prev().hasClass('active-slide')) ? $('.intro-slide-wrapper .intro-slider li:first') : $current.prev()) : $('.intro-slide-wrapper .intro-slider li:first')),
        //slide indicator
            $imageNav = $('.slide-nav li.active-nav') ? $('.slide-nav li.active-nav'): $('.slide-nav li:first'),
            $imageNavPrev = (($imageNav.prev().length) ? (($imageNav.prev().hasClass('active-nav')) ? $('.slide-nav li:first') : $imageNav.prev()) : $('.slide-nav li:first'));

        //switch class on slides to display
        $current.removeClass('active-slide');
        $prev.addClass('active-slide');
        
        //if the slide indicator exists switch class
        if($imageNav){
            $imageNav.removeClass('active-nav');
            $imageNavPrev.addClass('active-nav');
        }
        $('.green-btn').show();
    });
    
    //Change notification menu icon
    function checkNoteText(callback){
        if ($('span.note-count').text().trim().length) {
            $('span.note-count').addClass("active");
        }
        callback();
    }

    checkNoteText(function(){
        if (noteCountContainer.hasClass('active')){
            noteCountContainer.parent('i').removeClass('icon-comment');
            noteCountContainer.parent('i').addClass('icon-circle');
        }
    });
    
});

/*function messageBox (){
    var infoBox = $('.infobox');
    var closeInfo = $('.close-infobox');
    infoBox.addClass('activated');
    
    closeInfo.click(function(e){
        e.preventDefault();
        infoBox.removeClass('activated');
    });
    
    setTimeout(function(){
       infoBox.removeClass('activated');
    }, 5000);
}*/