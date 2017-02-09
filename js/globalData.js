//path of application
var pathApplication='file///:C:/Users/armando.castaneda/Documents/Visual%Studio%Code/htmlProject/htmlProject';

function verifySession()
{
	var activeSession= JSON.parse(sessionStorage.getItem('activeUsr'));
	if(!activeSession)
	{
		window.location='login.html';
	}
	document.getElementById('activeUsrName').textContent=activeSession.usrName;
	if(activeSession.usrRol=='administrator')
	{
		document.getElementById('adminLink').style.display = 'visible';
	}
	else
	{
		document.getElementById('adminLink').style.display = 'none';
	}
}

function closeSession()
{
	sessionStorage.removeItem('activeUsr');
	window.location = "index.html";
}

window.onload = verifySession;

