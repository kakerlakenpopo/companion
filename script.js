var list = [
    "... what's troubling you?", "how do you feel about that?", "is there a main reason?", "how could you solve it?"
]
var nextElement = 0;

function question(){
    document.getElementById('questionDisplay').innerHTML = list[nextElement];
    if (nextElement!=3){
        nextElement ++ ;
    }
    else{
        nextElement =1;
    }
}