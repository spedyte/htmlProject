
function validateInformation () {
	// body... 
	// 
	// /^[a-z0-9]+$/
	var txtName=document.getElementById('txtName').value;
	var txtCreator=document.getElementById('txtCreator').value;
	var txtDate=document.getElementById('txtDate').value;
	var txtEdition=document.getElementById('txtEdition').value;
	var txtCharacter=document.getElementById('txtCharacter').value;
	var txtGenre=document.getElementById('txtGenre').value;
	var txtCover=document.getElementById('txtCover').value;


	var flags=[true,true,true,true,true,true,true];
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

	if(txtCreator.length<7)
	{
		document.querySelector('#errorCreator').innerHTML='Use 7 at least characters';
		document.getElementById('errorCreator').style.visibility='visible';
		flags[1]=false;
	}
	if(txtCreator.match('/^[a-z0-9]+$/'))
	{
		document.querySelector('#errorCreator').innerHTML='Only use alpha numeric characters';
		document.getElementById('errorCreator').style.visibility='visible';
		flags[1]=false;
	}

	if(txtDate.length<7)
	{
		document.querySelector('#errorDate').innerHTML='Use 7 at least characters';
		document.getElementById('errorDate').style.visibility='visible';
		flags[2]=false;
	}

	 var m = txtDate.match('^([0-9]{4})/([0-9]{2})/([0-9]{2})$');
	 if(m)
	 {
	 	
	 	var d = (m) ? new Date(m[1], m[2]-1, m[3]) : null;
	 	if(d)
	 	{
	 		var nonRolling = (d&&(txtDate==[d.getFullYear(),("0" + (d.getMonth() + 1)).slice(-2),("0" + d.getDate()).slice(-2)].join('/')));
	 		if(!nonRolling)
	 		{
		 		document.querySelector('#errorDate').innerHTML='Give a valid date';
				document.getElementById('errorDate').style.visibility='visible';
				flags[2]=false;
			}
	 	}
	 }
	else
	{
		document.querySelector('#errorDate').innerHTML='Give a valid format date : aaaa/mm/dd';
		document.getElementById('errorDate').style.visibility='visible';
		flags[2]=false;
	}

	if(txtEdition.length<7)
	{
		document.querySelector('#errorEdition').innerHTML='Use 7 at least characters';
		document.getElementById('errorEdition').style.visibility='visible';
		flags[3]=false;
	}
	if(txtEdition.match('/^[a-z0-9]+$/'))
	{
		document.querySelector('#errorEdition').innerHTML='Only use alpha numeric characters';
		document.getElementById('errorEdition').style.visibility='visible';
		flags[3]=false;
	}

	if(txtGenre.length<7)
	{
		document.querySelector('#errorGenre').innerHTML='Use 7 at least characters';
		document.getElementById('errorGenre').style.visibility='visible';
		flags[4]=false;
	}
	if(txtGenre.match('/^[a-z0-9]+$/'))
	{
		document.querySelector('#errorGenre').innerHTML='Only use alpha numeric characters';
		document.getElementById('errorGenre').style.visibility='visible';
		flags[4]=false;
	}

	if(txtCharacter.length<2)
	{
		document.querySelector('#errorCharacter').innerHTML='Use 7 at least characters';
		document.getElementById('errorCharacter').style.visibility='visible';
		flags[5]=false;
	}
	if(txtCharacter.match('/^[a-z0-9]+$/'))
	{
		document.querySelector('#errorCharacter').innerHTML='Only use alpha numeric characters';
		document.getElementById('errorCharacter').style.visibility='visible';
		flags[5]=false;
	}

	if(txtCover.length<5)
	{
		document.querySelector('#errorCover').innerHTML='Use 7 at least characters';
		document.getElementById('errorCover').style.visibility='visible';
		flags[6]=false;
	}
	else
	{
		var reg= /^[a-z0-9]+(.jpg|.jpeg|.png)$/
		//Checks with the control value.
	    if (!reg.test(txtCover)) {
	        document.querySelector('#errorCover').innerHTML='please introduce a correct file name with extension: <br> jpg |.jpeg |.png| .gif';
			document.getElementById('errorCover').style.visibility='visible';
			flags[6]=false;
	    }

	}


	if(flags[6])
	{	document.getElementById('errorCover').style.visibility='hidden';}
	
	if(flags[5])
	{	document.getElementById('errorCharacter').style.visibility='hidden';}
	
	if(flags[4])
	{	document.getElementById('errorGenre').style.visibility='hidden';}
	
	if(flags[3])
	{	document.getElementById('errorEdition').style.visibility='hidden';}
	
	if(flags[2])
	{	document.getElementById('errorDate').style.visibility='hidden';}

	if(flags[1])
	{	document.getElementById('errorCreator').style.visibility='hidden';}

	if(flags[0])
	{	document.getElementById('errorName').style.visibility='hidden';}

	if((flags[0] && flags[1])&&(flags[2] && flags[3])&&(flags[4] && flags[5]) && flags[6])
	{
		return true;
	}
	else
	{
		return false;
	}
}

function saveComic(){
	document.getElementById('comicExist').style.visibility='none';
	document.getElementById('goodRegister').style.visibility='none';
	if(validateInformation())
	{
		if(!existComic(document.getElementById('txtName').value))
		{
			var validComics = JSON.parse(localStorage.getItem('comics'));
			validComics.push(
				{'name':document.getElementById('txtName').value,
				'creator':document.getElementById('txtCreator').value,
				'date':document.getElementById('txtDate').value,
				'edition':document.getElementById('txtEdition').value,
				'genre':document.getElementById('txtGenre').value,
				'mainCharacter':document.getElementById('txtCharacter').value,
				'numberOfVisits':1,
				'coverImg':document.getElementById('txtCover').value,
				'rate':5,
				'isRecommend':1,
				'searches':1});
			localStorage.setItem('comics', JSON.stringify(validComics));
			//document.getElementById('btnRegister').style.display='none';
			document.querySelector('#goodRegister').innerHTML='Succesful register!!!!';
			document.getElementById('goodRegister').style.visibility='visible';
			document.getElementById('txtName').value='';
			document.getElementById('txtCreator').value='';
			document.getElementById('txtDate').value='';
			document.getElementById('txtEdition').value='';
			document.getElementById('txtGenre').value='';
			document.getElementById('txtCharacter').value='';
			document.getElementById('txtCover').value='';
		}
		else
		{
			document.getElementById('comicExist').style.visibility='visible';
		}
	}
}

function existComic(comicName)
{
	// Retrieve the object from storage
		var validComics = JSON.parse(localStorage.getItem('comics'));
		var flag= false;
		//look for the comic
		for (i = 0; i < validComics.length; i++) { 
		    var comicTemp= validComics[i];
		    if(comicTemp.name==comicName)
		    {
		    	return true;
		    }
		}
		return false;
}