function loginSite(){
	var usr= document.getElementById('txtUser').value;
	var pwd = document.getElementById('txtPwd').value;
	//check if the user type values to procede to verify them
	if(usr && pwd)
	{
		// Retrieve the object from storage
		var validUsrs = JSON.parse(localStorage.getItem('users'));
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
			window.location = "index.html";
		}
		else
		{
			document.querySelector('#loginError').innerHTML='You dont have an account in this site.<br/> Please create an account ;)';

		}
	}
	else
	{
		document.querySelector('#loginError').innerHTML='You have to write your user and password';
	}
}

document.getElementById('txtUser').focus();
document.getElementById('txtUser').select();
document.addEventListener("keydown", keyDownTextField, false);

function keyDownTextField(e) {
	var keyCode = e.keyCode;
  	if(keyCode==13) {
  		loginSite();
  	} 
}