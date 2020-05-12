const counters = document.querySelectorAll('.counter');
const speed = 200; //lower the slower

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        // console.log(typeof target);
        const count = +counter.innerText;
        // console.log(count);
        const increment = target / speed;
        // console.log(increment); //get divided result.
        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 1);
        } else {
            count.innerText = target;
        }

    }

    updateCount();
});
