function logonSubmit() {
   		document.LogonForm.submit();
	}
	function submitOnEnter(event) {
		if (event.keyCode == 13) {
			logonSubmit();
		}
	}
	

function rememberme() {
	
 	var uid = '';
	var pwd = '';
	var remember = document.getElementById('rememberme');
	if (remember.checked) {
		uid = document.getElementById('userid').value;
	 	pwd = document.getElementById('password').value;
	 	AndroidFunction.rememberMe(uid,pwd);
	}	
	else {
		AndroidFunction.dontrememberMe();
	}	
	logonSubmit();
}	

function populatelogin(uid,password){
	document.getElementById('userid').value = uid;
	document.getElementById('password').value = password;
	if (uid != "") {
		document.getElementById("rememberme").checked = true;
	}
	else {
		document.getElementById("rememberme").checked = false;		
	}
}	

function overrideformsubmission(){
	var link = document.getElementById("sign-in");
	link.setAttribute("href","javascript: rememberme();")
	return false;
}

