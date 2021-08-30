window.addEventListener("load",()=>{
    const secondHand = document.querySelector(".second");
    const minuteHand = document.querySelector(".minute");
    const hourHand = document.querySelector(".hour");
   
    function setDate(){
        const now = new Date();
        const seconds = now.getSeconds();
        console.log(seconds);
        const secondDegree = ((seconds/60)* 360)+90;
        secondHand.style.transform = `rotate(${secondDegree}deg)`;
        const minutes = now.getMinutes()
        const minuteDegree = ((minutes/60)* 360)+90;
        minuteHand.style.transform = `rotate(${minuteDegree}deg)`;
        const hours = now.getHours();
        const hourDegree = ((hours/60)* 360)+90;
        hourHand.style.transform = `rotate(${hourDegree}deg)`;

    }
    setInterval(setDate, 1000);

})