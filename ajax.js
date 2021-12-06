function loadfunc(){
    console.log("enter");
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function(){
        console.log(this.responseText);
    }

    xhttp.open("GET", "data.txt");
    xhttp.send();
}