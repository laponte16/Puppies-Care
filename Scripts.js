var textRace = $("#textRace")
var contentBody = $(".contentBodyInfo")

$("#dalmatian").on("click", clickDalmatian);
$("#golden").on("click", clickGolden);
$("#salchicha").on("click", clickSalchicha);
$("#poodle").on("click", clickPoodle);

function clickDalmatian(){
    contentBody.fadeOut(500, function(){});
    window.setTimeout(function(){textRace.text("Dalmatas")},600);
    contentBody.fadeIn(1500, function(){});
}

function clickGolden(){
    contentBody.fadeOut(500, function(){});
    window.setTimeout(function(){textRace.text("Golden")},600);
    contentBody.fadeIn(1500, function(){});
}

function clickSalchicha(){
    contentBody.fadeOut(500, function(){});
    window.setTimeout(function(){textRace.text("Salchicha")},600);
    contentBody.fadeIn(1500, function(){});
}

function clickPoodle(){
    contentBody.fadeOut(500, function(){});
    window.setTimeout(function(){textRace.text("Poddle")},600);
    contentBody.fadeIn(1500, function(){});
}