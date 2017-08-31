var add = document.getElementById("addElem");

var list = document.getElementById("list");

add.addEventListener("click", function() {
    var element = document.createElement("li");
    
    var itemNo = list.getElementsByTagName("li");
    
    element.innerHTML = ("item " + itemNo.length);
    
    list.appendChild(element);
});