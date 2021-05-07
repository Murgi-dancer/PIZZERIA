menu_array=["BBQ Chicken Pizza","Neapolitan Pizza","Chicago Pizza","New York-Style Pizza","Sicilian Pizza"," Greek Pizza"," Greek Pizza","Detroit Pizza","St. Louis Pizza","Cappelletti","orzo","taglierini","White Sauce Pasta","Red Sauce Pasta","fettuccine","Choco-LavaCake","Garlic Bread","Ash reshteh","Guthuk","Hakka noodles","Raspberry Ice Cream","Coffee Ice Cream","Caramel Ice Cream","Sea Salt Ice Cream","Bubble Gum Ice Cream."]
 
function getmenu(){
var htmldata;
htmldata="<ol class='menulist'>"
menu_array.sort();
for(var i=0;i<menu_array.length;i++)
{htmldata=htmldata+'<li>'+menu_array[i]+'</li>'



}
htmldata=htmldata+ "</ol>"
document.getElementById("display_menu").innerHTML=htmldata;}

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
menu_array.push(item);
menu_array.sort();
htmldata=htmldata+'<div class="card">' +'<img src="image/pizzaImg.png"/>'+menu_array[i] +'</div>'
 htmldata=htmldata+'<"/section">'
 document.getElementById("display_menu").innerHTML=htmldata;}