const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pw1=document.getElementById("p1")
let pw2=document.getElementById("p2")
let str1=""
let str2=""
document.getElementById("btn").addEventListener("click",function()
{
    for(let i=0;i<15;i++)
    {
        str1+=characters[Math.floor(Math.random()*characters.length)]   
    }
    for(let i=0;i<15;i++)
    {
        str2+=characters[Math.floor(Math.random()*characters.length)]
    }
    pw1.textContent=str1
    pw2.textContent=str2
})


