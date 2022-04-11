var topPosition = 200;
var leftPosition = -200;
var pos = 0;

/*
    Set a initial position for puppy
*/
function init(){
    var puppy = document.getElementById("puppy");
    puppy.style.position = 'absolute';
    puppy.style.left = leftPosition + 'px';
    puppy.style.top = topPosition + 'px';

}

function runPuppy() {
    init();
    // to fully disappear, puppy will run over screen width + 200px 是想puupy跑出界

    if(pos < screen.availWidth+ 200){
        pos += 10;
        puppy.style.paddingLeft = pos + 'px';
    } else {
        pos = 0;
    }
    
    // for testing and debugging purpose
    
    console.log("puppy running.");
    console.log("puppy style left: " + puppy.style.left);
    console.log("screen width: " + screen.availWidth);
    console.log("puppy pos:" + pos);
    
}