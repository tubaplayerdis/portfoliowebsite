window.onload = function() {
    if(window.innerWidth < 600) {
        document.getElementById("navbardesktop").style.setProperty("display", "none", "")
        document.getElementById("navbarmobile").style.setProperty("display", "flex", "")
    } else {
        document.getElementById("navbarmobile").style.setProperty("display", "none", "")
        document.getElementById("navbardesktop").style.setProperty("display", "flex", "")
    }
    console.log("Set navbar onload")
}

window.addEventListener('resize', function(event){
    if(window.innerWidth < 600) {
        document.getElementById("navbardesktop").style.setProperty("display", "none", "")
        document.getElementById("navbarmobile").style.setProperty("display", "flex", "")
    } else {
        document.getElementById("navbarmobile").style.setProperty("display", "none", "")
        document.getElementById("navbardesktop").style.setProperty("display", "flex", "")
    }
    console.log("Set navbar onresize")
});