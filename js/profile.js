loadUser();
function loadUser(){
	var activeSession= JSON.parse(sessionStorage.getItem('activeUsr'));
	if(!activeSession)
	{
		window.location='login.html';
	}
	document.getElementById('txtName').value=activeSession.usrName;
	document.getElementById('txtPwd').value=activeSession.usrPwd;
	document.getElementById('txtEmail').value=activeSession.usrEmail;
}
