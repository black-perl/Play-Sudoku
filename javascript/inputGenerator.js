/*
Storing the values of all elements in sudoku to a 2d array i.e generates the input 
*/

function getValues(){

    var grid = new Array();
    
    var targetId;

    for(var i=1;i<=9;i++)
    {
        var colData = new Array();
        for(var j=1;j<=9;j++)
        {   

            targetId = 'r' + i + 'c' + j;
            //console.log(targetId);
            colData[j-1] = document.querySelector('#'+targetId).value;
            //console.log(document.querySelector('#'+targetId).value);

        }
        //console.log(colData);
        grid[i-1] = colData;
        //console.log(grid[i-1]);
    }
    return grid;
}
 
window.onload = function(e){ //making the event to fire up on window load
document.querySelector("#submitButton").addEventListener("click",function(e)
    {
        console.log(getValues());
    }
    ,false);

};