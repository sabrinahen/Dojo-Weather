function loading(){
    alert("This page is  loading...");
}

function removeCookies(id) {
    document.getElementById(id).style.display="none"
}

function changeTemp() {
    var temps = document.querySelectorAll('.temperature')
    var showTemp = document.getElementById('show-temp').value
    if (showTemp === "farrenheit") {
        for (var temp of temps) {
            temp.innerHTML=Math.round(1.8*temp.innerHTML+32);
        }
    }
    else if (showTemp === "celsius") {
        for (var temp of temps) {
            temp.innerHTML=Math.round((temp.innerHTML-32)*.5555);
        }
    }

}