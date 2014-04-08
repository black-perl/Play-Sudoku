/* 
Generates the 9*9 grid
*/
function calculateId(i,j){
    /* supplies the id accoding to innerBoxes and rootBoxes numbers */
    var row;
    var column;

    if(j%3 !=0 ){
        column = j%3;
    }
    else{
        column = 3;
    }
    if(i%3 !=0){
        row = i%3;
    }
    else{
        row = 3;
    }

    var colIndex = (row-1)*3 + column;
    var rowIndex  = (Math.ceil(i/3)-1)*3 + (Math.ceil(j/3));
    return new Array(rowIndex,colIndex);// run-time return of function 
}


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
    var textBoxId = calculateId(i,j);
    textBox.id = "r"+ textBoxId[0] + "c" + textBoxId[1];
    // @ r --> Row , @ c --> column
    textBox.setAttribute("maxlength","1"); // for accepting only on digit in the text box
}
}

