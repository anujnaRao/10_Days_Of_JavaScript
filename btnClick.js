
var btnCount = document.createElement("Button");

btnCount.innerHTML = '0';
btnCount.id = 'btn';
btnCount.className = 'btnClass';
document.body.appendChild(btnCount);

btnCount.onclick = function() {
    btnCount.innerHTML++;
}
