window.onload=function()
{
	var c=document.getElementById('cover');
	var v=document.getElementById('introduction_renault');
c.onmouseover=function(){
		v.play();
	};
c.onmouseout=function(){
		v.pause();
	};
}
