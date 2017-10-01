
//this example makes a non-clickable image area if the presentity is offline
var rwc_server=null;
var rwc_ids=null;
var rwc_protocol=null;
// called when this HTML page is loaded in browser; see <body>
function initlinks(){
    if(rwc_ids==null) {
        return;
    }
    var head=document.getElementsByTagName('head').item(0);
    for(i=0;i<rwc_ids.length;i++){
        // called to fetch the current status from the server
        var script=document.createElement('script');
        script.type='text/javascript';
        script.id='myscript'+i;
        script.defer=true;
        script.src=rwc_protocol + '://'+rwc_server+'/status/js?im='+rwc_ids[i];
        head.appendChild(script);
    }
}
//called when the server responds to the fetch with the status
function rwc_statusUpdated(pid,status){
  // var o=document.getElementById("rwc_id_"+pid.replace(/\@/g,":"));
	
	  var o1=document.getElementById("rwc_id_"+pid.replace(/\@/g,":"));
	  var o2=document.getElementById("2rwc_id_"+pid.replace(/\@/g,":"));
	 
    if(rwc_protocol == null)
    	rwc_protocol = document.getElementById("rwc_protocol").value
     if(rwc_server == null)
        rwc_server = document.getElementById("rwc_server").value
    if(o2)
    {
  
   		 //if(document.getElementById("chatbutton") == null )
   		 if(( document.getElementById("toolkit") != null && document.getElementById("toolkit").value == "toolkit" ) 
   		      || (document.getElementById("chatbuttonhome") != null && document.getElementById("chatbuttonhome").value == "replacewithimage" ))
   		 {
   		   //----------------------Commented old code----------------------------
   		       //  this code is used to show icon, donot set chatbutton in jsp to use this
		        //var html='<table border="0"><tr><td style="vertical-align: bottom;padding-bottom: 5px;">';
		       // if(status!='offline'&&status!='away'&&status!='declined'&&status!='busy')
		       // {
		       //    html+='<a href="#" onclick=\'javascript:submitform();return false;\' ><font color="green" size="1.5px" >'+document.getElementById("chatStatusOnline").value+'<font></a> ';
		       //  }
		       //  if(status =='busy')
		       //  {
		       //   html+='<a href="#" onclick=\'javascript:submitform();return false;\' ><font color="black" size="1.5px" >'+document.getElementById("chatStatusBusy").value+'<font></a> ';
		        // }
		        // if(status =='offline')
		      //   {
		       //   html+='<a href="#" onclick=\'javascript:submitform();return false;\' ><font color="red" size="1.5px">'+document.getElementById("chatStatusOffline").value+'<font></a> ';
		       //  }
		       //  html+='</td>';
		       //   html+='<td>';
		       // if(status!='offline'&&status!='away'&&status!='declined')
		       // 	var test="";
		       //     //html+='<a href="#" onclick=\'javascript:submitform();return false;\'>';
		       // else
		      //      status='offline';
		      //      var serverPath = rwc_server.replace(/im-support/g, "");
		        //html+='<img alt="Live Status" src="' + rwc_protocol + '://'+rwc_server+'/images/status/'+status+'.jpg" width="128" height="36" border="0">';
		       // if(status!='offline'&&status!='away'&&status!='declined')
		          // html+='</a>';
		        //o.innerHTML=html;
		        
		      //  html+='<img alt="Live Status" src="' + rwc_protocol + '://'+serverPath+'contractorrewards/images/chatwindow/'+status+'.jpg" width="40" height="39" border="0">';
		        //if(status!='offline'&&status!='away'&&status!='declined')
		           // html+='</a>';
		        //     html+='</td>';
		      //  o.innerHTML=html;
		        //-------------- Implemented new code for EG changes---------------------
		        
		         var serverPath = rwc_server.replace(/im-support/g, "");
   		        //  this code is used to show icon om toolkit
		        var html='';
		        if(status!='offline'&&status!='away'&&status!='declined'&&status!='busy')
		        {
		          html+=''+document.getElementById("chatStatusOnline").value+'<a href="#" onclick=\'javascript:submitform();return false;\' >';
		          //http://wwwqa.foodservicerewards.com//foodservicerewards/images/chatwindow/offline.jpg
		          var imageTag ='<img alt="Live Status" src="' + rwc_protocol + '://'+serverPath+'foodservicerewards/images/chatwindow/'+document.getElementById("liveimage").value + '" border="0"/>';
		          html+= imageTag;
		          html+='</a>';
		         }
		         if(status =='busy')
		         {
		          html+=''+document.getElementById("chatStatusBusy").value+'<a href="#" onclick=\'javascript:submitform();return false;\' >';
		          var imageTag ='<img alt="Live Status" src="' + rwc_protocol + '://'+serverPath+'foodservicerewards/images/chatwindow/'+document.getElementById("busyimage").value + '" border="0"/>';
		          html+= imageTag;
		          html+='</a>';
		         }
		         if(status =='offline')
		         {
		          html+=''+document.getElementById("chatStatusOffline").value+'<a href="#" onclick=\'javascript:submitform();return false;\' >';
		          var imageTag ='<img alt="Live Status" src="' + rwc_protocol + '://'+serverPath+'foodservicerewards/images/chatwindow/'+document.getElementById("offlineimage").value + '" border="0"/>';
		          html+= imageTag;
		          html+='</a>';
		         }
		        
		        o2.innerHTML=html;
		      
           }
      
         } 
         if(o1)
         {
            if(document.getElementById("chatbutton") != null && document.getElementById("chatbutton").value == "replacewithdiv")
           {
              // Old code commented, new EG code added below
              //this code is use to show button, set 'chatbutton' in jsp to use this.Also set language id to get correct image
           	  // var lang = document.getElementById("languageId").value;
           	  // if(lang == 'EN' || lang == 'CE')
           	  //    lang = 'EN';
	          // var html='';
	       	  // if(status!='offline'&&status!='away'&&status!='declined')
	          //  	html+='<a href="#" onclick=\'javascript:submitform();return false;\'>';
	       	  // else
	          //      status='offline';
	          // var serverPath = rwc_server.replace(/im-support/g, "");
	          // html+='<img alt="Live Status" src="' + rwc_protocol + '://'+serverPath+'contractorrewards/images/chatwindow/'+lang+"/"+status+'.jpg" width="128" height="36" border="0">';
	          // if(status!='offline'&&status!='away'&&status!='declined')
	          //    html+='</a>';
	          // o.innerHTML=html;
	           
	           // new code added to show icon based on Eaton Golden changes
	           var html='';
	           if(status!='offline'&&status!='away'&&status!='declined'&&status!='busy')
		        {
		        	status = 'online';
		        }
		        
		       //html+='<div id=\"'+document.getElementById(status).value+'\"';
		       //if(status != 'offline')
		       // {
		       //	 html+=' onclick=\"javascript:submitform();return false;\">';
		       // }
		       // else
		      //  {
		       //  html+= ' >';
		      //  }
		         
		         
		       html+='<div id=\"'+document.getElementById(status).value+'\" onclick=\'javascript:submitform();return false;\'>';
		       html+=document.getElementById("liveHelpText").value;
		       html+='</div>'
		       o1.innerHTML=html;
		       
           }
    }
}

//called to write a clickable link into the document
function rwc_writeLink(pid,domainName, protocol){
 rwc_server = domainName;
 rwc_protocol = protocol;
 if(rwc_ids==null)
     rwc_ids=new Array();
 rwc_ids[rwc_ids.length]=pid;
document.write("<span id='rwc_id_"+pid.replace(/\@/g,":")+"'></span>");
}

function rwc_writeLink2(pid,domainName, protocol){
 rwc_server = domainName;
 rwc_protocol = protocol;
 if(rwc_ids==null)
     rwc_ids=new Array();
 rwc_ids[rwc_ids.length]=pid;
document.write("<span id='2rwc_id_"+pid.replace(/\@/g,":")+"'></span>");
}
