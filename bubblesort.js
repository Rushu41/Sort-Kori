async function bubbleSortDivs(container) {
    const divs = Array.from(container.children);
    let n = divs.length;

    for (let i = 0; i < n ; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            let height1 = parseFloat(divs[j].style.height);
            let height2 = parseFloat(divs[j + 1].style.height);

            if (height1 > height2) {
                divs[j].style.backgroundColor = 'blue';
                divs[j+1].style.backgroundColor = 'blue';
                container.insertBefore(divs[j + 1], divs[j]);
                divs[j] = container.children[j];

                divs[j + 1] = container.children[j + 1];
                await new Promise(resolve => setTimeout(resolve,20));
            }
            divs[j].style.backgroundColor = 'red';
            divs[j+1].style.backgroundColor = 'red';
        }
        container.children[n-i-1].style.backgroundColor = 'green';
    }
}