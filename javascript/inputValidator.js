/*
Let the users to add a digit only between 0-9 in the box and only once 
*/
document.querySelector("#containerDiv").addEventListener("keypress",function(e){
    console.log(e);
    if( e.keyCode>=49 && e.keyCode<=57 )
    {
        //do nothing
    }
    else
    {
        e.preventDefault();
        //prevent the default behavior of appearance of that character
        //now we need to do the formatting of character entered in the input box
    }
    },false);
