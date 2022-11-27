//Dieses Script ist dazu da doe Sonnenstroen zu steuern.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Hier wird di funktion jede 1minute aufgerugfen
schedule("* * * * *", function () {
    StorenZU();
});
schedule("*/10 06-23 * * *", function () {
    StorenAUF();
});
schedule("0 23 * * *", function () {
    setState('hm-rpc.0.KEQ0540920.1.LEVEL', 100);
});
////////////////////////////////////////////////////////////////////////
function StorenZU() {
    let fWind = getState('hm-rpc.1.00181D89A01CE3.1.WIND_SPEED').val;
    let bRain = getState('hm-rpc.1.00181D89A01CE3.1.RAINING').val;
    let fTemp = getState('hm-rpc.1.00181D89A01CE3.1.ACTUAL_TEMPERATURE').val;
    let ilevel = getState('hm-rpc.0.KEQ0540920.1.LEVEL').val
    //Die werte werden Hier überpruft ob die SonnenStroen Eingefahrem Werden muss
    if ((fWind >= 16) || (bRain) || (fTemp <= 15)) {
        if ((ilevel == 0) || (ilevel == 40)) {
            setState('hm-rpc.0.KEQ0540920.1.LEVEL', 100);
            console.log("ZU");
            console.log("Level: " + ilevel);
            console.log("Regen: " + bRain);
            console.log("wind: " + fWind);
            console.log("Temp: " + fTemp);
        }
    } else if ((fWind >= 11) && (ilevel == 0)) {
        setState('hm-rpc.0.KEQ0540920.1.LEVEL', 40);
        console.log("Halb ZU");
        console.log("Level: " + ilevel);
        console.log("Regen: " + bRain);
        console.log("wind: " + fWind);
        console.log("Temp: " + fTemp);
    }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function StorenAUF() {
    let fWind = getState('hm-rpc.1.00181D89A01CE3.1.WIND_SPEED').val;
    let bRain = getState('hm-rpc.1.00181D89A01CE3.1.RAINING').val;
    let fTemp = getState('hm-rpc.1.00181D89A01CE3.1.ACTUAL_TEMPERATURE').val;
    let ilevel = getState('hm-rpc.0.KEQ0540920.1.LEVEL').val
    //Die werte werden Hier überpruft ob die SonnenStroen ausgefahrem kann
    if ((fWind <= 8) && (!bRain) && (fTemp >= 20)) {
        if ((ilevel == 100) || (ilevel == 40)) {
            setState('hm-rpc.0.KEQ0540920.1.LEVEL', 0);
            console.log("AUF");
            console.log("Level: " + ilevel);
            console.log("Regen: " + bRain);
            console.log("wind: " + fWind);
            console.log("Temp: " + fTemp);
        }
    }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
