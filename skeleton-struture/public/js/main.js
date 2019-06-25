
// function add() {
//     var temp = document.getElementById("mySelect").value
//     var input_name=["Name","Email","Phone","Password"];
//     var input_type=["text","email","number","password"];
//     var form=document.createElement("form");
//     form.classList.add("form-style");
//     form.action="/register";
//     form.method="post";
//     var button=document.createElement("button");
//     button.classList.add("btn","btn-success");
//     button.type="Submit";
//     button.appendChild(document.createTextNode("Submit"));
//     for (var i = 0; i < temp; i++) {
//         var divison = document.createElement("div");
//         divison.classList.add("div-style");
//         for(var j=0;j<4;j++){
//             var inputfield=document.createElement("input");
//             inputfield.classList.add("input-style");
//             inputfield.setAttribute("type",input_type[j]);
//             inputfield.placeholder=input_name[j];
//             inputfield.name=input_name[j].concat(i.toString());
//             divison.appendChild(inputfield);
//         }
//         form.appendChild(divison);
//     }
//     form.appendChild(button);
//     document.getElementById("container").appendChild(form);
// }
function editmodal() {
    var modal = document.getElementById("edit");
    //console.log(modal);
    var span = document.getElementsByClassName("close2")[0];
    modal.style.display = "block";
    span.onclick = function () {
        modal.style.display = "none";
    }
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}
