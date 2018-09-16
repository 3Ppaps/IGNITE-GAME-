    function test()
{
var id=0;

var v1=document.getElementById("a").value;
var v2=document.getElementById("q2").value;
var v3=document.getElementById("q3").value;
var v4=document.getElementById("q4").value;
var v5=document.getElementById("q5").value;
var v6=document.getElementById("q6").value;
var v7=document.getElementById("q7").value;
var v8=document.getElementById("q8").value;
var v9=document.getElementById("q9").value;
var v10=document.getElementById("q10").value;
var v11=document.getElementById("q11").value;
var v12=document.getElementById("q12").value;
var v13=document.getElementById("q13").value;
var v14=document.getElementById("q14").value;
var v15=document.getElementById("q15").value;

if(v1=="d")
{
id=id+4;
}


if(v2=="c")
{
id=id+4;

}

if(v3=="d")
{
id=id+4;
}


if(v4=="b")
{
id=id+4;
}



if(v5=="b")
{
id=id+4;
}



if(v6=="d")
{
id=id+4;
}


if(v7=="a")
{
id=id+4;
}


if(v8=="a")
{
id=id+4;
}


if(v9=="b")
{
id=id+4;
}



if(v10=="c")
{
id=id+4;
}

if(v11=="a")
{
id=id+4;
}

 if(v12=="e")
{
id=id+4;
}


if(v13=="d")
{
id=id+4;
}


if(v14=="c")
{
id=id+4;
}


if(v15=="b")
{
id=id+4;
}

re=1500 + id + "99";
document.getElementById("ux1").value=re;
}
var c = 0,d=0,s1=0,s2=0,minutes=0,seconds=0;
    function myCounter() {
	minutes=d/60;
	seconds=d%60;
    document.getElementById("demo").innerHTML ="Time:"+parseInt(minutes)+" min "+seconds+" sec";
	d=c++;
	document.getElementById("time1").value=d;
}
function reset()
{
	document.getElementById("demo1").innerHTML="Total Time:"+parseInt(d)+"&nbsp;"+"sec";
}
function getValue(varname)
{
  // First, we load the URL into a variable
  var url = window.location.href;

  // Next, split the url by the ?
  var qparts = url.split("?");

  // Check that there is a querystring, return "" if not
  if (qparts.length == 0)
  {
    return "no data";
  }

  // Then find the querystring, everything after the ?
  var query = qparts[1];

  // Split the query string into variables (separates by &s)
  var vars = query.split("&");

  // Initialize the value with "" as default
  var value = "";

  // Iterate through vars, checking each one for varname
  for (i=0;i<vars.length;i++)
  {
    // Split the variable by =, which splits name and value
    var parts = vars[i].split("=");
    
    // Check if the correct variable
    if (parts[0] == varname)
    {
      // Load value into variable
      value = parts[1];

      // End the loop
      break;
    }
  }
  
  // Convert escape code
  value = unescape(value);

  // Convert "+"s to " "s
  value.replace(/\+/g," ");

  // Return the value
  return value;
}