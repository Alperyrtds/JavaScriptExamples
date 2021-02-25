//document.getElementById("bio").innerHTML ="Alper Yurtdas: 1996"
// var intro1 = document.getElementById("intro");

// var mesaj = document.getElementById("mesaj");

// mesaj.innerHTML = intro1.innerHTML;

// var allLists = document.getElementsByTagName("ul");
// var cities = allLists[0]

// allElements = cities.getElementsByTagName("li");

// for(i = 0; i< allElements.length; i++){
//     alert(allElements[i].innerHTML);
// }

// var classElements = document.getElementsByClassName("intro1");
// alert(classElements[1].innerHTML);

// var queryElements = document.querySelectorAll("p.intro1");
// alert(queryElements.length);

// var nameElements = document.getElementsByName("customerName");
// alert(nameElements[0].value);

// var alper = document.getElementById("alper").addEventListener("click",changeColor);

// function changeColor() {
    
//     document.getElementById("p1").style.color = "red";
    
//     var nameElements = document.getElementsByName("customerName");
//     nameElements[0].value = "Mustafa";
// }
// var alper = document.getElementById("alper").addEventListener("mouseover",changeColor2);
// function changeColor2() {
//     document.getElementById("p2").style.color = "blue";
// }

// var node = document.getElementById("tree");
// alert(node.childNodes[0].nodeValue);

var heading = document.createElement("h2");
var node = document.createTextNode("Merhaba JavaScript")
heading.appendChild(node);

var div1 = document.getElementById("div1");
var p2 = document.getElementById("p2")

div1.insertBefore(heading,p2)

alert("P2 siliniyor")
div1.removeChild(p2);

alert("Değiştiriliyor");
var p1 = document.getElementById("p1")
div1.replaceChild(heading,p1)

