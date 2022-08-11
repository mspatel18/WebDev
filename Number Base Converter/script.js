
// $("#btnConvert").click(function(){
//     var number = $("#txtNumber").val(),
//     fromBase = $("#txtFromBase").val(),
//     toBase = $("#txtToBase").val();
//     $("#lblResult").innerText(changeBase(number, fromBase, toBase));
//     //console.log(changeBase(number, fromBase, toBase));
// });
let number = document.getElementById("txtNumber");
let fromBase = document.getElementById("txtFromBase");
let toBase = document.getElementById("txtToBase");

function changeBase(number, fromBase, toBase) {
    if (fromBase == 10)        
        document.getElementById("lblResult").innerHTML = ((parseInt(number)).toString(toBase)).toUpperCase();//return (parseInt(number)).toString(toBase)
    else if (toBase == 10)        
        document.getElementById("lblResult").innerHTML = (parseInt(number, fromBase));//return parseInt(number, fromBase);
    else {
        let numberInDecimal = parseInt(number, fromBase);
        document.getElementById("lblResult").innerHTML = (parseInt(numberInDecimal).toString(toBase)).toUpperCase();
    }
}

//onhover select option dropdown
// function JSDropDown() {
//     var x = document.getElementById("txtFromBase").options.length;
//     document.getElementById("txtFromBase").size = x;
// }