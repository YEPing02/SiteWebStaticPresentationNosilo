window.onload=function()
{
	// NOTE:La function  pour chiosir le contenu qui va afficher.
	function choisircontenu(boxid){
		var si=document.getElementById('article_si');
		var p=document.getElementById('article_3dp');
		var op=document.getElementById('optimisation_intro')
		var tsi=document.getElementById('tourner_si');
		var tp=document.getElementById('tourner_3dp');
		var c=document.getElementById('cover');
		if (boxid=="box_si") {
				optimisation_intro.style.display="none";
			  si.style.display="block";
				p.style.display="none";
				tsi.className ='tourner_solid';
				tp.className ='tourner';
				c.style.opacity=0.5;
	}
		else if (boxid=="box_3dp") {
			optimisation_intro.style.display="none";
			si.style.display="none";
			p.style.display="block";
			tp.className ='tourner_solid';
			tsi.className ='tourner';
			c.style.opacity=0.5;
		}
		else if (boxid=='cover') {
			optimisation_intro.style.display="block";
			si.style.display="none";
			p.style.display="none";
			c.style.opacity=0;
			tp.className ='tourner';
			tsi.className ='tourner';
		}
	}
//
// NOTE: Appeler la function.
	var b1=document.getElementById('box_si');
	b1.onclick=function(){choisircontenu(b1.id);};
	var b2=document.getElementById('box_3dp');
	b2.onclick=function(){choisircontenu(b2.id);};
	var c=document.getElementById('cover');
	c.onclick=function(){choisircontenu(c.id);};
//
}
