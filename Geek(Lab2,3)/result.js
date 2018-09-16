function res()
{
var a1=document.getElementById("id1").value;
var a2=document.getElementById("id2").value;
var a4=0;
var a5=0;
var a6=0;
var a7=0;



 if(a1!="" && a2!="")
{
a4= (a1-100099)/60;
a5= (a2-150099)/60;
a7=(a4+a5)/2;

document.getElementById("n1").value=a4;
document.getElementById("n2").value=a5;
document.getElementById("num").value=a7;
var t1=0,t2=0,t3=0;
var total=0;
t1=getValue("time");
t2=getValue("time1");
total=parseInt(t1)+parseInt(t2)
var minutes=0
var seconds=0
minutes=total/60;
seconds=total%60;
document.getElementById("t1").value=parseInt(minutes)+" min "+parseInt(seconds)+" sec";
}
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
