//Formulas for Unit conversion

//Fahrenheit to Celsius

function FtoC (temperature){
    let temp = Math.round((temperature - 32) * (5 / 9));
    return temp
}

function CtoF (temperature){
    let temp = Math.round(((temperature * (9/ 5)) + 32));
    return temp
}


//Kelvin to Celsius

function KtoC(tempInK){
    let tempInC = (tempInK) - 273.15;
    return tempInC;
}

function CtoK(tempInC){
    let tempInK = (tempInC) + 273.15;
    return tempInK;
}


//Fahrenheit to Kelvin

function FtoK(tempInF){
    let tempInK = (tempInF - 32)* 5/9 + 273.15;
    return tempInK;
}

function KtoF(tempInK){
    let tempInF = (tempInK - 273.15) * 9/5 + 32;
    return tempInF;
}


//Pythagoras's Theorema

function pythagoras(b, c){
    let hypotenuse = b ** 2 + c ** 2;
    return hypotenuse;
}


//Inches to Centimeters

function inchToCm(inches){
    let cm = inches * 0.39370;
    return cm;
}

function CmToInch(cm){
    let inch = cm / 0.39370;
    return inch;
}


//Miles to Kilometers

function MToKm(miles){
    let kilometers = miles / 0.62137;
    return kilometers;
}

function KmToM(kilometers){
    let miles = kilometers * 0.62137;
    return miles;
}