;(function($, window, document, undefined) {

var
$container = $('body'); // *NOTE: this will need to reference the container that the retailer list goes in.
var $search ,$clear,$info,$recent,$all,t; // animation duration
var brandnameMap ={};
var retailerList ={};
var recentlyadded,listneradded,allretaileradded;
var recentlstnrAdded =false;
var alllstnrAdded =false;
var brandnameJSON;


//Seperate method as we need to add post dynamic DIV addition
function addlistners()
{
	$search = $('#eligible-retailer-search'),
	$clear = $('#clear-search'),
	$info = $('#eligible-search-info'),
	$recent = $('#eligible-recent');
	$all = $('#eligible-all');
	t = 300;
	
	// attach event listeners
	$search.on('click tap', tapSearch);
	$clear.on('click tap', tapClearSearch);
	$info.on('click tap', tapInfo);
	$recent.on('click tap', tapRecent);
	$all.on('click tap', tapAll);
	listneradded =true;
	roundedcornerjagger();
}

//Need to add  this seperately as this has to added irrespective f recent or all tab
function addTapAllEvent()
{
	var $eTitle = $('.expandable-title'),
	$camera = $('.btn-camera');
	$camera.on('click tap', tapCamera);
	$eTitle.on('click tap', tapExpandable);
	alllstnrAdded=true;
}
function addTapRecentEvent()
{
	var $eTitle = $('.expandable-title-recent'),$camera = $('.btn-camera');
	$camera.on('click tap', tapCamera);
	$eTitle.on('click tap', tapExpandable);
	recentlstnrAdded = true;
}

// define functions to respond to tap events
function tapSearch(e) {
	autocomplete();
	$('#eligible-all').trigger('tap');
	
	// tap the search input
}

function tapClearSearch(e) {// tap the clear search button
	
	$("#eligible-retailer-search").val("");
	$('#clear-search').removeClass('deleteicon');
	$('.expandable').removeClass('expandable-selective-hide');//filtering retailer list as user types
    e.preventDefault();
}

function tapInfo(e) { // tap info icon, open info drawer
    var $drawer = $('#search-info-drawer');
    e.preventDefault();

    if ($drawer.hasClass('expanded')) {
        $drawer.removeClass('expanded');
        $drawer.fadeOut(t);
    }
    else {
        $drawer.addClass('expanded');
        $drawer.fadeIn();
    }
}

function tapRecent(e) { // tap the recent button
    if ($recent.hasClass('pressed')) {
        return false; // already selected
    }
    else {
        $all.removeClass('pressed');
        $recent.addClass('pressed');
        $('#all-retailers').addClass('expandable-selective-hide');
        $('#recent-retailers').removeClass('expandable-selective-hide');
        if(!recentlyadded){//constructing recently used retailer DIV's
        	appendRetailerList("receiptretailer.do?cmd=getPaxSpecificRetailerList&participantid="+$('#memberid').attr('value'),"recent");
        	recentlyadded=true;// boolean to stop repettive DIV addition
        }
    }
}

function tapAll(e) { // tap the all button
    if ($all.hasClass('pressed')) {
        return false; // already selected
    }
    else {
    	 
         $('#recent-retailers').addClass('expandable-selective-hide');//showing recent added retailer
         $('#all-retailers').removeClass('expandable-selective-hide');//making all retailers invisible
         if(!allretaileradded)
         {//constructing recently used retailer DIV's
         appendRetailerList("receiptretailer.do?cmd=getRetailerList","all");
         allretaileradded=true;// boolean to stop repettive DIV addition
         }
        $recent.removeClass('pressed');
        $all.addClass('pressed');
    }
}

function tapExpandable(e) { // expand or collapse an item
    var
    $this = $(this),
    $expanded = $('.expanded');
    $brandname = $('#'+$this.children('#retailerid').attr('value'));
    

    if ($this.hasClass('expanded')) { // if already expanded
        $this.removeClass('expanded');
        $this.next('.expandable-content').fadeOut(0);
        $this.children('.icn-circ-arrow-right').removeClass('rotate90');
    }
    else if ($expanded.length > 0) {                                                          // find any other expanded content
        $expanded.children('.icn-circ-arrow-right').removeClass('rotate90');                  // start rotating arrow back
        $expanded.removeClass('expanded').next('.expandable-content').fadeOut(0, function() { // collapse them
            $this.next('.expandable-content').fadeIn(300, function() {      // open the selected section
                $container.animate({scrollTop: ($this.position().top)},300); // scroll that section to the top
            });
            $this.children('.icn-circ-arrow-right').addClass('rotate90');    // rotate arrow along with expanding animation
            $this.addClass('expanded');
            fetchBrandNames($this,$brandname);//need to added brand name only when expanding retailer
        });
    }
    else { // nothing expanded
        $this.next('.expandable-content').fadeIn(300, function() {
            $container.animate({scrollTop: ($this.position().top)},300);
        });
        $this.children('.icn-circ-arrow-right').addClass('rotate90');
        $this.addClass('expanded');
        fetchBrandNames($this,$brandname);//need to added brand name only when expanding retailer
    }
}

function tapCamera(e) { // tap the camera icon
    // prevent event from bubbling up and triggering the tapExpandable function
	
	 $this = $(this),
	    uploadreceipt($this.attr('value'));
	    
    e.stopPropagation();
}


 function autocomplete()
 {
	 function log( message ) {
		    $( "<div>" ).text( message ).prependTo( "#log" );
		    $( "#log" ).scrollTop( 0 );
		  }

		  $( "#eligible-retailer-search" ).autocomplete({
		      source: function( request, response ) {
		        $.ajax({
		          url: "receiptretailer.do?cmd=getRetailerList",
		          type: 'GET',
		          dataType: "json",
		          success: function( data ) {
//		            response( $.map( data, function( item ) {
//		              return {
//		                label: item.name ,
//		                value: item.name
//		              }
//		            }));
		          }
		        });
		      },
		      minLength: 1,
		      select: function( event, ui ) {
		    	  $('.expandable').not('#'+ui.item.label).remove();
		        log( ui.item ?
		          "Selected: " + ui.item.label :
		          "Nothing selected, input was " + this.value);
		      },
		      open: function() {
		        $( this ).removeClass( "ui-corner-all" ).addClass( "ui-corner-top" );
		      },
		      close: function() {
		        $( this ).removeClass( "ui-corner-top" ).addClass( "ui-corner-all" );
		      }
		      
		    }).keyup(function () {
		    	
				var selection =  $("#eligible-retailer-search").val().toLowerCase();
				selection = selection.replace(/[^A-Za-z0-9]/g, "");
				if(selection.length!="")	{
					$('#clear-search').addClass('deleteicon');
					$('.expandable').removeClass('expandable-selective-hide');//filtering retailer list as user types
					$('.expandable').not('[id^='+selection+']').addClass('expandable-selective-hide'); //filtering retailer list as use rtypes
				}
				else{//need to show all retailer when user removes all typed characters
					$('#clear-search').removeClass('deleteicon');
					$('.expandable').removeClass('expandable-selective-hide');//filtering retailer list as user types
					}
				
			});
		  
 }


// need to fetch recently used retailer list on page load
appendRetailerList("receiptretailer.do?cmd=getPaxSpecificRetailerList","recent"); // retailer list to added on document ready
    

	
//Common method to add retailer list irrespective of tab
function appendRetailerList(ajaxurl,tab)
{
	$.ajax({
    url: ajaxurl,
    type: 'GET',
    dataType: 'json',
    success: function(data, textStatus, xhr) {
    	
    	if(data.length==0 && tab=="recent")//if curren tuser does not have recent default to All tab
    		{
    		if(!listneradded) 
    			{
    			addlistners();// add all listners only once
    			}
   			$('#eligible-all').trigger('tap');
   			$recent.removeClass('pressed') 
   		    
    			
    		}
    	else
    		{
	    		$.each(data, function(index, retailer) {
	        		if(retailer.name !=null)
	        			{
	        			retailerList[retailer.id]=retailer.name;
	        			if(tab=="all")$( "#retailerlisttemplate" ).tmpl( retailer ).appendTo( "#all-retailers" );
	        			else 
	        				{
	        					$( "#retailerlisttemplateRecent" ).tmpl( retailer ).appendTo( "#recent-retailers" );
	        					recentlyadded=true;
	        					
	        				}
	        			}
	        		
	        		});
	        	if(tab=="all"){//Need to compute expand title width for both recent and all individualy and do elipsis
	        		var titleWidth = $('.expandable-title').width() - $('.icn-circ-arrow-right').outerWidth() - $('.retailer-logo').outerWidth() - $('.btn-camera').outerWidth() - 24;
	        		$recent.removeClass('pressed');
	        	}
	        	else{
	        		var titleWidth = $('.expandable-title-recent').width() - $('.icn-circ-arrow-right').outerWidth() - $('.retailer-logo').outerWidth() - $('.btn-camera').outerWidth() - 24;
	        	}
	        	$('.title-text').width(titleWidth);
	        	
	        	
	        	if(!listneradded)
	        		{
	        			addlistners();// add all listners only once 
	        			addTapRecentEvent();
	        			
	        		}
	        	
	        	if(!alllstnrAdded && tab=="all") 
	        		{
	        		addTapAllEvent();
	        		}
    		}
    	
    },
    error: function(xhr, textStatus, errorThrown) {
        $('#retailerlisttemplate').html(textStatus);
 }
    });

	}

$.ajax({
    url: "receiptretailer.do?cmd=getBrandName",
    type: 'GET',
    dataType: 'json',
    success: function(data, textStatus, xhr) {
    	brandnameJSON = data;
//    	$.each(data, function(index, retailer) {
//    			console.log([])
//    		
//    		});
    },
    error: function(xhr, textStatus, errorThrown) {
        $('#retailerlisttemplate').html(textStatus);
    }
});


/**
 * function to fetch brandnames
 */
function fetchBrandNames(retailerdiv,brandname)
{
	var retailerId =retailerdiv.children('#retailerid').attr('value');
	var retailerUL = retailerdiv.parent().parent().find('#'+retailerId);
	if(brandnameMap[retailerId]==null)
	{
		
		if(brandnameJSON[retailerId] !=null&&retailerUL.find('li').length==0)
		{
			$( "#brandnamelisttemplate" ).tmpl( brandnameJSON[retailerId]).appendTo(retailerUL);
		}
	}

}

function roundedcornerjagger()
{
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
}

function uploadreceipt(rId)
{
	 var appver = $('#appversion').attr('value');
	 
	 if(appver!="")
	 {
		 window.location.href = "/hwrmobile/cameraaction.do?rId="+rId+"&memberId="+$('#memberid').attr('value');
	 }
	 else
		 {
		 window.location.href = "/hwrmobile/uploadreceipt.do?rId="+rId+"&memberId="+$('#memberid').attr('value');
		 }
	 
}



}(jQuery, this, this.document));

function backtohomepage() {
	var url = '/hwrmobile/home.do?' + location.search.substr(1);
	window.location.href = url;
}



function makeiteditable() {
 	 $('#eligible-retailer-search').removeAttr('readonly');
 	// $('#name').removeAttr('disabled');
 }