
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
	var users = [{'userId':1,'usrName':'sheldon','usrPwd':'bazinga','usrEmail':'shledon@gmail.com','usrRol':'administrator'},
				{'userId':2,'usrName':'armando','usrPwd':'password','usrEmail':'armando@gmail.com','usrRol':'user'}];
	localStorage.setItem('users', JSON.stringify(users));
}

console.log('adding users...');

//roles
var geners=[{'gnrId':1,'gnrName':'mutants','gnrDesc':'Comics about mutants'},
			 {'gnrId':2,'gnrName':'superheroes','gnrDesc':'Comics about super heroes'},
			 {'gnrId':3,'gnrName':'aliens','gnrDesc':'Comics about aliens'},
			 {'gnrId':4,'gnrName':'zombies','gnrDesc':'Comics about zombies'}];
localStorage.setItem('geners', JSON.stringify(geners));
console.log('adding geners...');

//rate
var rates=[{'rateId':1,'rateName':'5 stars','rateValue':5},
			{'rateId':2,'rateName':'4 stars','rateValue':4},
			{'rateId':3,'rateName':'3 stars','rateValue':3},
			{'rateId':4,'rateName':'2 stars','rateValue':2},
			{'rateId':5,'rateName':'1 stars','rateValue':1}];
localStorage.setItem('rates', JSON.stringify(rates));
console.log('adding rates....');

//comics
var comics=[
			{'name':'Spring issue','creator':'Grant Morrison','date':'01/02/1997','edition':'first','genre':'superheroes','mainCharacter':'Batman','numberOfVisits':5,'coverImg':'batman01.jpg','rate':5,'isRecommend':1},
			{'name':'Number 52','creator':'Grant Morrison','date':'03/03/2000','edition':'first','genre':'superheroes','mainCharacter':'Batman','numberOfVisits':2,'coverImg':'batman02.jpg','rate':4,'isRecommend':0},
			{'name':'Final act','creator':'Grant Morrison','date':'04/05/2006','edition':'first','genre':'superheroes','mainCharacter':'Batman','numberOfVisits':1,'coverImg':'batman03.jpg','rate':3,'isRecommend':1},
			{'name':'Chapter 204','creator':'Stan Lee','date':'05/06/1980','edition':'first','genre':'superheroes','mainCharacter':'Superman','numberOfVisits':10,'coverImg':'superman01.jpg','rate':2,'isRecommend':0},
			{'name':'Chapter 707','creator':'Stan Lee','date':'09/09/1990','edition':'first','genre':'superheroes','mainCharacter':'Superman','numberOfVisits':2,'coverImg':'superman02.jpg','rate':1,'isRecommend':1},
			{'name':'Chapter 01','creator':'Stan Lee','date':'03/11/2005','edition':'first','genre':'superheroes','mainCharacter':'Superman','numberOfVisits':1,'coverImg':'superman03.jpg','rate':3,'isRecommend':1},
			{'name':'Dragon ball Z 8','creator':'Akira Toriyama','date':'03/03/1983','edition':'first','genre':'aliens','mainCharacter':'Goku','numberOfVisits':9,'coverImg':'dragonballZ01.jpg','rate':5,'isRecommend':1},
			{'name':'Dragon ball Z 9','creator':'Akira Toriyama','date':'04/05/1984','edition':'first','genre':'aliens','mainCharacter':'Goku','numberOfVisits':4,'coverImg':'dragonballZ02.jpg','rate':4,'isRecommend':1},
			{'name':'Dragon ball Z 12','creator':'Akira Toriyama','date':'09/12/1985','edition':'first','genre':'aliens','mainCharacter':'Goku','numberOfVisits':1,'coverImg':'dragonballZ03.jpg','rate':1,'isRecommend':1},
			{'name':'Chapter 17','creator':'Aaron Palo','date':'01/01/2004','edition':'first','genre':'mutants','mainCharacter':'Wolverine','numberOfVisits':11,'coverImg':'wolverine01.jpg','rate':3,'isRecommend':1},
			{'name':'Chapter 004','creator':'Aaron Palo','date':'13/12/2005','edition':'first','genre':'mutants','mainCharacter':'Wolverine','numberOfVisits':8,'coverImg':'wolverine02.jpg','rate':2,'isRecommend':1},
			{'name':'Chapter5','creator':'Aaron Palo','date':'14/02/2006','edition':'first','genre':'mutants','mainCharacter':'Wolverine','numberOfVisits':3,'coverImg':'wolverine03.jpg','rate':1,'isRecommend':0},
			{'name':'Birth of the power','creator':'Stan Lee','date':'03/08/1988','edition':'first','genre':'superheroes','mainCharacter':'Iron Man','numberOfVisits':7,'coverImg':'ironman01.jpg','rate':5,'isRecommend':1},
			{'name':'Hammer','creator':'Stan Lee','date':'22/05/1989','edition':'first','genre':'superheroes','mainCharacter':'Iron Man','numberOfVisits':4,'coverImg':'ironman02.jpg','rate':4,'isRecommend':0},
			{'name':'Legacy','creator':'Stan Lee','date':'24/12/1990','edition':'first','genre':'superheroes','mainCharacter':'Iron Man','numberOfVisits':1,'coverImg':'ironman03.jpg','rate':2,'isRecommend':0},
			{'name':'Chapter 1','creator':'Robert Kirkman','date':'13/02/2005','edition':'first','genre':'zombies','mainCharacter':'Rick Grames','numberOfVisits':14,'coverImg':'walkingdead01.jpg','rate':5,'isRecommend':1},
			{'name':'Chapter 2','creator':'Robert Kirkman','date':'13/02/2006','edition':'first','genre':'zombies','mainCharacter':'Rick Grames','numberOfVisits':6,'coverImg':'walkingdead02.jpg','rate':5,'isRecommend':1},
			{'name':'Chapter 100','creator':'Robert Kirkman','date':'13/02/2007','edition':'first','genre':'zombies','mainCharacter':'Rick Grames','numberOfVisits':2,'coverImg':'walkingdead03.jpg','rate':5,'isRecommend':1}
			];
			localStorage.setItem('comics', JSON.stringify(comics));
console.log('adding comics....');