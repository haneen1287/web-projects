/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let num=document.getElementById("number")
let len=document.getElementById("length")
let vol=document.getElementById("volume")
let ma=document.getElementById("mass")
function convert()
{
   len.innerHTML=`${num.value } meters = ${(num.value*3.281).toFixed(3)} feet | ${num.value} feet ${(num.value/3.281).toFixed(3)} meters`
   
   vol.innerHTML=`${num.value } liter = ${(num.value*0.264).toFixed(3)} gallon | ${num.value} gallon ${(num.value/0.264).toFixed(3)}  liter`
   
   ma.innerHTML=`${num.value }  kilogram = ${(num.value*2.202).toFixed(3)}  pound | ${num.value}  pound ${(num.value/2.204).toFixed(3)}  kilogram`
}