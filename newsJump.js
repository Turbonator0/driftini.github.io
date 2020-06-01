function bindNews() {
    document.getElementById("jumper").addEventListener("click",newsJump)
}

function newsJump() {
    location.hash = document.getElementById("jumpselect").value
}