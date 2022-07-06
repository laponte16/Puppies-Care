var x;
x = $(document);
x.ready(start);

var textRace = $("#textRace")
var contentBody = $(".contentBodyInfo")

function start(){

$("#dalmatian").on("click", clickDalmatian);
$("#golden").on("click", clickGolden);
$("#salchicha").on("click", clickSalchicha);
$("#poodle").on("click", clickPoodle);

}

function clickDalmatian(){
    contentBody.fadeOut(500, function(){});
    window.setTimeout(function(){textRace.text("Dalmatas")},700);
    contentBody.fadeIn(1500, function(){});
}

function clickGolden(){
    contentBody.fadeOut(500, function(){});
    window.setTimeout(function(){textRace.text("Golden")},700);
    contentBody.fadeIn(1500, function(){});
}

function clickSalchicha(){
    contentBody.fadeOut(500, function(){});
    window.setTimeout(function(){textRace.text("Salchicha")},700);
    contentBody.fadeIn(1500, function(){});
}

function clickPoodle(){
    contentBody.fadeOut(500, function(){});
    window.setTimeout(function(){textRace.text("Poodle")},700);
    contentBody.fadeIn(1500, function(){});
}