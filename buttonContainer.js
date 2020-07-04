btn5.onclick = function(){
        let bt1 = btn1.innerHTML;
        let bt2 = btn2.innerHTML;
        let bt3 = btn3.innerHTML;
        let bt4 = btn4.innerHTML;
        let bt6 = btn6.innerHTML;
        let bt7 = btn7.innerHTML;
        let bt8 = btn8.innerHTML;
        let bt9 = btn9.innerHTML;

        btn1.innerHTML = bt4;
        btn2.innerHTML = bt1;
        btn3.innerHTML = bt2;
        btn4.innerHTML = bt7;
        btn6.innerHTML = bt3;
        btn7.innerHTML = bt8;
        btn8.innerHTML = bt9;
        btn9.innerHTML = bt6;
    }


// var l = "4";
// var a = ["1", "2", "3", "6", "9", "8", "7", "4"];
// var b = ["1", "2", "3", "6", "9", "8", "7", "4"];

// var rotate = function() {
//     for (var i = 7; i > 0; i--) {
//         a[i] = a[i - 1];
//     }
    
//     a[0] = l;
//     l = a[7];
    
//     for (var i = 0; i < 8; i++) {
//         document.getElementById("btn" + b[i]).innerText = a[i];
//     }
// }
