//This script is changed from the what UET has send us.
var reqparam = location.search.substr(1);
var devicetype = "";



function hideKeyBoard() {
		 $('#name').off('focus');
		 $('#name').blur();
 		 $('#name').attr('readonly','readonly');
// 		 $('#name').attr('disabled','true');
		 

//		 $('#name').removeAttr('readonly');
//		 $('#name').removeAttr('disabled');
	 
	 if (devicetype == "android") {
		 	AndroidFunction.hidekeyboard();
	 }

	 
//	 $('button').focus();
	 

	 
	 
	
}


function openretailerslist(retailertopicid)
{
	 var url = '/hwrmobile/home.do?source=learn&divid='+retailertopicid;
	 window.location.assign(url);
}

function backtohomepage() {
	var url = '/hwrmobile/home.do?' + reqparam;
	window.location.href = url;
}


function setdevicetoandroid(){
	devicetype = "android";
}

function makeiteditable() {
	 $('#name').removeAttr('readonly');
	// $('#name').removeAttr('disabled');
}

function clearinput() {
	$(this).prev('input').val('').focus();
    $('.deleteicon span').css("display",'none');
	$('button').attr('disabled', true);
		$('#name').remove();
		$('.deleteicon').remove();
		$('#cross').remove();
		$(document).ready( function () {
			$('<input type="text" autocorrect="off" autocapitalize="off" id="name" class="deletable" onclick="makeiteditable();">').prependTo('div.input-container');
			$('input.deletable').wrap('<span class="deleteicon" />').after($('<span  id="cross" onclick="clearinput();"/>'));
		});
		autocmplete();
}


$(document).ready( function () {
		 $('input.deletable').wrap('<span class="deleteicon" />').after($('<span id="cross"/>').click(function() {
 	       clearinput();
	     }));
	autocmplete();
	    
});

