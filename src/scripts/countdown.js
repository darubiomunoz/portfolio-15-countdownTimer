document.addEventListener("DOMContentLoaded", () => {
    const targetDate = getRandomDateWithinThreeMonths();
    
    const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate - now;
        
        const days = addLeadingZero(Math.floor(distance / (1000 * 60 * 60 * 24)));
        const hours = addLeadingZero(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const minutes = addLeadingZero(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
        const seconds = addLeadingZero(Math.floor((distance % (1000 * 60)) / 1000));
      
        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hours;
        document.getElementById("minutes").textContent = minutes;
        document.getElementById("seconds").textContent = seconds;
      
        if (distance <= 0) {
          clearInterval(interval);
          document.getElementById("title").innerHTML = "WE HAVE LAUNCHED THE SITE!";
        }
      }, 1000);
});

function getRandomDateWithinThreeMonths() {
    const today = new Date();
    const threeMonthsFromNow = new Date();

    threeMonthsFromNow.setMonth(today.getMonth() + 3);

    const randomTimestamp = today.getTime() + (Math.random() * (threeMonthsFromNow.getTime() - today.getTime()));
    
    return new Date(randomTimestamp);
}

function addLeadingZero(value) {
    return value < 10 ? `0${value}` : value;
}
