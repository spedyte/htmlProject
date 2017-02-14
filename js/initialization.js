
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

//rate
var rates=[{'rateId':1,'rateName':'5 stars','rateValue':5},
			{'rateId':2,'rateName':'4 stars','rateValue':4},
			{'rateId':3,'rateName':'3 stars','rateValue':3},
			{'rateId':4,'rateName':'2 stars','rateValue':2},
			{'rateId':5,'rateName':'1 stars','rateValue':1}];
localStorage.setItem('rates', JSON.stringify(rates));
console.log('adding rates....');

//comics
var existComics= JSON.parse(localStorage.getItem('comics'));
if(!existComics)
{
var comics=[
			{'name':'Spring issue','creator':'Grant Morrison','date':'1997/01/02','edition':'first','genre':'superheroes','mainCharacter':'Batman','numberOfVisits':5,'coverImg':'batman01.jpg','rate':5,'isRecommend':1,'searches':245},
			{'name':'Number 52','creator':'Grant Morrison','date':'2000/03/03','edition':'first','genre':'superheroes','mainCharacter':'Batman','numberOfVisits':2,'coverImg':'batman02.jpg','rate':4,'isRecommend':0,'searches':315},
			{'name':'Final act','creator':'Grant Morrison','date':'2006/04/05','edition':'first','genre':'superheroes','mainCharacter':'Batman','numberOfVisits':1,'coverImg':'batman03.jpg','rate':3,'isRecommend':1,'searches':824},
			{'name':'Chapter 204','creator':'Stan Lee','date':'1980/05/06','edition':'first','genre':'superheroes','mainCharacter':'Superman','numberOfVisits':10,'coverImg':'superman01.jpg','rate':2,'isRecommend':0,'searches':445},
			{'name':'Chapter 707','creator':'Stan Lee','date':'1990/09/09','edition':'special','genre':'superheroes','mainCharacter':'Superman','numberOfVisits':2,'coverImg':'superman02.jpg','rate':1,'isRecommend':1,'searches':20},
			{'name':'Chapter 01','creator':'Stan Lee','date':'2005/03/11','edition':'first','genre':'superheroes','mainCharacter':'Superman','numberOfVisits':1,'coverImg':'superman03.jpg','rate':3,'isRecommend':1,'searches':397},
			{'name':'Dragon ball Z 8','creator':'Akira Toriyama','date':'1983/03/03','edition':'first','genre':'aliens','mainCharacter':'Goku','numberOfVisits':9,'coverImg':'dragonballZ01.jpg','rate':5,'isRecommend':1,'searches':417},
			{'name':'Dragon ball Z 9','creator':'Akira Toriyama','date':'1984/04/05','edition':'first','genre':'aliens','mainCharacter':'Goku','numberOfVisits':4,'coverImg':'dragonballZ02.jpg','rate':4,'isRecommend':1,'searches':987},
			{'name':'Dragon ball Z 12','creator':'Akira Toriyama','date':'1985/09/12','edition':'first','genre':'aliens','mainCharacter':'Goku','numberOfVisits':1,'coverImg':'dragonballZ03.jpg','rate':1,'isRecommend':1,'searches':845},
			{'name':'Chapter 17','creator':'Aaron Palo','date':'2004/01/01','edition':'first','genre':'mutants','mainCharacter':'Wolverine','numberOfVisits':11,'coverImg':'wolverine01.jpg','rate':3,'isRecommend':1,'searches':674},
			{'name':'Chapter 004','creator':'Aaron Palo','date':'2005/12/10/','edition':'first','genre':'mutants','mainCharacter':'Wolverine','numberOfVisits':8,'coverImg':'wolverine02.jpg','rate':2,'isRecommend':1,'searches':12},
			{'name':'Chapter5','creator':'Aaron Palo','date':'2006/04/02','edition':'first','genre':'mutants','mainCharacter':'Wolverine','numberOfVisits':3,'coverImg':'wolverine03.jpg','rate':1,'isRecommend':0,'searches':87},
			{'name':'Birth of the power','creator':'Stan Lee','date':'1988/03/08','edition':'first','genre':'superheroes','mainCharacter':'Iron Man','numberOfVisits':7,'coverImg':'ironman01.jpg','rate':5,'isRecommend':1,'searches':99},
			{'name':'Hammer','creator':'Stan Lee','date':'1989/05/22/','edition':'special','genre':'superheroes','mainCharacter':'Iron Man','numberOfVisits':4,'coverImg':'ironman02.jpg','rate':4,'isRecommend':0,'searches':584},
			{'name':'Legacy','creator':'Stan Lee','date':'1990/12/24','edition':'first','genre':'superheroes','mainCharacter':'Iron Man','numberOfVisits':1,'coverImg':'ironman03.jpg','rate':2,'isRecommend':0,'searches':125},
			{'name':'Chapter 1','creator':'Robert Kirkman','date':'2005/02/13','edition':'first','genre':'zombies','mainCharacter':'Rick Grames','numberOfVisits':14,'coverImg':'walkingdead01.jpg','rate':5,'isRecommend':1,'searches':133},
			{'name':'Chapter 2','creator':'Robert Kirkman','date':'2006/02/14','edition':'first','genre':'zombies','mainCharacter':'Rick Grames','numberOfVisits':6,'coverImg':'walkingdead02.jpg','rate':5,'isRecommend':1,'searches':445},
			{'name':'Chapter 100','creator':'Robert Kirkman','date':'2007/02/16','edition':'first','genre':'zombies','mainCharacter':'Rick Grames','numberOfVisits':2,'coverImg':'walkingdead03.jpg','rate':5,'isRecommend':1,'searches':704}
			];
			localStorage.setItem('comics', JSON.stringify(comics));
}
console.log('adding comics....');