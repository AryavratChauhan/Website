
var xmlHttp

//alert("called");



function getValue(op,str,str1)
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Your browser does not support AJAX!");
  return;
  } 
var url="getValues.jsp";
url=url+"?op="+op+"&str="+str+"&str1="+str1;
url=url+"&sid="+Math.random();

if(op=="1") {
xmlHttp.onreadystatechange=stateChanged1;
document.getElementById("txtValue1").innerHTML="<img style='margin:0px;' src='images/loading-icon.gif'>";

}else if(op=="2") {
xmlHttp.onreadystatechange=stateChanged2;
document.getElementById("txtValue2").innerHTML="<img style='margin:0px;' src='images/loading-icon.gif'>";
}else if(op=="3") {
xmlHttp.onreadystatechange=stateChanged3;
document.getElementById("txtValue3").innerHTML="<img style='margin:0px;' src='images/loading-icon.gif'>";
}else if(op=="4") {
xmlHttp.onreadystatechange=stateChanged4;
document.getElementById("txtValue4").innerHTML="<img style='margin:0px;' src='images/loading-icon.gif'>";

}else if(op=="5") {
xmlHttp.onreadystatechange=stateChanged5;
document.getElementById("txtValue5").innerHTML="<img style='margin:0px;' src='images/loading-icon.gif'>";

}else if(op=="6") {
xmlHttp.onreadystatechange=stateChanged6;
document.getElementById("txtValue6").innerHTML="<img style='margin:0px;' src='images/loading-icon.gif'>";

}else if(op=="7") {
xmlHttp.onreadystatechange=stateChanged7;
document.getElementById("txtValue7").innerHTML="<img style='margin:0px;' src='images/loading-icon.gif'>";

}else if(op=="8") {
xmlHttp.onreadystatechange=stateChanged8;
document.getElementById("txtValue8").innerHTML="<img style='margin:0px;' src='images/loading-icon.gif'>";

}else if(op=="9") {
xmlHttp.onreadystatechange=stateChanged9;
document.getElementById("txtValue9").innerHTML="<img style='margin:0px;' src='images/loading-icon.gif'>";

}else if(op=="10") {
xmlHttp.onreadystatechange=stateChanged10;
document.getElementById("txtValue10").innerHTML="<img style='margin:0px;' src='images/loading-icon.gif'>";

}else if(op=="11") {
xmlHttp.onreadystatechange=stateChanged11;
document.getElementById("txtValue11").innerHTML="<img style='margin:0px;' src='images/loading-icon.gif'>";

}else if(op=="12") {
xmlHttp.onreadystatechange=stateChanged12;
document.getElementById("txtValue12").innerHTML="<img style='margin:0px;' src='images/loading-icon.gif'>";

}else if(op=="13") {
xmlHttp.onreadystatechange=stateChanged13;
document.getElementById("txtValue13").innerHTML="<img style='margin:0px;' src='images/loading-icon.gif'>";

}else if(op=="14") {
xmlHttp.onreadystatechange=stateChanged14;
document.getElementById("txtValue14").innerHTML="<img style='margin:0px;' src='images/loading-icon.gif'>";

}else if(op=="15") {
xmlHttp.onreadystatechange=stateChanged15;
document.getElementById("txtValue15").innerHTML="<img style='margin:0px;' src='images/loading-icon.gif'>";

}else if(op=="16") {
xmlHttp.onreadystatechange=stateChanged16;
document.getElementById("txtValue16").innerHTML="<img style='margin:0px;' src='images/loading-icon.gif'>";

}else if(op=="17") {
xmlHttp.onreadystatechange=stateChanged17;
document.getElementById("txtValue17").innerHTML="<img style='margin:0px;' src='images/loading-icon.gif'>";

}else if(op=="18") {
xmlHttp.onreadystatechange=stateChanged18;
document.getElementById("txtValue18").innerHTML="<img style='margin:0px;' src='images/loading-icon.gif'>";

}else if(op=="19") {
xmlHttp.onreadystatechange=stateChanged19;
document.getElementById("txtValue19").innerHTML="<img style='margin:0px;' src='images/loading-icon.gif'>";

}else if(op=="20") {
xmlHttp.onreadystatechange=stateChanged20;
document.getElementById("txtValue20").innerHTML="<img style='margin:0px;' src='images/loading-icon.gif'>";

}
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
}

function stateChanged1() 
{ 
if (xmlHttp.readyState==4)
{ 
document.getElementById("txtValue1").innerHTML=xmlHttp.responseText;
}
}

function stateChanged2() 
{ 
if (xmlHttp.readyState==4)
{ 
document.getElementById("txtValue2").innerHTML=xmlHttp.responseText;
}
}

function stateChanged3() 
{ 
if (xmlHttp.readyState==4)
{ 
document.getElementById("txtValue3").innerHTML=xmlHttp.responseText;
}
}

function stateChanged4() 
{ 
if (xmlHttp.readyState==4)
{ 
document.getElementById("txtValue4").innerHTML=xmlHttp.responseText;
}
}

function stateChanged5() 
{ 
if (xmlHttp.readyState==4)
{ 
document.getElementById("txtValue5").innerHTML=xmlHttp.responseText;
}
}

function stateChanged6() 
{ 
if (xmlHttp.readyState==4)
{ 
document.getElementById("txtValue6").innerHTML=xmlHttp.responseText;
}
}

function stateChanged7() 
{ 
if (xmlHttp.readyState==4)
{ 
document.getElementById("txtValue7").innerHTML=xmlHttp.responseText;
}
}

function stateChanged8() 
{ 
if (xmlHttp.readyState==4)
{ 
document.getElementById("txtValue8").innerHTML=xmlHttp.responseText;
}
}


function stateChanged9() 
{ 
if (xmlHttp.readyState==4)
{ 
document.getElementById("txtValue9").innerHTML=xmlHttp.responseText;
}
}



function stateChanged10() 
{ 
if (xmlHttp.readyState==4)
{ 
document.getElementById("txtValue10").innerHTML=xmlHttp.responseText;
}
}



function stateChanged11() 
{ 
if (xmlHttp.readyState==4)
{ 
document.getElementById("txtValue11").innerHTML=xmlHttp.responseText;
}
}


function stateChanged12() 
{ 
if (xmlHttp.readyState==4)
{ 
document.getElementById("txtValue12").innerHTML=xmlHttp.responseText;
}
}


function stateChanged13() 
{ 
if (xmlHttp.readyState==4)
{ 
document.getElementById("txtValue13").innerHTML=xmlHttp.responseText;
}
}


function stateChanged14() 
{ 
if (xmlHttp.readyState==4)
{ 
document.getElementById("txtValue14").innerHTML=xmlHttp.responseText;
}
}



function stateChanged15() 
{ 
if (xmlHttp.readyState==4)
{ 
document.getElementById("txtValue15").innerHTML=xmlHttp.responseText;
}
}


function stateChanged16() 
{ 
if (xmlHttp.readyState==4)
{ 
document.getElementById("txtValue16").innerHTML=xmlHttp.responseText;
}
}



function stateChanged17() 
{ 
if (xmlHttp.readyState==4)
{ 
document.getElementById("txtValue17").innerHTML=xmlHttp.responseText;
}
}



function stateChanged18() 
{ 
if (xmlHttp.readyState==4)
{ 
document.getElementById("txtValue18").innerHTML=xmlHttp.responseText;
}
}




function stateChanged19() 
{ 
if (xmlHttp.readyState==4)
{ 
document.getElementById("txtValue19").innerHTML=xmlHttp.responseText;
}
}



function stateChanged20() 
{ 
if (xmlHttp.readyState==4)
{ 
document.getElementById("txtValue20").innerHTML=xmlHttp.responseText;
}
}





function GetXmlHttpObject()
{
var xmlHttp=null;
try
  {
  // Firefox, Opera 8.0+, Safari
  xmlHttp=new XMLHttpRequest();
  }
catch (e)
  {
  // Internet Explorer
  try
    {
    xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
    }
  catch (e)
    {
    xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
  }
return xmlHttp;
}