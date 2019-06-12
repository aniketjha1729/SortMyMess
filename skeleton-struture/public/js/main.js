function add() {
    var temp = document.getElementById("mySelect").value
    var array_input=["Name","Email","Phone"]
    var form=document.createElement("form");
    form.classList.add("form-style");
    form.action="/post";
    form.method="POST";
    var button=document.createElement("button");
    button.classList.add("btn","btn-success");
    button.appendChild(document.createTextNode("Submit"));
    for (var i = 0; i < temp; i++) {
        var divison = document.createElement("div");
        divison.classList.add("div-style");
        for(var j=0;j<3;j++){
            var inputfield=document.createElement("input");
            inputfield.classList.add("input-style")
            inputfield.placeholder=array_input[j];
            inputfield.name=array_input[j].concat(i.toString());
            divison.appendChild(inputfield);
        }
        form.appendChild(divison);
    }
    form.appendChild(button);
    document.getElementById("container").appendChild(form);
}