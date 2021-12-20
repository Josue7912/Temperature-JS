/* When the input field receives input, convert the value from feet to meters */
function FtoC (fahrenheit){
  document.getElementById("outputCelsius").innerHTML = Math.round((fahrenheit - 32) * (5 / 9));
  }

function CtoF (celsius){
  document.getElementById("outputFahrenheit").innerHTML = Math.round(((celsius * (9/ 5)) + 32));
  }


function FtoK(fahrenhei){
  document.getElementById("outputKelvin").innerHTML = Math.round((fahrenhei - 32)* 5/9 + 273.15);
  }

function KtoF(kelvin){
  document.getElementById("outputFahrenhei").innerHTML = Math.round((kelvin - 273.15) * 9/5 + 32);
  }

function CtoK(celsiu){
  document.getElementById("outputKelvi").innerHTML = Math.round((celsiu) + 273.15);
  }

function KtoC(kelvn){
  document.getElementById("outputCelsiu").innerHTML = Math.round((kelvn) - 273.15);
}
