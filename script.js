function goToNextPage() {
    window.location.href = "happy.html";
}

function moveButton() {
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    document.getElementById("noButton").style.left = x + "px";
    document.getElementById("noButton").style.top = y + "px";
}
