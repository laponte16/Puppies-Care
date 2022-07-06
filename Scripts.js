var x;
x = $(document);
x.ready(start);

var textRace = $("#textRace")
var imagenRace = $("#imagenRace")
var contentBody = $(".contentBodyInfo")

function start(){

$("#dalmatian").on("click", clickDalmatian);
$("#golden").on("click", clickGolden);
$("#salchicha").on("click", clickSalchicha);
$("#poodle").on("click", clickPoodle);

}

function clickDalmatian(){
    contentBody.fadeOut(500);
    window.setTimeout(function(){textRace.text("Dalmatas");},700);
    imgUrl = "Images/dalmata.jpg"
    window.setTimeout(function(){imagenRace.css("background-image","url(" + imgUrl + ")");},700);
    contentBody.fadeIn(1500);
}

function clickGolden(){
    contentBody.fadeOut(500);
    window.setTimeout(function(){textRace.text("Golden")},700);
    imgUrl = "Images/golden.jpg"
    window.setTimeout(function(){imagenRace.css("background-image","url(" + imgUrl + ")");},700);
    contentBody.fadeIn(1500);
}

function clickSalchicha(){
    contentBody.fadeOut(500);
    window.setTimeout(function(){textRace.text("Salchicha")},700);
    imgUrl = "Images/salchicha.jpg"
    window.setTimeout(function(){imagenRace.css("background-image","url(" + imgUrl + ")");},700);
    contentBody.fadeIn(1500);
}

function clickPoodle(){
    contentBody.fadeOut(500);
    window.setTimeout(function(){textRace.text("Poodle")},700);
    imgUrl = "Images/poodle.jpg"
    window.setTimeout(function(){imagenRace.css("background-image","url(" + imgUrl + ")");},700);
    contentBody.fadeIn(1500);
}