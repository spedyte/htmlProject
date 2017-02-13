
createTabs(searchOption,tabOption,"");

document.getElementById('txtSearch').onkeypress = function (e) {
            var keyCode = e.keyCode;
  	if(keyCode==13) {
  		createTabs(searchOption,tabOption,document.getElementById('txtSearch').value);
  	} };


function showContent(el)
{
	searchOption=el.innerHTML;
	createTabs(searchOption,"","");
}

function createTabs(opcion, tab,wordToSearch){
	var queryResult2 , queryResult ;
	var html='';
	switch (opcion) {
		case 'General':
					hide(document.getElementsByClassName('divsOnContent'));
					document.getElementById('generalDiv').style.display = 'block';
					var queryGeners;
					switch (tab) 
					{
						case 'Genres':
							if(wordToSearch) 
							{
								//obtain the geners (especific)
								
								queryGeners= Enumerable.From(JSON.parse(localStorage.getItem('geners')))
										.Where("$.gnrName == '"+wordToSearch+"'")							
				    					.OrderBy("$.gnrName")
				    					.ToArray();
							}
							else
							{
									//obtain the geners
							queryGeners= Enumerable.From(JSON.parse(localStorage.getItem('geners')))							
				    					.OrderBy("$.gnrName")
				    					.ToArray();
							}
							
				    		html+='<table border="0" width="100%">';		
				    		for(i=0;i<queryGeners.length;i++)
				    		{
				    			html+='<tr> <td colspan="'+numberColsComicCovers+'" class="rowGenre">'+queryGeners[i].gnrName+'</td></tr>';
				                rowsToComics = retunrNumberOfRows(Enumerable.From(JSON.parse(localStorage.getItem('comics')))
				    					.Where("$.genre == '"+queryGeners[i].gnrName+"'")
				    					.ToArray().length);
				    			
				    			queryResult2=Enumerable.From(JSON.parse(localStorage.getItem('comics')))
				    					.Where("$.genre == '"+queryGeners[i].gnrName+"'")
				    					.ToArray();
				    			var cont=0;
				    			for(j=0;j<rowsToComics;j++)
				    			{
				    				html+='<tr>';
				    				for(k=0;k< numberColsComicCovers;k++)
				    				{
				    					if(cont<queryResult2.length)
				    					{
					    					html+='<td>';
						    					html+='<table>';
							                        html+='<tr>';
							                            html+='<td colspan="2">';
							                                html+='<img height="150px" width="100px" src="../images/covers/'+queryResult2[cont].coverImg+'">';
							                            html+='</td>';
							                        html+='</tr>';
							                        html+='<tr>';
							                            html+='<td colspan="2">';
							                                html+=queryResult2[cont].name;
							                            html+='</td>';
							                        html+='</tr>';
						                            html+='<tr>';
						                                html+='<td colspan="2">';
						                                    html+= queryResult2[cont].rate+' &hearts;';
						                                html+='</td>';
						                            html+='</tr>';
						                            html+='<tr>';
						                                html+='<td>';
						                                	if(queryResult2[cont].isRecommend)
						                                    	html+='&radic;recommended ';
						                                	else
						                                		html+='&otimes;not recommended';
						                                html+='</td>';
						                            html+='</tr>';
						                        html+='</table>';
						                    html+='</td>';
					                    }
					                    cont++;
				    				}
					                 html+='</tr>';
				    			}
				                html+='</tr>';
				    		}
		    			html+='</table>';
		    			break;


						case 'Editions':
							if(wordToSearch) 
							{
								//obtain the editions (especific)
								
								queryGeners= Enumerable.From(JSON.parse(localStorage.getItem('editions')))
										.Where("$.editionsName == '"+wordToSearch+"'")							
				    					.OrderBy("$.editionsName")
				    					.ToArray();
							}
							else
							{
									//obtain the editions
							queryGeners= Enumerable.From(JSON.parse(localStorage.getItem('editions')))							
				    					.OrderBy("$.editionsName")
				    					.ToArray();
							}
							
				    		html+='<table border="0" width="100%">';		
				    		for(i=0;i<queryGeners.length;i++)
				    		{
				    			html+='<tr> <td colspan="'+numberColsComicCovers+'" class="rowGenre">'+queryGeners[i].editionsName+'</td></tr>';
				                rowsToComics = retunrNumberOfRows(Enumerable.From(JSON.parse(localStorage.getItem('comics')))
				    					.Where("$.edition == '"+queryGeners[i].editionsName+"'")
				    					.ToArray().length);
				    			
				    			queryResult2=Enumerable.From(JSON.parse(localStorage.getItem('comics')))
				    					.Where("$.edition == '"+queryGeners[i].editionsName+"'")
				    					.ToArray();
				    			var cont=0;
				    			for(j=0;j<rowsToComics;j++)
				    			{
				    				html+='<tr>';
				    				for(k=0;k< numberColsComicCovers;k++)
				    				{
				    					if(cont<queryResult2.length)
				    					{
					    					html+='<td>';
						    					html+='<table>';
							                        html+='<tr>';
							                            html+='<td colspan="2">';
							                                html+='<img height="150px" width="100px" src="../images/covers/'+queryResult2[cont].coverImg+'">';
							                            html+='</td>';
							                        html+='</tr>';
							                        html+='<tr>';
							                            html+='<td colspan="2">';
							                                html+=queryResult2[cont].name;
							                            html+='</td>';
							                        html+='</tr>';
						                            html+='<tr>';
						                                html+='<td colspan="2">';
						                                    html+= queryResult2[cont].rate+' &hearts;';
						                                html+='</td>';
						                            html+='</tr>';
						                            html+='<tr>';
						                                html+='<td>';
						                                	if(queryResult2[cont].isRecommend)
						                                    	html+='&radic;recommended ';
						                                	else
						                                		html+='&otimes;not recommended';
						                                html+='</td>';
						                            html+='</tr>';
						                        html+='</table>';
						                    html+='</td>';
					                    }
					                    cont++;
				    				}
					                 html+='</tr>';
				    			}
				                html+='</tr>';
				    		}
		    			html+='</table>';
						break;
						case 'News':
							if(wordToSearch) 
							{
								//obtain the new dates (especific)
								
								queryGeners= Enumerable.From(JSON.parse(localStorage.getItem('comics'))).Distinct("$.mainCharacter")
										.Where("$.mainCharacter == '"+wordToSearch+"'")
				    					.ToArray();
							}
							else
							{
									//obtain the new dates
								queryGeners= Enumerable.From(JSON.parse(localStorage.getItem('comics'))).Distinct("$.date")
										.OrderByDescending("$.date").Take(5)
				    					.ToArray();
							}
							
						
				    		html+='<table border="0" width="100%">';		
				    		for(i=0;i<queryGeners.length;i++)
				    		{
				    			html+='<tr> <td colspan="'+numberColsComicCovers+'" class="rowGenre">'+queryGeners[i].date+'</td></tr>';
				                rowsToComics = retunrNumberOfRows(Enumerable.From(JSON.parse(localStorage.getItem('comics')))
				    					.Where("$.date == '"+queryGeners[i].date+"'")
				    					.ToArray().length);
				    			queryResult2=Enumerable.From(JSON.parse(localStorage.getItem('comics')))
				    					.Where("$.date == '"+queryGeners[i].date+"'")
				    					.ToArray();
				    			var cont=0;
				    			for(j=0;j<rowsToComics;j++)
				    			{
				    				html+='<tr>';
				    				for(k=0;k< numberColsComicCovers;k++)
				    				{
				    					if(cont<queryResult2.length)
				    					{
					    					html+='<td>';
						    					html+='<table>';
							                        html+='<tr>';
							                            html+='<td colspan="2">';
							                                html+='<img height="150px" width="100px" src="../images/covers/'+queryResult2[cont].coverImg+'">';
							                            html+='</td>';
							                        html+='</tr>';
							                        html+='<tr>';
							                            html+='<td colspan="2">';
							                                html+=queryResult2[cont].name;
							                            html+='</td>';
							                        html+='</tr>';
						                            html+='<tr>';
						                                html+='<td colspan="2">';
						                                    html+= queryResult2[cont].rate+' &hearts;';
						                                html+='</td>';
						                            html+='</tr>';
						                            html+='<tr>';
						                                html+='<td>';
						                                	if(queryResult2[cont].isRecommend)
						                                    	html+='&radic;recommended ';
						                                	else
						                                		html+='&otimes;not recommended';
						                                html+='</td>';
						                            html+='</tr>';
						                        html+='</table>';
						                    html+='</td>';
					                    }
					                    cont++;
				    				}
					                 html+='</tr>';
				    			}
				                html+='</tr>';
				    		}
		    			html+='</table>';
							break;
						case 'Characters':
							if(wordToSearch) 
							{								
								//we obtain the characters (especific)
								queryGeners= Enumerable.From(JSON.parse(localStorage.getItem('comics'))).Distinct("$.mainCharacter")
										.Where("$.mainCharacter == '"+wordToSearch+"'")
				    					.ToArray();
							}
							else
							{
								//we obtain the character
								queryGeners= Enumerable.From(JSON.parse(localStorage.getItem('comics'))).Distinct("$.mainCharacter")
										.OrderBy("$.mainCharacter")
				    					.ToArray();
							}
							
				    		html+='<table border="0" width="100%">';		
				    		for(i=0;i<queryGeners.length;i++)
				    		{
				    			html+='<tr> <td colspan="'+numberColsComicCovers+'" class="rowGenre">'+queryGeners[i].mainCharacter+'</td></tr>';
				                rowsToComics = retunrNumberOfRows(Enumerable.From(JSON.parse(localStorage.getItem('comics')))
				    					.Where("$.mainCharacter == '"+queryGeners[i].mainCharacter+"'")
				    					.ToArray().length);
				    			queryResult2=Enumerable.From(JSON.parse(localStorage.getItem('comics')))
				    					.Where("$.mainCharacter == '"+queryGeners[i].mainCharacter+"'")
				    					.ToArray();
				    			var cont=0;
				    			for(j=0;j<rowsToComics;j++)
				    			{
				    				html+='<tr>';
				    				for(k=0;k< numberColsComicCovers;k++)
				    				{
				    					if(cont<queryResult2.length)
				    					{
					    					html+='<td>';
						    					html+='<table>';
							                        html+='<tr>';
							                            html+='<td colspan="2">';
							                                html+='<img height="150px" width="100px" src="../images/covers/'+queryResult2[cont].coverImg+'">';
							                            html+='</td>';
							                        html+='</tr>';
							                        html+='<tr>';
							                            html+='<td colspan="2">';
							                                html+=queryResult2[cont].name;
							                            html+='</td>';
							                        html+='</tr>';
						                            html+='<tr>';
						                                html+='<td colspan="2">';
						                                    html+= queryResult2[cont].rate+' &hearts;';
						                                html+='</td>';
						                            html+='</tr>';
						                            html+='<tr>';
						                                html+='<td>';
						                                	if(queryResult2[cont].isRecommend)
						                                    	html+='&radic;recommended ';
						                                	else
						                                		html+='&otimes;not recommended';
						                                html+='</td>';
						                            html+='</tr>';
						                        html+='</table>';
						                    html+='</td>';
					                    }
					                    cont++;
				    				}
					                 html+='</tr>';
				    			}
				                html+='</tr>';
				    		}
		    			html+='</table>';
							break;
						default:
							// statements_def
							break;
				}
				document.getElementById(tab).innerHTML=html;
			break;

		case 'Popular':
			hide(document.getElementsByClassName('divsOnContent'));
			document.getElementById('popularDiv').style.display = 'visible';
			break;
		case 'Qualifications':
			if(!wordToSearch) 
			{								
				hide(document.getElementsByClassName('divsOnContent'));
				//we obtain the comics
				queryResult= Enumerable.From(JSON.parse(localStorage.getItem('comics'))).Distinct()
						.OrderByDescending("$.rate")
    					.ToArray();
			
	    		html+='<table border="0" width="100%">';		
	    		var cont=0;
	    		for(i=0;i<queryResult.length;i++)
	    		{
	    				html+='<tr>';
	    				for(k=0;k< numberColsComicCovers;k++)
	    				{
	    					if(cont<queryResult.length)
	    					{
		    					html+='<td>';
			    					html+='<table>';
				                        html+='<tr>';
				                            html+='<td colspan="2">';
				                                html+='<img height="150px" width="100px" src="../images/covers/'+queryResult[cont].coverImg+'">';
				                            html+='</td>';
				                        html+='</tr>';
				                        html+='<tr>';
				                            html+='<td colspan="2">';
				                                html+=queryResult[cont].name;
				                            html+='</td>';
				                        html+='</tr>';
			                            html+='<tr>';
			                                html+='<td colspan="2">';
			                                    html+= queryResult[cont].rate+' &hearts;';
			                                html+='</td>';
			                            html+='</tr>';
			                            html+='<tr>';
			                                html+='<td>';
			                                	if(queryResult[cont].isRecommend)
			                                    	html+='&radic;recommended ';
			                                	else
			                                		html+='&otimes;not recommended';
			                                html+='</td>';
			                            html+='</tr>';
			                        html+='</table>';
			                    html+='</td>';
		                    }
		                    cont++;
	    				}
		                 html+='</tr>';
		    	}
				html+='</table>';
				document.getElementById('qualDiv').innerHTML=html;
				document.getElementById('qualDiv').style.display = 'block';
			}
			break;
		case 'Top Searches':
			
			if(!wordToSearch) 
			{								
				hide(document.getElementsByClassName('divsOnContent'));
				//we obtain the comics
				queryResult= Enumerable.From(JSON.parse(localStorage.getItem('comics'))).Distinct()
						.OrderByDescending("$.rate").Take(5)
    					.ToArray();
			
	    		html+='<table border="0" width="100%">';		
	    		var cont=0;
	    		for(i=0;i<queryResult.length;i++)
	    		{
	    				html+='<tr>';
	    				for(k=0;k< numberColsComicCovers;k++)
	    				{
	    					if(cont<queryResult.length)
	    					{
		    					html+='<td>';
			    					html+='<table>';
				                        html+='<tr>';
				                            html+='<td colspan="2">';
				                                html+='<img height="150px" width="100px" src="../images/covers/'+queryResult[cont].coverImg+'">';
				                            html+='</td>';
				                        html+='</tr>';
				                        html+='<tr>';
				                            html+='<td colspan="2">';
				                                html+=queryResult[cont].name;
				                            html+='</td>';
				                        html+='</tr>';
			                            html+='<tr>';
			                                html+='<td colspan="2">';
			                                    html+= queryResult[cont].rate+' &hearts;';
			                                html+='</td>';
			                            html+='</tr>';
			                            html+='<tr>';
			                                html+='<td>';
			                                	if(queryResult[cont].isRecommend)
			                                    	html+='&radic;recommended ';
			                                	else
			                                		html+='&otimes;not recommended';
			                                html+='</td>';
			                            html+='</tr>';
			                        html+='</table>';
			                    html+='</td>';
		                    }
		                    cont++;
	    				}
		                 html+='</tr>';
		    	}
				html+='</table>';
				document.getElementById('topDiv').innerHTML=html;
				document.getElementById('topDiv').style.display = 'block';
			}
			break;
		case 'Recommended':
			if(!wordToSearch) 
			{								
				hide(document.getElementsByClassName('divsOnContent'));
				//we obtain the comics
				queryResult= Enumerable.From(JSON.parse(localStorage.getItem('comics')))
						.Where("$.isRecommend == 1")
    					.ToArray();
			
	    		html+='<table border="0" width="100%">';		
	    		var cont=0;
	    		for(i=0;i<queryResult.length;i++)
	    		{
	    				html+='<tr>';
	    				for(k=0;k< numberColsComicCovers;k++)
	    				{
	    					if(cont<queryResult.length)
	    					{
		    					html+='<td>';
			    					html+='<table>';
				                        html+='<tr>';
				                            html+='<td colspan="2">';
				                                html+='<img height="150px" width="100px" src="../images/covers/'+queryResult[cont].coverImg+'">';
				                            html+='</td>';
				                        html+='</tr>';
				                        html+='<tr>';
				                            html+='<td colspan="2">';
				                                html+=queryResult[cont].name;
				                            html+='</td>';
				                        html+='</tr>';
			                            html+='<tr>';
			                                html+='<td colspan="2">';
			                                    html+= queryResult[cont].rate+' &hearts;';
			                                html+='</td>';
			                            html+='</tr>';
			                            html+='<tr>';
			                                html+='<td>';
			                                	if(queryResult[cont].isRecommend)
			                                    	html+='&radic;recommended ';
			                                	else
			                                		html+='&otimes;not recommended';
			                                html+='</td>';
			                            html+='</tr>';
			                        html+='</table>';
			                    html+='</td>';
		                    }
		                    cont++;
	    				}
		                 html+='</tr>';
		    	}
				html+='</table>';
				document.getElementById('topDiv').innerHTML=html;
				document.getElementById('topDiv').style.display = 'block';
			}
			break;	
			case 'Not recommended':
			if(!wordToSearch) 
			{								
				hide(document.getElementsByClassName('divsOnContent'));
				//we obtain the comics
				queryResult= Enumerable.From(JSON.parse(localStorage.getItem('comics')))
						.Where("$.isRecommend == 0")
    					.ToArray();
			
	    		html+='<table border="0" width="100%">';		
	    		var cont=0;
	    		for(i=0;i<queryResult.length;i++)
	    		{
	    				html+='<tr>';
	    				for(k=0;k< numberColsComicCovers;k++)
	    				{
	    					if(cont<queryResult.length)
	    					{
		    					html+='<td>';
			    					html+='<table>';
				                        html+='<tr>';
				                            html+='<td colspan="2">';
				                                html+='<img height="150px" width="100px" src="../images/covers/'+queryResult[cont].coverImg+'">';
				                            html+='</td>';
				                        html+='</tr>';
				                        html+='<tr>';
				                            html+='<td colspan="2">';
				                                html+=queryResult[cont].name;
				                            html+='</td>';
				                        html+='</tr>';
			                            html+='<tr>';
			                                html+='<td colspan="2">';
			                                    html+= queryResult[cont].rate+' &hearts;';
			                                html+='</td>';
			                            html+='</tr>';
			                            html+='<tr>';
			                                html+='<td>';
			                                	if(queryResult[cont].isRecommend)
			                                    	html+='&radic;recommended ';
			                                	else
			                                		html+='&otimes;not recommended';
			                                html+='</td>';
			                            html+='</tr>';
			                        html+='</table>';
			                    html+='</td>';
		                    }
		                    cont++;
	    				}
		                 html+='</tr>';
		    	}
				html+='</table>';
				document.getElementById('topDiv').innerHTML=html;
				document.getElementById('topDiv').style.display = 'block';
			}
			break;	
		default:
			// statements_def
			//document.getElementById('welcomeDiv').style.display ='block';
			break;
	}
	 document.getElementById('txtSearch').value='';
}


function retunrNumberOfRows(totalComicsToShow)
{
	var rows=(totalComicsToShow-(totalComicsToShow%numberColsComicCovers))/(numberColsComicCovers);
	if((numberColsComicCovers*rows)<totalComicsToShow)
		return ++rows;
	else
		return rows;
}

function searchByWordAndFilter(){
	var wordToSearch = document.getElementById('txtSearch').value;
	createTabs(searchOption,tabOption,wordToSearch);

}