    function SetURL()
    {
		URLList["Antivirus".toLowerCase()]="indexmain.html#Antivirus";
		URLList["Files".toLowerCase()]="indexmain.html#Files";
		URLList["Hodgepodge".toLowerCase()]="indexmain.html#Hodgepodge";
		URLList["JavascriptLinks".toLowerCase()]="indexmain.html#JavascriptLinks";
		URLList["Software".toLowerCase()]="indexmain.html#Software";
		URLList["SortingIndex".toLowerCase()]="indexmain.html#SortingIndex";
		URLList["Standards".toLowerCase()]="indexmain.html#Standards";
		URLList["Telephone".toLowerCase()]="indexmain.html#Telephone";
		URLList["ThisAndThat".toLowerCase()]="indexmain.html#ThisAndThat";
		URLList["WordVBDLL".toLowerCase()]="indexmain.html#WordVBDLL";
    }

    var locSearch =location.pathname;
	var indexfile = "indexmain.html";
    var ptrlastIndexOf = locSearch.lastIndexOf(indexfile);
    if (ptrlastIndexOf > -1)
		{
			// File must be indexfile, cannot use, say xxxindexfile
			locSearch = locSearch.slice(ptrlastIndexOf); 
			if ((locSearch == indexfile))
				{
					locSearch=location.search.slice(1);
					var blnStatus=Boolean(false);
					var lenSearch=locSearch.length;
					var locHash=location.hash.slice(1);
					var lenHash=locHash.length;
		    
					if  ((lenHash + lenSearch) != 0)
					{
						if((lenHash != 0) && (lenSearch != 0))
							{
								blnStatus = false;
							}
						else
							{
								blnStatus = true;
								if(lenSearch == 0)
									{
										locSearch = locHash;
										var flag = "#";
									}
								else
									{
										var flag = "?";
									}
							}
						if  (blnStatus)
							{
								var URLList = new Object;
								SetURL();
								locSearch = locSearch.toLowerCase();
								flag = flag + locSearch;
								var target = URLList[locSearch];
								if (target == null)
									{
										alert(location.href + " is not a valid URL.");
										location.replace("special-links-javascript.html");
									}
								else if (target.toLowerCase() == (indexfile + flag))
									{
										location.hash = flag;
									}
								else
									{
										location.replace(target);
									}
							}
						else {
								alert(location.href + " is not a valid URL.");
								location.replace("special-links-javascript.html");
							}
						}
					}
		}