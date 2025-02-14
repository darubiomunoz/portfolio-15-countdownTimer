function getRandomDateWithinThreeMonths() {
    const today = new Date();
    const threeMonthsFromNow = new Date();

    threeMonthsFromNow.setMonth(today.getMonth() + 3);

    const randomTimestamp = today.getTime() + (Math.random() * (threeMonthsFromNow.getTime() - today.getTime()));
    
    return new Date(randomTimestamp);
}
