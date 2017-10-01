;(function($, window, document, undefined) {

var
$container = $('body');
$eTitle = $('.expandable-title'),
$scan = $('.expandable-title .view-scan'),
$rGallery = $('.view-scan-gallery .receipts li'),
t = 300; // animation duration


// attach event listeners
$eTitle.on('click', tapExpandable);
$scan.on('click tap', viewScan);
$rGallery.on('click swipeleft', receiptGalleryForwards);
$rGallery.on('swiperight', receiptGalleryBackwards);

//make sure there is no gallery class when it's not open
$('#content-wrapper').removeClass('gallery-open');

function viewScan(e) { // start view scan gallery
    e.preventDefault();
    e.stopPropagation();
   
    $('.view-scan-gallery').fadeIn();
    $('body').css('overflow', 'hidden');
    //add gallery class when open to remove top padding from content-wrapper
    $('#content-wrapper').addClass('gallery-open');
    
}

function receiptGalleryForwards(e){
    
    var
        //current slide that has active class or first slide in set
        $current = ($('.view-scan-gallery .receipts li.active-image')?  $('.view-scan-gallery .receipts li.active-image') : $('.view-scan-gallery .receipts li:first')),            
        $next = (($current.next().length) ? (($current.next().hasClass('active-image')) ? $('.view-scan-gallery .receipts li:first') : $current.next()) : $('.view-scan-gallery .receipts li:first')),
        //slide indicator
        $imageNav = $('.slide-nav li.active-nav') ? $('.slide-nav li.active-nav'): $('.slide-nav li:first'),
        $imageNavNext = (($imageNav.next().length) ? (($imageNav.next().hasClass('active-nav')) ? $('.slide-nav li:first') : $imageNav.next()) : $('.slide-nav li:first'));

        //switch class on slides to display
        $current.removeClass('active-image');
        $next.addClass('active-image');
        
        //if the slide indicator exists switch class
        if($imageNav){
            $imageNav.removeClass('active-nav');
            $imageNavNext.addClass('active-nav');
        }
    
}

function receiptGalleryBackwards(e){
    
    var
        //current slide that has active class or first slide in set
        $current = ($('.view-scan-gallery .receipts li.active-image')?  $('.view-scan-gallery .receipts li.active-image') : $('.view-scan-gallery .receipts li:first')),            
        $prev = (($current.prev().length) ? (($current.prev().hasClass('active-image')) ? $('.view-scan-gallery .receipts li:first') : $current.prev()) : $('.view-scan-gallery .receipts li:first')),
        //slide indicator
        $imageNav = $('.slide-nav li.active-nav') ? $('.slide-nav li.active-nav'): $('.slide-nav li:first'),
        $imageNavPrev = (($imageNav.prev().length) ? (($imageNav.prev().hasClass('active-nav')) ? $('.slide-nav li:first') : $imageNav.prev()) : $('.slide-nav li:first'));

        //switch class on slides to display
        $current.removeClass('active-image');
        $prev.addClass('active-image');
        
        //if the slide indicator exists switch class
        if($imageNav){
            $imageNav.removeClass('active-nav');
            $imageNavPrev.addClass('active-nav');
        }
    
}

function tapExpandable(e) { // expand or collapse an item
    var
    $this = $(this),
    $expanded = $('.expanded');

    if ($this.hasClass('expanded')) { // if already expanded
        $this.removeClass('expanded');
        $this.next('.expandable-content').slideUp(t);

    }
    else if ($expanded.length > 0) {                                                          // find any other expanded content

        $expanded.removeClass('expanded').next('.expandable-content').slideUp(t, function() { // collapse them
           $this.next('.expandable-content').slideDown(t, function() {      // open the selected section
                $container.animate({scrollTop: ($this.position().top)},200); // scroll that section to the top
            });
            
            $this.addClass('expanded');
        });
    }
    else { // nothing expanded
        $this.next('.expandable-content').slideDown(t, function() {
            $container.animate({scrollTop: ($this.position().top)},200);
        });
        
        $this.addClass('expanded');
    }
}

//close gallery
$('.view-scan-gallery .close').on('click', function(){
    $('.view-scan-gallery').fadeOut();
    $('body').css('overflow', 'auto');
});

// hide slide indicators if only one receipt
if($('.view-scan-gallery .receipts li').length === 1){
    $('.slide-nav').hide();
} 

}(jQuery, this, this.document));