//path of application
var pathApplication='file///:C:/Users/armando.castaneda/Documents/Visual%Studio%Code/htmlProject/htmlProject';

function verifySession()
{
	var activeSession= JSON.parse(sessionStorage.getItem('activeUsr'));
	if(!activeSession)
	{
		window.location='login.html';
	}
}

window.onload = verifySession;