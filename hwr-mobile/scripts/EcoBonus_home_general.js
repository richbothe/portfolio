var navtoggle = 1;
var divid;

var data;
var reqparam;
var urlParams;
   var match,
        pl     = /\+/g,  // Regex for replacing addition symbol with a space
        search = /([^&=]+)=?([^&]*)/g,
        decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
        query  = window.location.search.substring(1);

    urlParams = {};
    while (match = search.exec(query))
       urlParams[decode(match[1])] = decode(match[2]);

if (urlParams["source"] == 'learn') {
	
	reqparam = "source=learn&divid=" + urlParams["divid"];
	navtoggle = 0;
	divid = urlParams["divid"];
	$('<style type="text/css"> #learn-main{display: block;} #home-main{display: none;} </style>')
	   .appendTo("head");
}
else{
	navtoggle = 1;
	reqparam = "source=home";
	$('<style type="text/css"> #learn-main{display: none;} #home-main{display: block;} </style>')
	   .appendTo("head");
	navtoggle = 1;
}


function toggleNav ($which) {
	var which = $which.attr('id');
	$which.removeClass('nav-button-inactive').addClass('nav-button-active').find('img').attr('src', 'images/' + which + 'icon-enabled.png');
	if (navtoggle) {
		$('#home').removeClass('nav-button-active').addClass('nav-button-inactive').find('img').attr('src', 'images/homeicon-disabled.png');
		$('#home-main').fadeOut(250, function () {
			$('#learn-main').fadeIn(250);
		});
		navtoggle = 0;
	} else {
		$('body').css('backgroundColor', '#8ed4f4');
		$('section#learn-extra').hide();
		$('#learn').removeClass('nav-button-active').addClass('nav-button-inactive').find('img').attr('src', 'images/learnicon-disabled.png');
		$('#learn-main').fadeOut(250, function () {
			$('#home-main').fadeIn(250);
		});
		navtoggle = 1;
	}
 
}

function retailerpage() {
    var source = "";
    if (navtoggle == 1){
        source = "home";
    }
    else
    {
        source = "learn";
    }
    var url = '/hwrmobile/receiptretailer.do?source=' + source + '&divid=' + divid;
    window.location.href=url;
}

$(document).ready( function () {
	
	if (urlParams["source"] == 'learn') {
		$('#home').removeClass('nav-button-active').addClass('nav-button-inactive').find('img').attr('src', 'images/homeicon-disabled.png');
		$('#learn').removeClass('nav-button-inactive').addClass('nav-button-active').find('img').attr('src', 'images/learnicon-enabled.png');
		var $this = $('#'+divid);
			$this.addClass('learn-bar-open').children().addClass('rotate-arrow');
			$this.next().slideDown(400);
			setTimeout(function() {
				$('#main-container').animate({scrollTop: $('#'+divid).position().top},200);
			},500);
		
		
	}
	else if (urlParams["cmd"] == 'receiptuploadsuccess'){
		showdialogbox("successmsg");
	}
	else if (urlParams["cmd"] == 'receiptuploadfailed') {
		showdialogbox("failedmsg");
	}
	else
		{
			$('#learn').removeClass('nav-button-active').addClass('nav-button-inactive').find('img').attr('src', 'images/learnicon-disabled.png');
			$('#home').removeClass('nav-button-inactive').addClass('nav-button-active').find('img').attr('src', 'images/homeicon-enabled.png');
		}
	
	
	$('nav').on('click', 'div.nav-button-inactive', function () {
		toggleNav($(this));
	});


    $('#get-tips').on('click', function() {
    toggleNav($('div.nav-button-inactive'));
     $('div.learn-bar').removeClass('learn-bar-open').children().removeClass('rotate-arrow').parent().next().slideUp(400);
     var data = document.getElementById('tipsid').value;
     $('#'+data).addClass('get-tips-bar learn-bar-open').children().addClass('rotate-arrow').parent().next().slideDown(400);
     setTimeout(function() {
         $('#main-container').animate({scrollTop: ($('#'+data).position().top)},200);
      }, 500);
     });
    
     $('div.learn-bar').on('click', function(e) {
        e.preventDefault();
        var $this = $(this),
            id = $this.attr('id'),
            $open = null; // will hold a jQuery object of the currently opened section

        if ($this.hasClass('learn-bar-open')) { // if the open section was tapped
            $this.removeClass('learn-bar-open');
            $this.next().slideUp(0, function() { // close the open section
                $this.children().removeClass('rotate-arrow'); // rotate arrow only after animation is complete
            });
            divid =  "";
        } else { // if an unopened section was tapped
            if ($('div.learn-bar-open')[0]) {           // if there is an open section
                $open = $($('div.learn-bar-open')[0]);  // get the open section
                $open.removeClass('learn-bar-open');
                $open.next().slideUp(0, function() {         // close the open section
                    $open.children().removeClass('rotate-arrow');
                    $this.addClass('learn-bar-open');
                    $this.children().addClass('rotate-arrow');
                    $('#main-container').animate({scrollTop: ($this.position().top)},220);
                    $this.next().slideDown(300);
                    $('#main-container').animate({scrollTop: ($this.position().top)},200);
                    $this.next().slideDown(300);

                });
                divid =  $(this).attr('id');
            } else { // if there is no opened section
                $this.addClass('learn-bar-open');
                $this.children().addClass('rotate-arrow');
                 $('#main-container').animate({scrollTop: ($this.position().top)},220);
                $this.next().slideDown(300);
                $('#main-container').animate({scrollTop: ($this.position().top)},200);
                $this.next().slideDown(300);
                divid =  $(this).attr('id');
            }
        }
    });

	$('p.learn-extra-button').on('click', function () {
		$(this).next().next().show();
		window.scrollTo(0, 0);
		$('.learn-extras').css('display','none');
		$('.learn-bar').css('display','none');
		$(this).parent().css('display','block');
		var mainheight = $('#main-container').innerHeight() + 'px';
		$('#main-container').css('background','#D2F1FF');
		$('#main-container').animate({scrollTop: 0},0);
	});

	$('p.learn-extra-info-return-button').on('click', function() {
		$(this).parent().hide();
		$('body').css('backgroundColor', '#8ed4f4');
		$('.learn-extras').css('display','block');
		$('.learn-bar').css('display','block');
		$('#main-container').css('background','#8ed4f4');
	});
	
	
	
	
});

$(window).load(function() {
    var $window = $(window),
    $content = $('#main-container'),
    $header = $('#header'),
    $menu = $('#menu'),
    $footer = $('#page-footer'),
    wHeight = window.innerHeight ? window.innerHeight : $(window).height(),
    headerHeight = $header.outerHeight(),
    menuHeight = $menu.outerHeight(),
    footerHeight = $footer.outerHeight(),
    contentPos = 0,
    //footerPos = 0,
    contentHeight = 0;
    
    function handleResize(e) {
        wHeight = window.innerHeight ? window.innerHeight : $(window).height();
        placeElements();
    }
    function placeElements() {
        contentPos = headerHeight + menuHeight;
        //footerPos = 900 + 'px';//wHeight - footerHeight;
        contentHeight = wHeight - headerHeight - menuHeight - footerHeight;
        // $content.css({top: contentPos + 'px'});             // place #main-container
        $content.css({height: contentHeight + 'px'});       // set #main-container height
        $footer.css({top: footerPos + 'px'});               // place the footer
        document.body.style.visibility="visible";
    }
    function isTouchDevice() {
        try{
            document.createEvent("TouchEvent");
            return true;
        }catch(e){
            return false;
        }
    }

    function touchScroll(id){
        if(isTouchDevice()){ //if touch events exist...
            var el=document.getElementById(id);
            var scrollStartPos=0;
     
            document.getElementById(id).addEventListener("touchstart", function(event) {
                scrollStartPos=this.scrollTop+event.touches[0].pageY;
                // event.preventDefault();
            },false);
     
            document.getElementById(id).addEventListener("touchmove", function(event) {
                this.scrollTop=scrollStartPos-event.touches[0].pageY;
                // event.preventDefault();
            },false);
        }
    }

    $window.on('resize orientationchange', handleResize);
    placeElements();
    touchScroll('main-container');
});



function signoutevent() {
    window.location.href = '/hwrmobile/login.do?cmd=logout';
  }
