function add() {
    var temp = document.getElementById("mySelect").value
    for (var i = 0; i < temp; i++) {
        var para = document.createElement("input");
        var element = document.getElementById("added");
        element.appendChild(para);
    }
}