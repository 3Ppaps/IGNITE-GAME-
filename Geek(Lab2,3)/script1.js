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


if(v1=="b")
{
id=id+4;
}


if(v2=="c")
{
id=id+4;

}

if(v3=="b")
{
id=id+4;
}


if(v4=="a")
{
id=id+4;
}



if(v5=="c")
{
id=id+4;
}



if(v6=="d")
{
id=id+4;
}


if(v7=="b")
{
id=id+4;
}


if(v8=="d")
{
id=id+4;
}


if(v9=="a")
{
id=id+4;
}



if(v10=="d")
{
id=id+4;
}

if(v11=="b")
{
id=id+4;
}

 if(v12=="d")
{
id=id+4;
}


if(v13=="a")
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
re=1000 + id + "99";
document.getElementById("ux").value=re;
}
var c = 0,d=0,s1=0,s2=0,minutes=0;
    function myCounter() {
	minutes=d/60;
	seconds=d%60;
    document.getElementById("demo").innerHTML ="Time:"+parseInt(minutes)+" min "+seconds+" sec";
	d=c++;
	
	document.getElementById("time").value=d;
}
function reset()
{
	document.getElementById("demo1").innerHTML="Total Time:"+parseInt(d)+"&nbsp;"+"sec";
}