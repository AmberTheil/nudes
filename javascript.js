$(window).on("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");

    $("#start").on("click", start);
    $("#kissing").hide();
    $("#send").hide();
    $("#sendikke").hide();
    $("#kissing2").hide();
    $("#hjerte2").hide();
    $("#4").hide();
    $("#chokface").hide();
    $("#iphone1").hide();
    $("#iphone2").hide();
}

function start() {
    console.log("vi er startet");

    $("#forside").hide();
    $("#kissing").show();
    $("#start").hide();

    setTimeout(kiss, 2000);
}



function kiss() {
    console.log("vi kisser");


    $("#kissing").hide();
    $("#hjerte").hide();
    $("#moerke").addClass("dark_scene");
    $("#kissing2").show();
    $("#hjerte2").show();


    setTimeout(senere, 7000);
}

function senere() {
    console.log("vi er 4 måneder senere");
    $("#moerke").removeClass("dark_scene");
    $("#kissing2").hide();
    $("#hjerte2").hide();
    $("#4").show();

    setTimeout(Valg, 5000);
}


function Valg() {
    console.log("valg");


    $("#4").hide();
    $("#iphone1").show();
    $("#send").fadeIn();
    $("#sendikke").fadeIn();

    $("#send").on("click", sendt);
    $("#sendikke").on("click", ikkeSendt);

}


function sendt() {
    console.log("beskeden er sendt")


}

function ikkeSendt() {
    console.log("beskeden er ikke sendt")

}
