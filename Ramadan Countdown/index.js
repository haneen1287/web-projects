const daysEl=document.getElementById('days')
const hoursEl=document.getElementById('hours')
const minsEl=document.getElementById('mins')
const secondsEl=document.getElementById('seconds')

let ramadan='22 March 2023'


function countdown(){
    const currentDate=new Date()
    const ramadanDate=new Date(ramadan)
    const totalSeconds=(ramadanDate-currentDate)/1000


    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    console.log(days,hours,mins,seconds)

    daysEl.innerHTML=days
    hoursEl.innerHTML=hours
    minsEl.innerHTML=mins
    secondsEl.innerHTML=seconds

}


setInterval(countdown,40)