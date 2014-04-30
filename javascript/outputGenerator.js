/*
Generates the solution for the solved sudoku
*/
/* The basic idea behind the algorithm is that a loop is going on in which every possible 
combination is filled up and the loop counting variables are same for the whole the functions.
*/

function setUnfilled(input){
    // sets all the unfilled elements to "UNASSIGNED"
    for(var i=0; i<9; i++){
        for(var j=0; j<9; j++){
            if( input[i][j] === '' ){
                input[i][j] = "UNASSIGNED";
            }
        }
    }
}

function rowCheck(input, number, current_row){
    // returns a bool depending on whether filling of an element is safe in the row 
    for(var j=0; j <9 ; j++){
        if( input[current_row][j] == number){
            return false; // avoiding unnecessary iterations if the numbers are matched 
        }
        }
    return true; // returns a bool if it's safe to fill
    
}

function columnCheck(input, number, current_column){
    // returns a bool depending upon whether filling of an element in a column is safe
    for(var i=0; i<9 ; i++){
        if( input[i][current_column] == number){
            return false;
        }
        }
    return true; // returns a bool if its safe to fill 

}

function  boxCheck(input, number, current_row, current_column){
    // returns bool depending upon whether filling of a number is OK for this particular box
    // now we need to find out the current box number for iterating over it 
    var box_startRow = Math.floor( current_row / 3 ) * 3;
    var box_startColumn  = Math.floor( current_column / 3) * 3;

    for(var i=0; i<3 ; i++){
        for(var j=0; j<3; j++){
            if( input[box_startRow+i][box_startColumn+j] == number ){
                return false;             
            }
        }
    }
    return true;
}

function isSafe(input, number, current_row, current_column){
    return ( rowCheck(input, number, current_row) && columnCheck(input, number, current_column) && boxCheck(input, number, current_row, current_column ));
    // how to break multiline statements in javascript
}

function unfilledLocation(input){
    // returns the location of first empty element
    for(var i=0; i<9; i++){
        for(var j=0; j<9; j++){
            if( input[i][j] === "UNASSIGNED"){
                return [i,j]; // returns an array
            }
        }
    }
    return true; // all elements filled success
}

function solveSudoku(input){
    // iterartively solves the sudoku
    var row;
    var column;

    if( unfilledLocation(input) == true ){ // 1 == true works  while(1)
        //console.log("success");
        return true; // sudoku has been solved Hurray!!
    }

    else{

        var locationData = unfilledLocation(input); // actual initialisation of array
        //console.log(locationData);
        row = locationData[0];
        column = locationData[1];
    }
    
    for(var number=1; number<=9 ; number++){
       if(isSafe(input,number,row,column)){
            input[row][column] = number;
            if(solveSudoku(input)){
                return true;// this will return true when whole the sudoku is filled up
            }
            else{
                input[row][column] = "UNASSIGNED";
            }
       }
       
    }
    return false;// backtracking trigger if the isSafe function return false
    
}

function putValues(input){
    // renders the grid with the solved values
    var targetId;
    for(var i=1; i<=9;i++)
    {
        for(var j=1;j<=9;j++)
        {   
            targetId = 'r' + i + 'c' + j;
            var selected = document.querySelector('#'+targetId);
            if(selected.getAttribute("dummy") === "unsolved")
                selected.className = "solved"; //changing the class 
            selected.value = input[i-1][j-1];

        }
    }
}

window.onload = function(e){ //making the event to fire up on window load
document.querySelector("#submitButton").addEventListener("click",function(e)
    {
        var input = getValues(); // calls the function from the input generator js file
        // checkout how to do that 
        setUnfilled(input);
        solveSudoku(input);
        putValues(input);
    }
    ,false);

};