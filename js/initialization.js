//alert('Welcome to Comics Armando!');

// agregamos los datos al local storage
localStorage.clear();
console.log('limpiando local storage...');
//rol
var roles = [{'rolId':1,'rolName': 'admin','rolDesc': 'administrador del sitio'},
			 {'rolId':2,'rolName': 'normal','rolDesc': 'usuario normal del sitio'}];
localStorage.setItem('roles', JSON.stringify(roles));
console.log('insercion roles...');

//usuarios
var usuarios = [{'userId':1,'usrName':'sheldon','usrPwd':'bazinga','usrEmail':'shledon@gmail.com','usrRol':'admin'},
				{'userId':2,'usrName':'armando','usrPwd':'password','usrEmail':'armando@gmail.com','usrRol':'normal'}];
localStorage.setItem('usuarios', JSON.stringify(usuarios));
console.log('insercion usuarios...');

//roles
var generos=[{'gnrId':1,'gnrName':'mutantes','gnrDesc':'Comics sobre mutantes'},
			{'gnrId':2,'gnrName':'extraterrestres','gnrDesc':'Comics sobre extraterrestres'}];
localStorage.setItem('generos', JSON.stringify(generos));
console.log('insercion generos...');

//rate
var rates=[{'rateId':1,'rateName':'5 estrellas','rateValue':5},
			{'rateId':2,'rateName':'4 estrellas','rateValue':4},
			{'rateId':3,'rateName':'3 estrellas','rateValue':3},
			{'rateId':4,'rateName':'2 estrellas','rateValue':2},
			{'rateId':5,'rateName':'1 estrellas','rateValue':1}];
localStorage.setItem('rates', JSON.stringify(rates));
console.log('insercion rates....');