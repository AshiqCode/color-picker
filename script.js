function main(){
    var rangeOne=document.getElementById("rangeOne").value;
    var rangeTwo=document.getElementById("rangeTwo").value;
    var rangeThree=document.getElementById("rangeThree").value;
    var colorvalue= "rgb(" + rangeOne +"," + rangeTwo +","+ rangeThree+")";
    document.getElementById('mainvalve').innerHTML=colorvalue;

    var newColorDiv=document.getElementById('colorDiv').style.background=colorvalue;
    
    // newColorDiv.setAttribute("class",colorvalue)
    // colorDiv
}
setInterval(main , 1);