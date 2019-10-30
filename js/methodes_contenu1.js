window.onload=function()
{
	// NOTE:La function  pour chiosir le contenu qui va afficher.
	function choisircontenu(titreid){
		var ai=document.getElementById('article_ai');
		var app=document.getElementById('article_app_ai');
		var c1=document.getElementById('cover1');
		var c2=document.getElementById('cover2');
		if (titreid=="cover1") {
				ai.style.display="block";
			  app.style.display="none";
				c1.style.opacity=0;
				c2.style.opacity=0.5;
	}
		else if (titreid=="cover2") {
				app.style.display="block";
			  ai.style.display="none";
				c2.style.opacity=0;
				c1.style.opacity=0.5;
		}
	}
//
// NOTE: Appeler la function.
	var c1=document.getElementById('cover1');
	c1.onclick=function(){choisircontenu(c1.id);};
	var c2=document.getElementById('cover2');
	c2.onclick=function(){choisircontenu(c2.id);};
//
}
