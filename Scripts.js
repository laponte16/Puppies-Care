var data = $("#textRace")
$("#dalmatian").on("click", clickDalmatian());

/*var texto = $("#textRace");
botonDalmata = $("#dalmatian");
botonDalmata.click(clickDalmatian());*/


function clickDalmatian(){
    /*data.fadeOut(1000, function(){});*/
    document.getElementById("textRace").textContent = "jiji nation";
    /*data.fadeIn(500, function(){});*/

}

/* 
function onButtonDalmatian(){
    document.getElementById("textRace").fadeOut("slow", function(){});
    document.getElementById("textRace").textContent = "jiji";
    document.getElementById("textRace").fadeIn("slow", function(){});
}
*/