window.onload=function()
{
	// NOTE:La function  pour chiosir le contenu qui va afficher.
	function choisircontact(logoid){
		var f=document.getElementById('contact_fb');
		var m=document.getElementById('contact_mail');
		var fb=document.getElementById('logo_fb');
		var mail=document.getElementById('logo_ut1c');
		if (logoid=="logo_fb") {
				f.style.display="block";
			  m.style.display="none";
				fb.className ='logo_fb_selected';
				mail.className ='logo_ut1c';
	}
		else if (logoid=="logo_ut1c") {
				m.style.display="block";
			  f.style.display="none";
				fb.className ='logo_fb';
				mail.className ='logo_ut1c_selected';

		}
	}
//

// NOTE: Appeler la function.
	var f=document.getElementById('logo_fb');
	f.onclick=function(){choisircontact(f.id);};
	var m=document.getElementById('logo_ut1c');
	m.onclick=function(){choisircontact(m.id);};
//
}
