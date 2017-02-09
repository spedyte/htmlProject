
// we add data to the local storage
console.log('Initializing local storage...');
//rol
var roles = [{'rolId':1,'rolName': 'administrator','rolDesc': 'website administrator'},
			 {'rolId':2,'rolName': 'user','rolDesc': 'website user'}];
localStorage.setItem('roles', JSON.stringify(roles));
console.log('adding roles...');

//users
var existUsrs= JSON.parse(localStorage.getItem('usuarios'));
if(!existUsrs)
{
	var usuarios = [{'userId':1,'usrName':'sheldon','usrPwd':'bazinga','usrEmail':'shledon@gmail.com','usrRol':'administrator'},
				{'userId':2,'usrName':'armando','usrPwd':'password','usrEmail':'armando@gmail.com','usrRol':'user'}];
	localStorage.setItem('usuarios', JSON.stringify(usuarios));
}

console.log('adding users...');

//roles
var generos=[{'gnrId':1,'gnrName':'mutantes','gnrDesc':'Comics about mutants'},
			{'gnrId':2,'gnrName':'extraterrestres','gnrDesc':'Comics about aliens'}];
localStorage.setItem('generos', JSON.stringify(generos));
console.log('adding geners...');

//rate
var rates=[{'rateId':1,'rateName':'5 estrellas','rateValue':5},
			{'rateId':2,'rateName':'4 estrellas','rateValue':4},
			{'rateId':3,'rateName':'3 estrellas','rateValue':3},
			{'rateId':4,'rateName':'2 estrellas','rateValue':2},
			{'rateId':5,'rateName':'1 estrellas','rateValue':1}];
localStorage.setItem('rates', JSON.stringify(rates));
console.log('adding rates....');