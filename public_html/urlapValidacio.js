window.addEventListener("load", init);

function $(nev) {
    return document.querySelectorAll(nev);
}

function ID(nev) {
    return document.getElementById(nev);
}

function init() {
    ID("kuld").addEventListener("click", validalas);


}


function validalas() {
//    console.log("validálunk");
//hossz legalább 3 karakter
//van e benne szám, csak betűk legyenek
//maximális hossz
//nagybetűvel kezdődjön, kisbetűvel folytatódjon
//esetleg szóköz

    var nevMezo = ID("neve").value;
    var emailMezo= ID="email".value;
    var hiba="";
    var adat="";
//    if (nevMezo.length < 3) {
//        $("aside section:nth-child(1) p")[0].innerHTML = "Legalább 3 karakterből álljon a név!<br>";
//        ID("nev").style.border = "2px solid red";
//
//    } else {
//        ID("nev").style.border = "2px solid green";
//    }
    var szuro = /[A-Z]{1}[a-z]{2,19}/;
    var emailSzuro = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/;
    if (!szuro.test(nevMezo)) {
        hiba += "Nagybetűvel kezdődjön és legalább 3 karakter legyen!<br>";
        ID("neve").style.border = "2px solid red";

    } else {
        ID("neve").style.border = "2px solid green";
        adat+="Név: "+nevMezo+"<br>";
    }
    if (!emailSzuro.test(emailMezo)) {
        hiba += "Nem jó az e-mail!<br>";
        ID("email").style.border = "2px solid red";

    } else {
        ID("email").style.border = "2px solid green";
        adat+="email: "+emailMezo+"<br>";
    }

$("aside section:nth-child(1) p")[0].innerHTML = hiba;
$("aside section:nth-child(2) p")[0].innerHTML = adat;

}
