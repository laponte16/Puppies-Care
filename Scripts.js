var x;
x = $(document);
x.ready(start);

var textRace = $("#textRace")
var imagenRace = $("#imagenRace")
var contentBody = $(".contentBodyInfo")

function start(){

/*BREED FUNCTIONS CALLS*/
$("#dalmatian").on("click", clickDalmatian);
$("#golden").on("click", clickGolden);
$("#salchicha").on("click", clickSalchicha);
$("#poodle").on("click", clickPoodle);
/*TRAINING FUNCTIONS CALLS*/
$("#tricks").on("click", clickTricks);
$("#behaviour").on("click", clickBehaviour);
$("#name").on("click", clickName);
/*HAIR STYLING FUNCTIONS CALLS*/
$("#styling").on("click", clickStyling);
$("#washing").on("click", clickWashing);
$("#decoration").on("click", clickDecoration);
/*NUTRITION FUNCTIONS CALLS*/
$("#eating").on("click", clickEating);
$("#badEating").on("click", clickBadEating);
/*VETERINARY FUNCTIONS CALLS*/
$("#vaccine").on("click", clickVaccine);
$("#medicalCare").on("click", clickMedicalCare);
$("#sterilize").on("click", clickSterilize);
}

/*BREED FUNCTIONS DEFINITIONS*/
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
/*TRAINING FUNCTIONS DEFINITIONS*/
function clickTricks(){
    contentBody.fadeOut(500);
    window.setTimeout(function(){textRace.text("Teach Tricks")},700);
    imgUrl = "Images/poodle.jpg"
    window.setTimeout(function(){imagenRace.css("background-image","url(" + imgUrl + ")");},700);
    contentBody.fadeIn(1500);
}
function clickBehaviour(){
    contentBody.fadeOut(500);
    window.setTimeout(function(){textRace.text("Teach good Behaviour")},700);
    imgUrl = "Images/poodle.jpg"
    window.setTimeout(function(){imagenRace.css("background-image","url(" + imgUrl + ")");},700);
    contentBody.fadeIn(1500);
}
function clickName(){
    contentBody.fadeOut(500);
    window.setTimeout(function(){textRace.text("Teach Name")},700);
    imgUrl = "Images/poodle.jpg"
    window.setTimeout(function(){imagenRace.css("background-image","url(" + imgUrl + ")");},700);
    contentBody.fadeIn(1500);
}
/*HAIR STYLING FUNCTIONS DEFINITIONS*/
function clickStyling(){
    contentBody.fadeOut(500);
    window.setTimeout(function(){textRace.text("Cut hair")},700);
    imgUrl = "Images/poodle.jpg"
    window.setTimeout(function(){imagenRace.css("background-image","url(" + imgUrl + ")");},700);
    contentBody.fadeIn(1500);
}
function clickWashing(){
    contentBody.fadeOut(500);
    window.setTimeout(function(){textRace.text("Wash & Dry")},700);
    imgUrl = "Images/poodle.jpg"
    window.setTimeout(function(){imagenRace.css("background-image","url(" + imgUrl + ")");},700);
    contentBody.fadeIn(1500);
}
function clickDecoration(){
    contentBody.fadeOut(500);
    window.setTimeout(function(){textRace.text("Decorate Yo Doggo")},700);
    imgUrl = "Images/poodle.jpg"
    window.setTimeout(function(){imagenRace.css("background-image","url(" + imgUrl + ")");},700);
    contentBody.fadeIn(1500);
}
/*NUTRITION FUNCTIONS DEFINITIONS*/
function clickEating(){
    contentBody.fadeOut(500);
    window.setTimeout(function(){textRace.text("Feed Yo Doggo")},700);
    imgUrl = "Images/poodle.jpg"
    window.setTimeout(function(){imagenRace.css("background-image","url(" + imgUrl + ")");},700);
    contentBody.fadeIn(1500);
}
function clickBadEating(){
    contentBody.fadeOut(500);
    window.setTimeout(function(){textRace.text("Chocolate bad for Doggo")},700);
    imgUrl = "Images/poodle.jpg"
    window.setTimeout(function(){imagenRace.css("background-image","url(" + imgUrl + ")");},700);
    contentBody.fadeIn(1500);
}
/*VETERINARY FUNCTIONS DEFINITIONS*/
function clickVaccine(){
    contentBody.fadeOut(500);
    window.setTimeout(function(){textRace.text("Doggo vs Needle")},700);
    imgUrl = "Images/poodle.jpg"
    window.setTimeout(function(){imagenRace.css("background-image","url(" + imgUrl + ")");},700);
    contentBody.fadeIn(1500);
}
function clickMedicalCare(){
    contentBody.fadeOut(500);
    window.setTimeout(function(){textRace.text("Doggo vs man")},700);
    imgUrl = "Images/poodle.jpg"
    window.setTimeout(function(){imagenRace.css("background-image","url(" + imgUrl + ")");},700);
    contentBody.fadeIn(1500);
}
function clickSterilize(){
    contentBody.fadeOut(500);
    window.setTimeout(function(){textRace.text("Doggo vs [Redacted]")},700);
    imgUrl = "Images/poodle.jpg"
    window.setTimeout(function(){imagenRace.css("background-image","url(" + imgUrl + ")");},700);
    contentBody.fadeIn(1500);
}