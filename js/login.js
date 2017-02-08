function loginSite(){
	var usr= document.getElementById('txtUser').value;
	var pwd = document.getElementById('txtPwd').value;
	//check if the user type values to procede to verify them
	if(usr && pwd)
	{
		// Retrieve the object from storage
		var validUsrs = JSON.parse(localStorage.getItem('usuarios'));
		var flag= false;
		//look for the user
		for (i = 0; i < validUsrs.length; i++) { 
		    var usrTemp= validUsrs[i];
		    if(usrTemp.usrName==usr && usrTemp.usrPwd==pwd)
		    {
		    	flag= true;
		    	sessionStorage.setItem('activeUsr', JSON.stringify(validUsrs[i]));
		    }
		}
		if(flag)
		{

			window.location = "welcome.html";
		}
		else
		{
			alert('You dont have an account in this site. Please create an account ;)');
		}
	}
}