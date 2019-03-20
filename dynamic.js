function getfile(file,callback)
{
var xhr=new XMLHttpRequest();
xhr.overrideMimeType("application/json");
xhr.open("GET",file,true);
xhr.onreadystatechange=function(){

if(xhr.readyState===4 && xhr.status=="200" )
{
  callback(xhr.responseText);
}

}
xhr.send(null);

}
getfile("dynamic.json",function(text)
{
  var data=JSON.parse(text);
  console.log(data);
  profile(data.basics);
  profile1(data.career);
  profile2(data.education);
  profile3(data.skills);

}
)



var parent = document.querySelector(".parent");
var child1 = document.querySelector(".child1");
var child2 = document.querySelector(".child2");

function profile(pro)
{
var image = document.createElement("img");
image.src=pro.img;
child1.appendChild(image);
parent.appendChild(child1);


var name = document.createElement("h2");
name.textContent=pro.name;
child1.appendChild(name);
parent.appendChild(child1);

var hr = document.createElement("hr");
child1.appendChild(hr);
parent.appendChild(child1);


var cost = document.createElement("h2");
cost.textContent=pro.cost;
child1.appendChild(cost);
parent.appendChild(child1);

var milage = document.createElement("h2");
milage.textContent=pro.milage;
child1.appendChild(milage);
parent.appendChild(child1);

var email = document.createElement("h2");
email.textContent=pro.email;
child1.appendChild(email);
parent.appendChild(child1);

}
function profile1(proe)
{

 var rh = document.createElement("h1");
 rh.textContent="Resume";
 child2.appendChild(rh);
 parent.appendChild(child2);

 var hr = document.createElement("hr");
 child2.appendChild(hr);
 parent.appendChild(child2);

  var info = document.createElement("h2");
  info.textContent=proe.info;
  child2.appendChild(info);
  parent.appendChild(child2);

}
function profile2(edu)
 {


  var rh1 = document.createElement("h1");
  rh1.textContent="Academic Skills";
  child2.appendChild(rh1);
  parent.appendChild(child2);

  var hr1 = document.createElement("hr");
  child2.appendChild(hr1);
  parent.appendChild(child2);

var table =document.createElement("table");
let ww="<tr><th>s.no</th><th>degree</th><th>institute</th><th>year</th></tr>"
let row='';
for(i in edu)
{

  row=row+"<tr>"+"<td>"+edu[i].sno+"</td>"+
    "<td>"+edu[i].degree+"</td>"+
    "<td>"+edu[i].institute+"</td>"+
    "<td>"+edu[i].year+"</td>"+


  "</tr>";

}

table.innerHTML=ww+row;
child2.appendChild(table);
parent.appendChild(child2);

}

function profile3(prog)
{
  var rh2 = document.createElement("h1");
  rh2.textContent="Technical Skills";
  child2.appendChild(rh2);
  parent.appendChild(child2);

  var hr2 = document.createElement("hr");
  child2.appendChild(hr2);
  parent.appendChild(child2);


  var ul=document.createElement(ul);
  child2.appendChild(ul);
  for( i in prog)
  {
    var li=document.createElement("li");
    li.textContent=prog[i].skill;
    ul.append(li);
  }
}
