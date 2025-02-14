const targetDate = getRandomDateWithinOneMonth();

function getRandomDateWithinOneMonth() {
  const today = new Date();
  const oneMonthsFromNow = new Date();

  oneMonthsFromNow.setMonth(today.getMonth() + 1);

  const randomTimestamp = today.getTime() + (Math.random() * (oneMonthsFromNow.getTime() - today.getTime()));
    
  return new Date(randomTimestamp);
}

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  animateFlipCard(document.getElementById("days"), days);
  animateFlipCard(document.getElementById("hours"), hours);
  animateFlipCard(document.getElementById("minutes"), minutes);
  animateFlipCard(document.getElementById("seconds"), seconds);

  if (distance <= 0) {
    clearInterval(interval);
    document.querySelector(".countdownTimer").innerHTML = "WE HAVE LAUNCHED THE SITE!";
  }
}

function animateFlipCard(element, value) {
  const formattedValue = value < 10 ? `0${value.toString()}` : value.toString();

  const currentValue = element.textContent.trim();

  if (
    currentValue === formattedValue ||
    element.parentNode.classList.contains("animating")
  ) {
    return;
  }
  
  if (currentValue !== value.toString()) {
    const nextElement = element.nextElementSibling;

    if (!nextElement) {
      console.error("Next element not found for:", element);
      return;
    }

    nextElement.textContent = formattedValue;

    element.parentNode.classList.add("out", "animating");

    setTimeout(() => {
      element.textContent = nextElement.textContent;
      element.parentNode.classList.remove("out");
      element.parentNode.classList.add("in");
      
    }, 300);

    setTimeout(() => {
      element.parentNode.classList.remove("in", "animating");
    }, 600);
  }
}

const interval = setInterval(updateCountdown, 1000);
