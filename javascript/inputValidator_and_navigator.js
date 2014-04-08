/*
Let the users to add a digit only between 0-9 in the box and only once 
and navigation along the grid is enabled
*/
String.prototype.replaceAt=function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
}

function selectBox( id,keyCode ){
    //selects the appropriate text box by moving up and down the grid
    var currentId = id;
    var targetId = currentId;//the new element to which cursor is to be moved

    if(keyCode == 37 && (currentId[3]-1) ){
        //keyIdentifier = Left
        targetId = targetId.replaceAt(3,'' +(currentId[3]-1));// string - int , answer will be int
        //also during replacement of char by int , int will be automatically converted to char
    }

    else if(keyCode == 38 && (currentId[1]!=1) ){
        //keyIdentifier = Up
         targetId = targetId.replaceAt(1,''+(currentId[1]-1));
    }

    else if(keyCode == 40 && (currentId[1]!=9) ){
        //keyIdentifier = Down
        targetId = targetId.replaceAt(1,''+(parseInt(currentId[1])+1));//otherwise string concatenation will take place
    }       

    else if(keyCode == 39 && currentId[3]!=9){
        //keyIdentifier = Right
        targetId = targetId.replaceAt(3,''+(parseInt(currentId[3])+1));
        //fastest method of string conversion is adding '' 
    }

    return targetId;
}

document.querySelector("#containerDiv").addEventListener("keydown",function(e){
    // keydown event is more general than key press
    console.log(e);

    var currentTextBox = document.getElementById(e.target.id);

    if( e.keyCode>=49 && e.keyCode<=57 )
    {
         
    }
    else if(e.keyCode>=37 && e.keyCode<=40)
    {
        // arrows mapping for moving up and down the grid
        currentTextBox = document.getElementById( selectBox( e.target.id,e.keyCode ) );
        currentTextBox.select();

    }
    else
    {
        e.preventDefault();
        //prevent the default behavior of appearance of that character
        //now we need to do the formatting of character entered in the input box
    }
    },false);
