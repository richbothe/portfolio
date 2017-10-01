//script to build autocomplete retailer as is UX team.
//This script is changed from the what UET has send us.

function autocmplete() {
var retailerList = data;
$('#name').autocomplete({
		source: retailerList,
		messages: {
			noResults: "",
			results: function() {
			}
		},
		select: function(event,ui) {
			$('#name').val(ui.item.label);
			$('#retailerid').val(ui.item.value);
			$('button').removeAttr("disabled");
			return false;
		},
		focus: function( event, ui ) {
			$( "#name" ).val( ui.item.label );
			return false;
		}
	})
	.keyup(function () {
		var len = $("#name").val().length;
		if (len == 0) {
			 $('#input-clear').css("display",'none');
		}
	});
	$.extend( $.ui.autocomplete, {				
		escapeRegex: function( value ) {
			return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
		},								
		filter:function(a,b){
	        $('button').attr("disabled",'disabled');
	        $('#input-clear').css("display",'block');
	        var g=new RegExp("^" +$.ui.autocomplete.escapeRegex(b),"i");
			var anyMatches = $.grep(a,function(c){
				return g.test(c.label||c.value||c)
				});
			return anyMatches.slice(0,5);
			}											
});
}

$(document).ready( function () {
	$('div.input-container').on('click', '#input-clear', function () {
		$(this).hide();
		$('button').attr('disabled', true);
		$('#name').remove();
		$('<input id="name" type="text" />').prependTo('div.input-container');
		$('<input type="hidden" id="retailerid" />').prependTo('div.input-container');
		autocmplete();
	});
	autocmplete();
});



// All fuinction for home page onReady goes here.
$(document).ready( function () {
	 var navtoggle = 1;
	$('nav').on('click', 'div.nav-button-inactive', function () {
		var which = $(this).attr('id');
		$(this).removeClass('nav-button-inactive').addClass('nav-button-active').find('img').attr('src', 'images/' + which + 'icon-enabled.png');
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
	}); 
	
	$('div.learn-bar').on('click', function () {
		var $this = $(this),
			$learnbaropen = $('div.learn-bar-open');
		if ($this.hasClass('learn-bar-open')) {
			$this.removeClass('learn-bar-open').next().slideUp(400);
			$this.find('img').removeClass('rotate-arrow');
		} else {
			$learnbaropen.find('img').removeClass('rotate-arrow');
			$learnbaropen.next().slideUp(400);
			$this.find('img').addClass('rotate-arrow');
			$this.addClass('learn-bar-open');
			$this.next().slideDown(400);
		}
	});

	$('p.learn-extra-button').on('click', function () {
		$('body').css('backgroundColor', '#D2F1FF');
		var whichExtra = $(this).index('.learn-extra-button');
		$(this).parent().parent().fadeOut(400, function() {
			$('section#learn-extra').show().children().eq(whichExtra).fadeIn(400);
		});

	});

	$('p.learn-extra-info-return-button').on('click', function() {
		$(this).parent().fadeOut(400, function() {
			$('body').css('backgroundColor', '#8ed4f4');
			$('#learn-main').fadeIn(400);
		});
	});
});


function retailerpage() {
	window.location.replace('/hwrmobile/receiptretailer.do')
}

function showlearn() {
	 var navtoggle = 1;
		$('#get-tips').on('click', 'div.nav-button-inactive', function () {
			var which = $('#learn-main').attr('id');
			
				$('#home').removeClass('nav-button-active').addClass('nav-button-inactive').find('img').attr('src', 'images/homeicon-disabled.png');
				$('#home-main').fadeOut(250, function () {
					$('#learn-main').fadeIn(250);
				});
				navtoggle = 0;

		});

}




