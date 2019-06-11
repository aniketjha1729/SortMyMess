function add() {
    var temp = document.getElementById("mySelect").value
    var arraylist = ["division-style1", "division-style2", "division-style3", "division-style4"];
    for (var i = 0; i < temp; i++) {
        var divison = document.createElement("div");
        var divclassname=arraylist[i];
        divison.classList.add(divclassname);
        for(var j=0;j<4;j++){
            var inputfield=document.createElement("input");
            inputfield.classList.add("input-style")
            divison.appendChild(inputfield);
        }
        document.getElementById("added").appendChild(divison);
    }
}