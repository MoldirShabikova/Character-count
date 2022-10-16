
 const inputVal = document.getElementById('inputVal')
const celsiusEl = document.getElementById('celcious')
const farenEl = document.getElementById('fahrenheit')
const btnEl = document.querySelector('.btn')

let temp;


btnEl.addEventListener('click', function(){
  
if(celsiusEl.checked){
temp = inputVal.value
temp = Number(temp)
temp = toCelsius(temp)

document.getElementById('result').innerHTML = temp + '°C'
}
else if(farenEl.checked){
    temp = inputVal.value
    temp = Number(temp)
    temp = Math.toFahrenheit(temp)
    
    document.getElementById('result').innerHTML = temp + '°F'
}
else{
    document.getElementById('result').innerHTML = "Select a unit"
}
})



function toCelsius(temp){
   return (temp -32) * (5/9)
}

function toFahrenheit(temp){
 return temp * 9/ 5 + 32
}