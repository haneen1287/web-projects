let increment=document.getElementById("increment-btn")
let h=document.getElementById("count-el")
let count=0
increment.addEventListener("click",function()
{
    count+=1
    h.innerText=count
})

let save=document.getElementById("save-btn")
let p=document.getElementById("save-el")
save.addEventListener("click",function()
{
    p.textContent+=count+" "
})