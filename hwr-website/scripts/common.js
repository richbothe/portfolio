/* DOCUMENT LOAD - INIT */
 function submitform(){
	 document.chatform.submit();
} 
$(document).ready(function()
{
	/* INIT - setup jquery */
	onLoadInit();
	
	/* do global inits for ajax loaded content
	$('body').ajaxSuccess(function(e, xhr, settings){
		onLoadInit();
	}); */
});

/* on load initializations */
function onLoadInit(){
	/* init basic tabs */
	// setup ul.tabs to work as tabs for each div directly under div.panes
	$("ul.basicTabs").tabs($("div.basicTabPanes > div"));

	/* initialize modals */
	initModals();
	
	/* initialize buttons */
	initFsrButtons();
	
	/* initialize generic tooltips */
	initFsrTooltips();
	
	/* initialize fsr form errors */
	initFsrFormErrors();
	
	/* initialize DIV.error modals */
	initErrorModals();
	
	/* auto tabs */
	initAutoTabs();
}

/* AUTO TABS */
function initAutoTabs(){
	$('INPUT.autoTab').each(function(){
		var max = $(this).attr('maxlength');
		var target = $(this).attr('rel');
		target = target?target:$(this).attr('alt');
		if(max&&target){
			$(this).keyup(function(){
				if($(this).val().length>=parseInt(max)){
					$(target).focus();
				}
			});
		}
	});
}

/* ERROR MODALS - display generic form errors in a modal */
function initErrorModals(){
	var err = $('DIV.formError');
	
	if(err.length>0){
		//make sure we work with the first error div, older might exist
		err = $(err[0]);
		//put the div in a static pos, these accumulate if several occur
		//also eliminate styling if injected inside other elements
		$('body').append(err);
	}
	
	
	//err.find('H1').prepend('<a class="close">X</a>');
	err.overlay({
			load:true,
			mask: {color: '#000000',loadSpeed: 200,opacity: 0.5},
			onLoad:function(){initFsrButtons();}
	});
}



/* FSR FORM ERRORS */
function initFsrFormErrors(){
	var errors = $('.fsrError');
	errors.each(function(){
		var ot = $(this).attr('title');
		var tt = null;
		$(this).attr('title','<div class="mainETT">'+ot+'</div><div class="footETT"></div>');
		$(this).addClass('fsrError_error').focus(
			function(){$(this).removeClass('fsrError_error');}
		);
		var effect = $.browser.msie?'toggle':'fade';
		var events = $(this).hasClass('fsrErrorNoEvents')?'x,x':'mouseenter,mouseleave';//'x,x' x are for IE, it doesn't like nothing there
		$(this).tooltip({
				position:'bottom right',
				tipClass:'fsrErrorTooltip',
				effect:effect,
				offset:[-47,-5],
				events:{def:events},
				onBeforeShow: function(){					
					//custom offset?
					var xoff = this.getTrigger().attr('class').match('fsrX[\-]{0,1}[0-9]+');
					var yoff = this.getTrigger().attr('class').match('fsrY[\-]{0,1}[0-9]+');
					var xoffInt = xoff!=null?parseInt(xoff[0].substr(4)):this.getConf().offset[1];
					var yoffInt = yoff!=null?parseInt(yoff[0].substr(4)):this.getConf().offset[0];
					this.getConf().offset[1] = xoffInt*(-1);
					this.getConf().offset[0] = yoffInt;
				},
				onHide:function(){
					this.getTrigger().data('fsrErrorShown',true);//flag it
					for(var i=0;i<errors.length;i++){//find next error to show
						if(!$(errors[i]).data('fsrErrorShown')){
							$(errors[i]).tooltip().show();
							break;
						}
					}
				}
		});
	});
	if(errors.length>0){
		$(errors[0]).tooltip().show();
	}
}




/* VALIDATE INPUT 
   pass this 'sel' parameter and search beneath
*/
function validateInput(sel){
	var numInvalid = 0;
	//text fields
	$(sel+' INPUT.requiredInput[type=text]').each(function(){
		if($(this).val().length==0){
			numInvalid++;
		}
	});
	//checkbox fields
	$(sel+' INPUT.requiredInput[type=checkbox]').each(function(){
		if(!$(this).is(':checked')){
			numInvalid++;
		}
	});
	//radio groups
	$(sel+' INPUT.requiredInput[type=radio]').each(function(){
		if($(sel+' INPUT.requiredInput[type=radio][name='+$(this).attr('name')+']:checked').length==0){
			//alert(sel+' INPUT.requiredInput[type=checkbox][name='+$(this).attr('name')+']:checked');
			numInvalid++;
		}
	});
	//select fields
	$(sel+' SELECT > OPTION:selected').each(function(){
		if($(this).hasClass('nonOption')){
			numInvalid++;	
		}
	});	
	
	return numInvalid == 0;
}


/* FSR TOOLTIPS */
function initFsrTooltips(){
	$('[rel].fsrTooltip').each(function(index){
		var rel = $(this).attr('rel');
		$(this).tooltip({tip:rel,position:'bottom left',offset:[-34,6],delay:30,effect:'slide'});
	});
	$('[title].fsrTooltip').each(function(index){
		var t = $(this).attr('title');
		$(this).removeAttr('title');
		var ttEleId = 'fsrFlexTitleTooltip';
		var ttEle = $('#'+ttEleId);
		//if not already generated, generate generic container
		if(ttEle.length==0){
			$('body').append(
				'<div id="'+ttEleId+'" class="flexTooltip">'+
				'<div class="mainFTT">'+
				'</div>'+
				'<div class="footFTT"></div>'+
				'</div>'
			);
			ttEle = $('#'+ttEleId);
		}
		
		//contains call to fill in text from title
		$(this).tooltip({
			tip:'#'+ttEle.attr('id'),
			position:'bottom left',
			offset:[-34,6],
			delay:0,
			predelay:200,
			effect:'slide',
			onBeforeShow: function(){
				//fit on left or right?
				var side = this.getTrigger().offset().left-this.getTip().width()<0?'right':'left';
				this.getConf().position[1] = side;
				this.getTip().removeClass('right').removeClass('left').addClass(side);
				
				//custom offset?
				var xoff = this.getTrigger().attr('class').match('fsrX[\-]{0,1}[0-9]+');
				var yoff = this.getTrigger().attr('class').match('fsrY[\-]{0,1}[0-9]+');
				var xoffInt = xoff!=null?parseInt(xoff[0].substr(4)):this.getConf().offset[1];
				var yoffInt = yoff!=null?parseInt(yoff[0].substr(4)):this.getConf().offset[0];
				this.getConf().offset[1] = xoffInt*(side=='left'?1:-1);
				this.getConf().offset[0] = yoffInt;
				//this.getConf().events.def="mouseenter";
				
				//special class?
				var clazzez = this.getTrigger().attr('class').match('fsrTTClass_[a-zA-z]+');
				if(clazzez!=null&&clazzez.length>0){
					ttEle.addClass(clazzez[0].substring(clazzez[0].indexOf('_')+1));
				}
				
				
				//replace html inside
				ttEle.find('DIV.mainFTT').html(t);
			},
			onShow:function(){
				//support modal links in tooltips
				initModals();
			},
			onHide:function(){
				//special class?
				var clazzez = this.getTrigger().attr('class').match('fsrTTClass_[a-zA-z]+');
				if(clazzez!=null&&clazzez.length>0){
					ttEle.removeClass(clazzez[0].substring(clazzez[0].indexOf('_')+1));
				}	
			}
		});
	});
	
}


/* FSR BUTTONS */
function initFsrButtons(){
$('A.fsrButton').each(function(){
	var b = $(this);
	if(b.hasClass('initialized')/*||!b.is(':visible')*/){return;}
	
	//var tt = b.text() || b.val();
	var tt = b.html();//not just the text
	
	b.html('').append('<i class="lft"></i><span class="mdl">'+tt+'</span><i class="rt"></i>');
	
	//init flag and make visible with 'initialized' style
	b.addClass('initialized');
	
	//ie7 hack below ( no longer used - yay )
	//if($.browser.msie&&$.browser.version.substr(0,1)=="7"){
		//b.css('width',(b.find('SPAN.mdl').outerWidth()+40)+'px');
	//}
	
	b.hover(//mouse in
		function(){
			var img = $(this).find('IMG');
			if(img){
				var roSrc = img.attr('src');
				img.data('origSrc',roSrc);//save original
				roSrc = roSrc.substring(0,roSrc.lastIndexOf('.'))+'_ro'+roSrc.substring(roSrc.lastIndexOf('.'),roSrc.length);
				img.attr('src',roSrc);
			}
		},//mouse out
		function(){
			var img = $(this).find('IMG');
			if(img){
				img.attr('src',img.data('origSrc'));//restore original
			}
		}
	);
	
});
}




/* PRODUCTS & SERVICES */

/* BROWSE SERVICES */
function initServicesBrowser(){
  /* DETAILS LINK */
  $("DIV.thumbnailBrowser > IMG.thumbnail").each(function(index){
    $(this).click(function(event){
      var id = $(this).attr('id').substr(9);
      //simulate tab click
      clickProdServTab($('#servicesLink'),event,id);
    });
  });
  initProdServPagination('services');
}


/* BROWSE SPONSORS */
function initSponsorsBrowser(){
  /* DETAILS LINK */
  $("DIV.thumbnailBrowser > IMG.thumbnail").each(function(index){
    $(this).click(function(event){
      var id = $(this).attr('id').substr(9);
      //simulate tab click
      clickProdServTab($('#sponsorsLink'),event,id);
    });
  });
  initProdServPagination('sponsors');
}


/* PRODUCTS DATA TABLE */
/* 
- initialize products data table
- runs every time the data table loads
*/
function initProductsDataTable(){
	initProdServPagination('products');
	
	/* CLICKABLE HEADERS */
	$('TABLE.browseProductsData > tbody > tr > th[id!=specialHeader]')
		.css('cursor','pointer')
		.click(function(event) {clickProdTableHeader(this,event);});
	
	
	/* PRODUCTS DATA TOOLBAR ITEMS */
	// unbind is called below to remove any prev events
	$('DIV.productsDataToolbar > DIV > SELECT#sortByDropdown').unbind().change(
		function(event) {changeSortByDropdown(this,event);});
	
	// sync up the toolbar dropdown with selected cols
	var curSortCol = $('input[name=browseProductsDataTable_sort]').attr('value');
	$('DIV.productsDataToolbar > DIV > SELECT#sortByDropdown option:selected').attr('selected',false)
	$('DIV.productsDataToolbar > DIV > SELECT#sortByDropdown option[value="'+curSortCol+'"]').attr('selected',true);

	// unbind is called below to remove any prev events
	$('DIV.productsDataToolbar > DIV > SELECT#startingWithDropdown').unbind().change(
		function(event) {changeStartingWithDropdown(this,event);});
	
	//init advanced search, unbind previous events
	$('DIV.advancedSearchButton').unbind().click(
		function(event){loadAdvancedSearch(event);}
	);
	
}


/* PAGINATION */
function initProdServPagination(activeTab){	
	// make next and previous links and arrows clickable
	$('DIV.browseProductsDataPagination > DIV#paginationLeftArrow').
		click(function(event){clickNextPreviousLink(this,event,activeTab);});
	$('DIV.browseProductsDataPagination > DIV#paginationRightArrow').
		click(function(event){clickNextPreviousLink(this,event,activeTab);});
	$('DIV.browseProductsDataPagination > SPAN > A#paginationPrevious').
		click(function(event){clickNextPreviousLink(this,event,activeTab);});
	$('DIV.browseProductsDataPagination > SPAN > A#paginationNext').
		click(function(event){clickNextPreviousLink(this,event,activeTab);});
		
	// make page numbers clickable */
	$("DIV.browseProductsDataPagination SPAN A#[id*='pageLink']").
		click(function(event){clickPageNumberLink(this,event,activeTab);});
}

/* perform click on products table header 
   - TH ids are of the form XLink, where X is the sort by field name
   - this removes 'Link' and uses resulting string as current sorting param
*/
function clickProdTableHeader(obj,event){
	var whatHeader = $(obj).attr('id');
	
	// remove last four chars ('Header')
	whatHeader = whatHeader.substr(0,whatHeader.length-6);
	
	//pull out current sort by and sort order from "model" state
	var currHeader = $('input[name=browseProductsDataTable_sort]').attr('value');
	var currSortOrder = $('input[name=browseProductsDataTable_sortOrder]').attr('value');
	
	//clicking on active header flips ASC/DESC order
	if(whatHeader == currHeader){
		// if the header of currently sorted col clicked, flip order
		currSortOrder = currSortOrder=='asc'?'desc':'asc';
	}else{//default sort order
		currSortOrder = 'desc';	
	}
	
	//set the values in our "model" of the table state
	$('input[name=browseProductsDataTable_sort]').attr('value',whatHeader);
	$('input[name=browseProductsDataTable_sortOrder]').attr('value',currSortOrder);
	
	commonSortingActions();
	
	//prevent default action of event
	if(event){event.preventDefault();}
}

/* perform sort by dropdown action */
function changeSortByDropdown(obj,event){
	//pull value from dropdown
	var selCol = $('DIV.productsDataToolbar > DIV > SELECT#sortByDropdown').attr('value');
	
	//set value of "model" sort by, and default sort order to desc
	$('input[name=browseProductsDataTable_sort]').attr('value',selCol);
	$('input[name=browseProductsDataTable_sortOrder]').attr('value','desc');
	
	commonSortingActions();
}

/* perform sort by dropdown action */
function changeStartingWithDropdown(obj,event){
	//pull value from dropdown
	var selStartWith = $('DIV.productsDataToolbar > DIV > SELECT#startingWithDropdown option:selected').attr('value');
	
	//set value of start with in "model"
	$('input[name=browseProductsDataTable_startWith]').attr('value',selStartWith);
	
	commonSortingActions();
}

/* common sorting actions */
function commonSortingActions(){
	// reset page number to 1 on new sort
	$('input[name=pagination_pageNumber]').attr('value','1');
	loadProdTableData();
}

/* perform click on previous/next button 
   - inspects the id and looks for 'previous' or 'next' to discover direction
   - expects element to have '_on' or '_off' class to indicate it's state
*/
function clickNextPreviousLink(obj,event,activeTab){
	var theId = $(obj).attr('id').toLowerCase();
	var newPageNumber = parseInt($('input[name=pagination_pageNumber]').attr('value'));
	
	// if obj has class '_off', then eat the event and return 
	if($(obj).hasClass('_off')){
		if(event){event.preventDefault();}
		return;
	}
	
	// inspect id of clicked obj to decide if next or prev
	if(theId.match('previous')||theId.match('left')){/*is prev*/
		newPageNumber--;
	}else{//is next
		newPageNumber++;
	}
	
	// set the value of the new page number in the hidden input "model"
	$('input[name=pagination_pageNumber]').attr('value',''+newPageNumber);
	
	if(activeTab=='products'){loadProdTableData();}
	else if(activeTab=='services'){loadServicesBrowser();}
	else if(activeTab=='sponsors'){loadSponsorsBrowser();}
	
	if(event){event.preventDefault();}
}

/* perform click on page number link 
   - extracts the page number from the end of elements id
   - elem id must have form pageLinkN, N is the page number
*/
function clickPageNumberLink(obj,event,activeTab){
	var theId = $(obj).attr('id').toLowerCase();
	
	/* if obj has class 'paginationPageNumberOn', then we are already on that
	page, eat the event and return*/
	if($(obj).hasClass('paginationPageNumberOn')){
		if(event){event.preventDefault();}
		return;
	}
	
	/* page link id starts with 'pageLink' followed by page number, 
	so we grab the substring from 8 to the end of the string and parse */
	var pageNum = parseInt(theId.substr(8));
	
	/* set the value of the new page number in the hidden input "model" */
	$('input[name=pagination_pageNumber]').attr('value',''+pageNum);
	
	if(activeTab=='products'){loadProdTableData();}
	else if(activeTab=='services'){loadServicesBrowser();}
	else if(activeTab=='sponsors'){loadSponsorsBrowser();}
	
	if(event){event.preventDefault();}
}

/* load data into table 
   - takes values of hidden input "model" and passes to rendering service
   - loads returned HTML into products data table wrapper
*/
var tableDataRenderUrl = false;
function loadProdTableData(ajaxUrl){
	if(!ajaxUrl&&!tableDataRenderUrl){alert('must give a URL to loadProdTableData()');return;}
	if(ajaxUrl){tableDataRenderUrl=ajaxUrl;}
	var sponsor = "";
	$('DIV#productsDataTableWrapper').load(tableDataRenderUrl,
		{sort:$('input[name=browseProductsDataTable_sort]').attr('value'),
		startWith:$('input[name=browseProductsDataTable_startWith]').attr('value'),
		sortOrder:$('input[name=browseProductsDataTable_sortOrder]').attr('value'),
		pageNumber:$('input[name=pagination_pageNumber]').attr('value'),
		sponsor:$('input[name=pagination_sponsor]').attr('value')},
		function(){initProductsDataTable();}
	);
}

/* load services browser 
   - takes values of hidden input "model" and passes to rendering service
   - loads returned HTML into services wrapper
*/
var servicesBrowserRenderUrl = false;
function loadServicesBrowser(ajaxUrl){
	if(!ajaxUrl&&!servicesBrowserRenderUrl){alert('must give a URL to loadServicesBrowser()');return;}
	if(ajaxUrl){servicesBrowserRenderUrl=ajaxUrl;}
	$('DIV#thumbnailBrowserWrapper').load(servicesBrowserRenderUrl,
		{pageNumber:$('input[name=pagination_pageNumber]').attr('value')},
		function(){initServicesBrowser();}
	);
}

/* load sponsors browser 
   - takes values of hidden input "model" and passes to rendering service
   - loads returned HTML into sponsors wrapper
*/
var sponsorsBrowserUrl = false;
function loadSponsorsBrowser(ajaxUrl){
	if(!ajaxUrl&&!sponsorsBrowserUrl){alert('must give a URL to loadSponsorsBrowser()');return;}
	if(ajaxUrl){sponsorsBrowserUrl=ajaxUrl;}
	$('DIV#thumbnailBrowserWrapper').load(sponsorsBrowserUrl,
		{pageNumber:$('input[name=pagination_pageNumber]').attr('value')}, 
		function(){initSponsorsBrowser();}
	);
}



/* ADVANCED SEARCH */
/* init advanced search */
function initAdvancedSearch(){
	//advanced search button
	$('a.advancedSearchButton').click(
		function(event){clickAdvancedSearch(this,event);}
	);
	
	//add brand button
	$('a.addBrand').click(
		function(event){
			var sel = $('select#allBrands option:selected');
			if(sel){ $('select#includedBrands').append(sel);}
		}
	);
	
	//remove brand button
	$('a.removeBrand').click(
		function(event){
			var sel = $('select#includedBrands option:selected');
			if(sel){ $('select#allBrands').append(sel);}
		}
	);
	
}


/* perform click on advanced search button*/
function clickAdvancedSearch(obj,event){
	//is all cats?
	var allCats = $('input#allCats:checked')?true:false;
	//collect selected categories
	var selCats = Array();
	$('input.asCat:checked').each(function(index){
			selCats.push($(this).attr('value'));
	});
	//is all brands?
	var allBrands = $('input[name="allBrands"][value=true]:checked')?true:false;
	//collect selected brands
	var selBrands = Array();
	$('select#includedBrands option').each(function(index){
			selBrands.push($(this).attr('value'));
	});
	
	//load data and init
	$('HTML').load(
		$(this).attr('href'),
		{'cats[]':selCats, allCats:allCats,
		'brands[]':selBrands,allBrands:allBrands},
		function(){initProductsDataTable();}
	);
}


/* MODAL DIALOGUE */
function initModals(){
	$('.modalInput').each( function(){prepareModal($(this));} );
}

function showModal(modal){
	generateStaticOverlayHTML(modal);
	attachStaticOverlay(modal,true);
	modal.overlay().load();
}

function prepareModal(modal){
	var theRel = modal.attr('rel');

	//AJAX MODALS
	//IS this an AJAX modal?
	if(theRel.indexOf(' ')>1){
		var rels = theRel.split(' ');
		var from = rels[0];
		var clazz = rels[1];
		var title = modal.attr('title');
		var isLoad = modal.hasClass('fsrModal_load');
		//i18n for close text
		var closeText = typeof fsrModalCloseText === 'undefined'?'CLOSE':fsrModalCloseText;
		modal.removeAttr('title');
		if($('#ajaxModal').length==0){
			$('body').append('<div id="ajaxModal" class="modal" >'+
				'<div class="modalLiner">'+
				'<div class="modalHeader">'+
				'<div class="modalTitle"></div>'+
				'<a class="modalClose close">'+closeText+'</a>'+
				'</div><div class="modalContent">'+
				'</div></div></div>');
		}
		
		
		//attach overlay event
		modal.overlay({
			onBeforeLoad: function(){
				var content = this.getOverlay().find('DIV.modalContent');
				this.getOverlay().find('DIV.modalTitle').html(title);
				this.getOverlay().find('DIV.modalContent')
					.attr('class','modalContent').addClass(clazz);
					
				//ie7 width
				if($.browser.msie&&$.browser.version.substr(0,1)=="7"){
					var rawContWidth = this.getOverlay().find('DIV.modalContent').css('width');
					//default IE7 width
					rawContWidth = rawContWidth == 'auto' ? '820px' : rawContWidth;
					var contWidth = parseInt(rawContWidth);
					var pL = parseInt(this.getOverlay().find('DIV.modalContent').css('padding-left'));
					var pR = parseInt(this.getOverlay().find('DIV.modalContent').css('padding-right'));
					var mL = parseInt(this.getOverlay().find('DIV.modalContent').css('margin-left'));
					var mR = parseInt(this.getOverlay().find('DIV.modalContent').css('margin-right'));
					this.getOverlay().css('width',(contWidth+pL+pR+mL+mR+2)+'px');
				}
				
				//google analytics 
				try {
					if(pageTracker){
						pageTracker._trackPageview(from);
					}
				} catch(err) {}
				
				content.load(from,function(){initFsrButtons();});
				
				
			},
			load:isLoad,
			top:'5%',
			target:'#ajaxModal',
			mask: {color:'black',loadSpeed: 200,opacity: 0.5},
			closeOnClick: false,
			onLoad:function(){initFsrButtons();}
		});
		return;
	}
	
	
	//STATIC MODALS
	
	//find overlay
	var overlay = $(modal.attr('rel'));
	
	if(overlay.length==0){return;}//no overlay found
	
	generateStaticOverlayHTML(overlay);
	
	attachStaticOverlay(modal);
	

}

//overlay HTML
function generateStaticOverlayHTML(overlay){
	//indicates this modal has been wrapped
	var preparedIndicator = 'preparedZooobityBop';
	//if overlay has been wrapped, ignore
	if(!overlay.hasClass(preparedIndicator)){
		//extract title
		var title = overlay.attr('title');
		//extract html
		var origHtml = overlay.html();
		//extract css(style)
		var css = overlay.attr('style');
		css = css?css:'';//ensure there is a string, not null
		//extract classes
		var classes = overlay.attr('class');
		//keep modal class from being set on inside content div
		classes = classes.replace('modal','');
		
		//i18n for close text
		var closeText = typeof fsrModalCloseText === 'undefined'?'CLOSE':fsrModalCloseText;
		
		//standard outer div styles
		overlay.css('width','auto').css('height','auto').css('background','white');
		//eliminate all classes on outside except for 'modal'
		overlay.attr('class','modal');
		//eliminate title attr
		overlay.removeAttr('title');
		//remove HTML content
		overlay.empty();
		//insert wrapper with title and html included
		overlay.append(
			'<div class="modalLiner">'+
			'<div class="modalHeader"><div class="modalTitle">'+title+'</div>'+
			'<a class="modalClose close">'+closeText+'</a>'+
			'</div><div class="modalContent">'+origHtml+
			'</div></div>');
		
		//transfer appropriate style and classes to inner content
		var cont = $('#'+overlay.attr('id')+' .modalContent');
		cont.attr('style',css).attr('class',classes);
		//add standard content class that was removed above
		cont.addClass('modalContent');
		
		//set the preparedIndicator as a class to this element so it is not initialized mult. times
		overlay.addClass(preparedIndicator);
	}
}

//attach overlay 
function attachStaticOverlay(modal,load){
	load = load==null?false:true;
	modal.overlay({
		load:load,
		// some mask tweaks suitable for modal dialogs
		mask: {color:'black',loadSpeed: 200,opacity: 0.5},
		closeOnClick: false,
		onBeforeLoad: function(){
			//ie7 width
			if($.browser.msie&&$.browser.version.substr(0,1)=="7"){
				var rawContWidth = this.getOverlay().find('DIV.modalContent').css('width');
				//default IE7 width
				rawContWidth = rawContWidth == 'auto' ? '400px' : rawContWidth;
				var contWidth = parseInt(rawContWidth);
				var pL = parseInt(this.getOverlay().find('DIV.modalContent').css('padding-left'));
				var pR = parseInt(this.getOverlay().find('DIV.modalContent').css('padding-right'));
				var mL = parseInt(this.getOverlay().find('DIV.modalContent').css('margin-left'));
				var mR = parseInt(this.getOverlay().find('DIV.modalContent').css('margin-right'));
				this.getOverlay().css('width',(contWidth+pL+pR+mL+mR+2)+'px');
			}	
		},
		onLoad:function(){initFsrButtons();}
	});	
}



/* SPINNER */
function activateSpinner(obj){
	//one spinner at a time
	deactivateSpinner();
	$(obj).spinner();
	activeSpinnerObj = obj;
}
function deactivateSpinner(){
	if(activeSpinnerObj){$(activeSpinnerObj).spinner('remove');}
	activeSpinnerObj = null;
}
