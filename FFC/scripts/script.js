function hamburger()
{
	var menu = document.getElementById("menu-links");
	var logo = document.getElementById("ffc_logo");
	if(menu.style.display==="" ||  menu.style.display==="none")
	{
		menu.style.display = "block";
		logo.style.display = "none";
	}
	else
	{
		menu.style.display = "none";
		logo.style.display = "block";
	}
}