const sampleArray = [469, 755, 244, 245, 758, 450, 302, 17, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function showResults(x) {
    let newdiv = document.createElement("div");
    newdiv.innerHTML = x;
    let divs = document.getElementById("container");
    divs.appendChild(newdiv);
}

let button = document.getElementById('button');
button.addEventListener('click', everyfunctions);

function reset() {
    let divs = document.getElementById("container");
    divs.innerHTML = "";
}


function everyfunctions() {
    setTimeout(function(){ reset();}, 800)
    setTimeout(function(){ kata1();}, 1250)
    setTimeout(function(){ kata2();}, 1400)
    setTimeout(function(){ kata3();}, 1550)
    setTimeout(function(){ kata4();}, 1700)
    setTimeout(function(){ kata5();}, 1850)
    setTimeout(function(){ kata6();}, 2000)
    setTimeout(function(){ kata7();}, 2150)
    setTimeout(function(){ kata8();}, 2300)
    setTimeout(function(){ kata9();}, 2450)
    setTimeout(function(){ kata10();}, 2600)
    setTimeout(function(){ kata11();}, 2750)
    setTimeout(function(){ kata12();}, 2900)
    setTimeout(function(){ kata13();}, 3050)
    setTimeout(function(){ kata14();}, 3200)
    setTimeout(function(){ kata15();}, 3350)
    setTimeout(function(){ kata16();}, 3500)
    setTimeout(function(){ kata17();}, 3650)
    setTimeout(function(){ kata18();}, 3800)
}




function kata1() {
    let arrayup25= [];
    for(let i = 1; i <= 25; i++) {
        arrayup25.push(i);
    }
    let x = arrayup25.toString();
    showResults(x);
    return x

}

function kata2() {
    let arraydown25= [];
    for(let i = 25; i > 0; i--) {
        arraydown25.push(i);
    }
    let x = arraydown25.toString();
    showResults(x)
    return x
}


function kata3() {
    let arraydownegat25= [];
    for(let i = -1; i >= -25; i--) {
        arraydownegat25.push(i);
    }
    let x = arraydownegat25.toString();
    showResults(x)
    return x
}


function kata4() {
    let arrayupnegat25= [];
    for(let i = -25; i <= -1; i++) {
        arrayupnegat25.push(i);
    }
    let x = arrayupnegat25.toString();
    showResults(x)
    return x
}

function kata5() {
    let arrayodd25= [];
    for(let i = 25; i >= -25; i--) {
        
        if(i % 2 !== 0) {
            arrayodd25.push(i);
        }
    }
    let x = arrayodd25.toString();
    showResults(x)
    return x
}

function kata6() {
    let arraydiv3= [];
    for(let i = 1; i <= 100; i++) {
        
        if(i % 3 === 0) {
            arraydiv3.push(i);
        }
    }
    let x = arraydiv3.toString();
    showResults(x)
    return x
}

function kata7() {
    let arraydiv7= [];
    for(let i = 1; i <= 100; i++) {
        
        if(i % 7 === 0) {
            arraydiv7.push(i);
        }
    }
    let x = arraydiv7.toString();
    showResults(x)
    return x
}

function kata8() {
    let arraydiv37= [];
    for(let i = 100; i >= 1; i--) {
        
        if(i % 7 === 0 || i % 3 === 0) {
            arraydiv37.push(i);
        }
    }
    let x = arraydiv37.toString();
    showResults(x)
    return x
}

function kata9() {
    let arrayodd5= [];
    for(let i = 1; i <= 100; i++) {
        
        if(i % 2 !== 0 && i % 5 === 0) {
            arrayodd5.push(i);
        }
    }
    let x = arrayodd5.toString();
    showResults(x)
    return x
}

function kata10() {
    let x = sampleArray;
    showResults(x)
    return x
   
}

function kata11() {
    let arraypairelemts = []
    for(let i = 0; i < sampleArray.length; i++) {
        if(sampleArray[i] % 2 === 0){
            arraypairelemts.push(sampleArray[i])
        }

    }
    let x = arraypairelemts.toString();
    showResults(x)
    return x
}


function kata12() {
    let arrayoddelemts = []
    for(let i = 0; i < sampleArray.length; i++) {
        if(sampleArray[i] % 2 !== 0){
            arrayoddelemts.push(sampleArray[i])
        }

    }
    let x = arrayoddelemts.toString();
    showResults(x)
    return x
}



function kata13() {
    let arraydiv8 = []
    for(let i = 0; i < sampleArray.length; i++) {
        if(sampleArray[i] % 8 === 0){
            arraydiv8.push(sampleArray[i])
        }
    }
    let x = arraydiv8.toString();
    showResults(x)
    return x
}


function kata14() {
    let arraysquare = []
    for(let i = 0; i < sampleArray.length; i++) {
        arraysquare.push(sampleArray[i]*sampleArray[i])
   }
   let x = arraysquare.toString();
   showResults(x)
   return x
}


function kata15() {
    let sum = 0;
    for(let i = 1; i <= 20; i++) {
        sum = sum + i;
   }
   let x = sum;
   showResults(x)
   return x
}

function kata16() {
    let sumsampleArray = 0;
    for(let i = 0; i < sampleArray.length; i++) {
        sumsampleArray = sumsampleArray + sampleArray[i];
   }
   let x = sumsampleArray.toString();
   showResults(x)
   return x
}

function kata17() {
    let minumber = sampleArray[0];
    for(let i = 0; i < sampleArray.length; i++) {
        let numberafter = sampleArray[i+1]
       if(minumber > numberafter) {
        minumber = numberafter
       }
       if(minumber < numberafter){
           minumber = minumber
       }
       
   }
   let x = minumber;
   showResults(x)
   return x
}

function kata18() {
    let maxnumber = sampleArray[0];
    for(let i = 0; i < sampleArray.length; i++) {
        let numberafter = sampleArray[i+1]
       if(maxnumber < numberafter) {
        maxnumber = numberafter
       }
       if(maxnumber > numberafter){
        maxnumber = maxnumber
       }
       
   }
   let x = maxnumber;
   showResults(x)
   return x
}

/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}
