function f1(obrazek){
    obrazek.src = "./kot1.jpg"
}

function f2(obrazek, nazwaObrazka){
    // obrazek.src = `./${nazwaObrazka}`;
    obrazek.src = "./" + nazwaObrazka;   
}

function f3(obrazek, nazwaobrazka){
    // p1.src = "./" + nazwaobrazka;
    f2(obrazek, nazwaobrazka)

    let g1 = document.getElementById("glowne");
    g1.src = "./" + nazwaobrazka;
}


-



//1 - 7777
//b c c b c c 
//b c c b c c

//Ile czarnych puszek jest oznaczonych cyfrą 7
// 17 - 1, 77- 2