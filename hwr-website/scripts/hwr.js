//toggle the profile details
$('.userInfo').on("click touchend",function(){
	if($(".userInfo .details").hasClass('opened'))
	    {
	        $('.userInfo .details').fadeOut().toggleClass('opened');
	    }
	else {
			$('.userInfo .details').fadeIn().toggleClass('opened');
		}
});

// Make sure a field does accept more than a specified limit.
// This is useful to limit the amount of text accepted in a
// TEXTAREA field, since they do not have an attribute that
// controls this.
function textCounter(field, countfield, maxlimit) {
  if (field.value.length > maxlimit) {
    field.value = field.value.substring(0, maxlimit);
  } else {
    // otherwise, update 'characters left' counter
    countfield.value = maxlimit - field.value.length;
  }
}


/*
 this function is to nullify the fields when user just enter empty spaces 
 and submit page.because validation framwork validwhen rule is concidering
 empty spaces also a value which is voilating the some commmen principles 

*/

function isBlank(val){
	if(val==null){
	
	return true;
	}
	for(var i=0;i<val.length;i++) {
		if ((val.charAt(i)!=' ')&&(val.charAt(i)!="\t")&&(val.charAt(i)!="\n")&&(val.charAt(i)!="\r"))
		{
		
		return false;
		}
		}
	return true;
	
	}
	function setNullIfBlank(obj){if(isBlank(obj.value)){obj.value="";}}
//--------------------end of setNullIfBlank function -------------------//


	function stopBubble() {
	    var iKey;
	    var eAny_Event = window.event;
	    iKey = eAny_Event.keyCode;
	    if(iKey==13) {
	        window.event.cancelBubble=true;
	    }
	}