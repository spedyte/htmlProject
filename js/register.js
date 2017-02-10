

function validateInformation () {
	// body... 
	// 
	// /^[a-z0-9]+$/
	var txtName=document.getElementById('txtName').value;
	var txtPwd=document.getElementById('txtPwd').value;
	var txtPwdCon=document.getElementById('txtPwdCon').value;
	var txtEmail=document.getElementById('txtEmail').value;
	var flags=[true,true,true];
	if(txtName.length<7)
	{
		document.querySelector('#errorName').innerHTML='Use 7 at least characters';
		document.getElementById('errorName').style.visibility='visible';
		flags[0]=false;
	}
	if(txtName.match('/^[a-z0-9]+$/'))
	{
		document.querySelector('#errorName').innerHTML='Only use alpha numeric characters';
		document.getElementById('errorName').style.visibility='visible';
		flags[0]=false;
	}
	if(txtPwd.length<7 || txtPwdCon.length<7)
	{
		document.querySelector('#errorPwd').innerHTML='Use 7 at least characters';
		document.getElementById('errorPwd').style.visibility='visible';
		flags[1]=false;
	}
	if(txtPwd!= txtPwdCon)
	{
		document.querySelector('#errorPwd').innerHTML='Only use alpha numeric characters';
		document.getElementById('errorPwd').style.visibility='visible';
		flags[1]=false;
	}
	if(txtPwd.match('/^[a-z0-9]+$/'))
	{
		document.querySelector('#errorPwd').innerHTML='Only use alpha numeric characters';
		document.getElementById('errorPwd').style.visibility='visible';
		flags[1]=false;
	}
	
	if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(txtEmail))
  	{
		document.querySelector('#errorEmail').innerHTML='Write a valid email direction';
		document.getElementById('errorEmail').style.visibility='visible';
		flags[2]=false;
  	}

	if(flags[2])
	{	document.getElementById('errorEmail').style.visibility='hidden';}

	if(flags[1])
	{	document.getElementById('errorPwd').style.visibility='hidden';}

	if(flags[0])
	{	document.getElementById('errorName').style.visibility='hidden';}

	if((flags[0] && flags[1])&&(flags[2]))
	{
		return true;
	}
	else
	{
		return false;
	}
}

function saveUser(){
	document.getElementById('userExist').style.visibility='none';
	document.getElementById('goodRegister').style.visibility='none';
	if(validateInformation())
	{
		if(!existUser(document.getElementById('txtName').value,document.getElementById('txtPwd').value))
		{
			var validUsrs = JSON.parse(localStorage.getItem('users'));
			validUsrs.push({'userId':validUsrs.length+1,
				'usrName':document.getElementById('txtName').value,
				'usrPwd':document.getElementById('txtPwd').value,
				'usrEmail':document.getElementById('txtEmail').value,
				'usrRol':'user'});
			localStorage.setItem('users', JSON.stringify(validUsrs));
			document.getElementById('btnRegister').style.display='none';
			document.querySelector('#goodRegister').innerHTML='Succesful register!!!!  Please go to Login Page';
			document.getElementById('goodRegister').style.visibility='visible';
		}
		else
		{
			document.getElementById('userExist').style.visibility='visible';
		}
	}
}

function existUser(userName,userPwd)
{
	// Retrieve the object from storage
		var validUsrs = JSON.parse(localStorage.getItem('users'));
		var flag= false;
		//look for the user
		for (i = 0; i < validUsrs.length; i++) { 
		    var usrTemp= validUsrs[i];
		    if(usrTemp.usrName==userName && usrTemp.usrPwd==userPwd)
		    {
		    	return true;
		    }
		}
		return false;
}