//Dieses Script is dafür da: Die Heizung im Wintergarten zu regeln vlt kommen noch mehr Heizungen 
//dazu aber unsere HeizungVerteiler muss noch aktulisiertz werden.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
on({ id: 'hm-rpc.0.KEQ0122083.1.TEMPERATURE' }, function (obj) {
    //WinterGarten
    let fgetTemp = getState('hm-rpc.0.KEQ0122083.1.TEMPERATURE').val;
    let fsetTemp = getState('hm-rpc.1.000A9D899F2BAA.1.SET_POINT_TEMPERATURE').val;
    let bHeiz = getState('hm-rpc.0.KEQ1074848.1.STATE').val
    //Min und Max Deffinieren
    let fminTemp = fsetTemp - 0.5;
    let fmaxTemp = fsetTemp + 0.5;
    //Das nicht zu heiss oder Kalt ist
    if (fsetTemp > 23.5) {
        setState('hm-rpc.1.000A9D899F2BAA.1.SET_POINT_TEMPERATURE', 23.5);
    }
    if (fsetTemp < 18.5) {
        setState('hm-rpc.1.000A9D899F2BAA.1.SET_POINT_TEMPERATURE', 18.5);
    }
    //Einschalten oder auschallten der Temperatur
    if ((fgetTemp <= fminTemp) && (!bHeiz)) {
        setState('hm-rpc.0.KEQ1074848.1.STATE', true);
        console.log("AN");
        console.log("Heiszung IST: " + fgetTemp);
        console.log("Heizung Sollte: " + fsetTemp);
        console.log("MIN: " + fminTemp);
        console.log("MAX: " + fmaxTemp);
        console.log("Heizung: " + bHeiz);
    } else if ((fgetTemp >= fmaxTemp) && (bHeiz)) {
        setState('hm-rpc.0.KEQ1074848.1.STATE', false);
        console.log("AUS");
        console.log("Heiszung IST: " + fgetTemp);
        console.log("Heizung Sollte: " + fsetTemp);
        console.log("MIN: " + fminTemp);
        console.log("MAX: " + fmaxTemp);
        console.log("Heizung: " + getState('hm-rpc.0.KEQ1074848.1.STATE').val);
    }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
