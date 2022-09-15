function mail()
	{
	var n=document.getElementById("email").value;
	    var re=/\S+@\S+\.\S+/;
	    if(re.test(n))
	    	document.getElementById("invalid_mail").innerHTML = "<span style='color: green;'>valid</span>";
	    else
	    	document.getElementById("invalid_mail").innerHTML = "<span style='color: red;'>Invailid Mail!</span>";
	}
	function checkname()
	{
	var k=document.getElementById("Name").value;
	    var re=/^[a-zA-Z]*$/;
	    if(re.test(k))
	    	document.getElementById("invalid_name").innerHTML = "<span style='color: green;'>valid</span>";
	    else
	    	document.getElementById("invalid_name").innerHTML = "<span style='color: red;'>Invailid Mail!</span>"
	}

  function pass_check()
	{
	var pass1=document.getElementById("pass").value;
	var pass2=document.getElementById("cpass").value;
	    if(pass1==pass2)
	    	document.getElementById("pass_validate").innerHTML = "<span style='color: green;'>valid</span>";
	    else
	    	document.getElementById("pass_validate").innerHTML = "<span style='color: red;'>Invailid Password!</span>"
	}

	function checkUname()
	{
		var u=0,l=0,s=0,d=0;
		var x=document.getElementById("uname").value;

		for(i=0;i<x.length;i++)
		{
			if(x.charCodeAt(i)>=65&&x.charCodeAt(i)<=90)
			{
				u++;
			}
			else if(x.charCodeAt(i)>=97&&x.charCodeAt(i)<=122)
			{
				l++;
			}
			else if(x.charCodeAt(i)>=48&&x.charCodeAt(i)<=57)
			{
				d++;
			}
			else
			{
				s++;
			}
		}
		if(u==0||l==0||d==0)
	    {
	 	document.getElementById("invalid_uname").innerHTML = "<span style='color: red;'>Invailid User name!</span>"
	    }
	    else
	    {
	 	document.getElementById("invalid_uname").innerHTML = "<span style='color: green;'>valid</span>";
	    }
	}
 function handleInput(value){
 	window.checkUname()
 }
 function myFunction() {
   var element = document.body;
   element.classList.toggle("dark-mode");
   element.classList.toggle("dark-mode-container");
}