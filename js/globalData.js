//path of application
var pathApplication='file///:C:/Users/armando.castaneda/Documents/Visual%Studio%Code/htmlProject/htmlProject';

//number of cols for the table of covers
var numberColsComicCovers=3;
var searchOption='General';
var tabOption='Genres';

function verifySession()
{
	var activeSession= JSON.parse(sessionStorage.getItem('activeUsr'));
	if(!activeSession)
	{
		window.location='login.html';
	}
	var userType="";
	if(activeSession.usrRol=='administrator')
	{
		document.getElementById('adminLink').style.display = 'visible';
		userType=" (admin)"; 
	}
	else
	{
		document.getElementById('adminLink').style.display = 'none';
	}
	var arrayURL=window.location.href.split('\/'); 
	if(activeSession.usrRol!='administrator' && arrayURL[arrayURL.length-1]=="newComics.html")
	{
		window.location='login.html';
	}
	document.getElementById('activeUsrName').textContent=activeSession.usrName +userType;
}

function closeSession()
{
	sessionStorage.removeItem('activeUsr');
	window.location = "index.html";
}

window.onload = verifySession;

function hide (elements) {
  elements = elements.length ? elements : [elements];
  for (var index = 0; index < elements.length; index++) {
    elements[index].style.display  = 'none';
  }
}

