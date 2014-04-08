/* 
Generates the 9*9 grid
*/

var containerDiv=document.getElementById("containerDiv");// element is always created wrt to document
for(var i=1;i<=9;i++)
{
var innerBox = document.createElement("div");
containerDiv.appendChild(innerBox);
innerBox.id = "box" + i;// integer  to string conversion is automatically done
innerBox.className = "innerBoxes";
for(var j=1;j<=9;j++)
{
    var rootBox = document.createElement("div");
    innerBox.appendChild(rootBox);
    rootBox.className = "rootBox";
    var textBox = document.createElement("input");// require text boxes for user input
    rootBox.appendChild(textBox);
    textBox.className = "textBoxes";
    textBox.setAttribute("maxlength","1"); // for accepting only on digit in the text box
}
}