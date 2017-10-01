;(function($, window, document, undefined) {

var
$container = $('body'); // *NOTE: this will need to reference the container that the retailer list goes in.
$search = $('#eligible-retailer-search'),
$clear = $('#clear-search'),
$info = $('#eligible-search-info'),
$recent = $('#eligible-recent'),
$all = $('#eligible-all'),
$eTitle = $('.expandable-title'),
$camera = $('.btn-camera'),
t = 300; // animation duration


// attach event listeners
$search.on('click tap', tapSearch);
 $clear.on('click tap', tapClearSearch);
  $info.on('click tap', tapInfo);
$recent.on('click tap', tapRecent);
   $all.on('click tap', tapAll);
$eTitle.on('click tap', tapExpandable);
$camera.on('click tap', tapCamera);



// define functions to respond to tap events
function tapSearch(e) { // tap the search input
}

function tapClearSearch(e) { // tap the clear search button
    e.preventDefault();
}

function tapInfo(e) { // tap info icon, open info drawer
    var $drawer = $('#search-info-drawer');
    e.preventDefault();

    if ($drawer.hasClass('expanded')) {
        $drawer.removeClass('expanded');
        $drawer.slideUp(t);
    }
    else {
        $drawer.addClass('expanded');
        $drawer.slideDown();
    }
}

function tapRecent(e) { // tap the recent button
    if ($recent.hasClass('pressed')) {
        return false; // already selected
    }
    else {
        $all.removeClass('pressed');
        $recent.addClass('pressed');
    }
}

function tapAll(e) { // tap the all button
    if ($all.hasClass('pressed')) {
        return false; // already selected
    }
    else {
        $recent.removeClass('pressed');
        $all.addClass('pressed');
    }
}

function tapExpandable(e) { // expand or collapse an item
    var
    $this = $(this),
    $expanded = $('.expanded');

    if ($this.hasClass('expanded')) { // if already expanded
        $this.removeClass('expanded');
        $this.next('.expandable-content').slideUp(t);
        $this.children('.icn-circ-arrow-right').removeClass('rotate90');
    }
    else if ($expanded.length > 0) {                                                          // find any other expanded content
        $expanded.children('.icn-circ-arrow-right').removeClass('rotate90');                  // start rotating arrow back
        $expanded.removeClass('expanded').next('.expandable-content').slideUp(t, function() { // collapse them
            $this.next('.expandable-content').slideDown(t, function() {      // open the selected section
                $container.animate({scrollTop: ($this.position().top)},200); // scroll that section to the top
            });
            $this.children('.icn-circ-arrow-right').addClass('rotate90');    // rotate arrow along with expanding animation
            $this.addClass('expanded');
        });
    }
    else { // nothing expanded
        $this.next('.expandable-content').slideDown(t, function() {
            $container.animate({scrollTop: ($this.position().top)},200);
        });
        $this.children('.icn-circ-arrow-right').addClass('rotate90');
        $this.addClass('expanded');
    }
}

function tapCamera(e) { // tap the camera icon
    // prevent event from bubbling up and triggering the tapExpandable function
    e.stopPropagation();
}

// attach the autocomplete plugin
$('#eligible-retailer-search').autocomplete({
    source: [
        "Target",
        "Lunds & Byerly's",
        "Costco",
        "Whole Foods Market",
        "Trader Joe's",
        "Rainbow Foods",
        "Cub Foods"
    ],
    messages: {
        noResults: "",
        results: function() {}
    },
    open: function () {
        
    }
});


/* This if/else is to sidestep a rendering bug in some versions of webkit where 
   elements with rounded corners and inset shadows sometimes have aliased/jagged
   corners when the page initially loads. */
if ($recent.hasClass('pressed')) {
    $recent.removeClass('pressed');
    setTimeout(function(){$recent.addClass('pressed');}, 20);
} else {
    $recent.addClass('pressed');
    setTimeout(function(){$recent.removeClass('pressed');}, 20);
}


}(jQuery, this, this.document));