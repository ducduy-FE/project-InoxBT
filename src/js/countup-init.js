
document.addEventListener('DOMContentLoaded', function() {
    var countUpOptions = {
        duration: 2,
        suffix: '+',
        useGrouping: false
    };

    var count1 = new countUp.CountUp('countup-1', 1000, countUpOptions);
    var count2 = new countUp.CountUp('countup-2', 41, countUpOptions);

    if (!count1.error) {
        count1.start();
    } else {
        console.error(count1.error);
    }

    if (!count2.error) {
        count2.start();
    } else {
        console.error(count2.error);
    }
});
