const sampleArray = [469, 755, 244, 245, 758, 450, 302, 17, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function showResults() {
    let newdiv = document.createElement("div");
    newdiv.appendChild(att);
}



function kata1() {
    let arrayup25= [];
    for(let i = 1; i <= 25; i++) {
        arrayup25.push(i);
    }
    let att = arrayup25.toString();
    let newdiv = document.createElement("div");
    newdiv.appendChild(att);
    return att
}
kata1();
showResults();


function kata2() {
    let arraydown25= [];
    for(let i = 25; i > 0; i--) {
        arraydown25.push(i);
    }
    console.log(arraydown25)
}
kata2()

function kata3() {
    let arraydownegat25= [];
    for(let i = -1; i >= -25; i--) {
        arraydownegat25.push(i);
    }
    console.log(arraydownegat25)
}

kata3()

function kata4() {
    let arrayupnegat25= [];
    for(let i = -25; i <= -1; i++) {
        arrayupnegat25.push(i);
    }
    console.log(arrayupnegat25)
}
kata4()

function kata5() {
    let arrayodd25= [];
    for(let i = 25; i >= -25; i--) {
        
        if(i % 2 !== 0) {
            arrayodd25.push(i);
        }
    }
    console.log(arrayodd25)
}
kata5()

function kata6() {
    let arraydiv3= [];
    for(let i = 1; i <= 100; i++) {
        
        if(i % 3 === 0) {
            arraydiv3.push(i);
        }
    }
    console.log(arraydiv3)
}
kata6();

function kata7() {
    let arraydiv3= [];
    for(let i = 1; i <= 100; i++) {
        
        if(i % 7 === 0) {
            arraydiv3.push(i);
        }
    }
    console.log(arraydiv3)
}
kata7();
function kata8() {
    let arraydiv37= [];
    for(let i = 100; i >= 1; i--) {
        
        if(i % 7 === 0 || i % 3 === 0) {
            arraydiv37.push(i);
        }
    }
    console.log(arraydiv37)
}
kata8();

function kata9() {
    let arrayodd5= [];
    for(let i = 1; i <= 100; i++) {
        
        if(i % 2 !== 0 && i % 5 === 0) {
            arrayodd5.push(i);
        }
    }
    console.log(arrayodd5)
}
kata9();

function kata10() {
    
    console.log(sampleArray)
}
kata10();

function kata11() {
    let arraypairelemts = []
    for(let i = 0; i < sampleArray.length; i++) {
        if(sampleArray[i] % 2 === 0){
            arraypairelemts.push(sampleArray[i])
        }

    }
    console.log(arraypairelemts)
}
kata11();

function kata12() {
    let arrayoddelemts = []
    for(let i = 0; i < sampleArray.length; i++) {
        if(sampleArray[i] % 2 !== 0){
            arrayoddelemts.push(sampleArray[i])
        }

    }
    console.log(arrayoddelemts)
}
kata12();


function kata13() {
    let arraydiv8 = []
    for(let i = 0; i < sampleArray.length; i++) {
        if(sampleArray[i] % 8 === 0){
            arraydiv8.push(sampleArray[i])
        }
    }
    console.log(arraydiv8)
}
kata13();

function kata14() {
    let arraysquare = []
    for(let i = 0; i < sampleArray.length; i++) {
        arraysquare.push(sampleArray[i]*sampleArray[i])
   }
    console.log(arraysquare)
}
kata14()

function kata15() {
    let sum = 0;
    for(let i = 1; i <= 20; i++) {
        sum = sum + i;
   }
    console.log(sum)
}
kata15();

function kata16() {
    let sumsampleArray = 0;
    for(let i = 0; i < sampleArray.length; i++) {
        sumsampleArray = sumsampleArray + sampleArray[i];
   }
    console.log(sumsampleArray)
}
kata16();

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
    console.log(minumber)
}
kata17()

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
    console.log(maxnumber)
}
kata18();

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
