
createTabs(searchOption,tabOption,"");
//hide(document.getElementsByClassName('divsOnContent'));
//document.getElementById('welcomeDiv').style.display ='block';

function showContent(el)
{
	//hide(document.getElementsByClassName('divsOnContent'));
	searchOption=el.innerHTML;
}

function createTabs(opcion, tab,wordToSearch){

	var queryResult2 ;
	var html='';
	switch (opcion) {
		case 'Popular':
					var queryGeners;
					switch (tab) 
					{
						case 'Genres':
							if(wordToSearch) 
							{
								//obtain the geners
								
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
								//obtain the editions
								
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
								//obtain the characters
								
								queryGeners= Enumerable.From(JSON.parse(localStorage.getItem('comics'))).Distinct("$.mainCharacter")
										.Where("$.mainCharacter == '"+wordToSearch+"'")
				    					.ToArray();
							}
							else
							{
									//obtain the geners
								queryGeners= Enumerable.From(JSON.parse(localStorage.getItem('comics')))
										.OrderByDescending("$.date")
				    					.ToArray();
							}
							
				    		html+='<table border="0" width="100%">';		
				    		for(i=0;i<queryGeners.length;i++)
				    		{
				    			html+='<tr> <td colspan="'+numberColsComicCovers+'" class="rowGenre">'+queryGeners[i].mainCharacter+'</td></tr>';
				                rowsToComics = retunrNumberOfRows(Enumerable.From(JSON.parse(localStorage.getItem('comics')))
				    					.Where("$.mainCharacter == '"+queryGeners[i].mainCharacter+"'")
				    					.ToArray().length);
				    			//alert(rowsToComics);
				    			queryResult2=Enumerable.From(JSON.parse(localStorage.getItem('comics')))
				    					.Where("$.mainCharacter == '"+queryGeners[i].mainCharacter+"'")
				    					.ToArray();
				    			//alert(queryResult2);	
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
								//obtain the characters
								
								queryGeners= Enumerable.From(JSON.parse(localStorage.getItem('comics'))).Distinct("$.mainCharacter")
										.Where("$.mainCharacter == '"+wordToSearch+"'")
				    					.ToArray();
							}
							else
							{
									//obtain the geners
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
				    			//alert(rowsToComics);
				    			queryResult2=Enumerable.From(JSON.parse(localStorage.getItem('comics')))
				    					.Where("$.mainCharacter == '"+queryGeners[i].mainCharacter+"'")
				    					.ToArray();
				    			//alert(queryResult2);	
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
			break;
		case 'Qualifications':
			//document.getElementById('qualDiv').style.display ='block';
			// statements_1
			break;
		case 'Top Searches':
			// statements_1
			//document.getElementById('topDiv').style.display ='block';
			break;
		case 'Recommended':
			// statements_1
			//document.getElementById('recoDiv').style.display ='block';
			break;	
		default:
			// statements_def
			document.getElementById('welcomeDiv').style.display ='block';
			break;
	}
	document.getElementById(tab).innerHTML=html;
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