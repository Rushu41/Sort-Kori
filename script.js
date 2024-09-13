document.getElementById('generate').addEventListener('click', function() {
    const arrSize = document.getElementById('arr_sz').value;
    const numDivs = parseInt(arrSize);
    const container = document.querySelector('.box');
    container.innerHTML = '';

    for (let i = 0; i < numDivs; i++) {
        const newDiv = document.createElement('div');
        newDiv.style.backgroundColor = 'red';
        newDiv.style.height = Math.random() * 200 + 1 + 'px';
        newDiv.style.margin = '1px';
        container.appendChild(newDiv);
    }

    document.getElementById('bubblesort').disabled = false;
    document.getElementById('mergesort').disabled = false;
});

document.getElementById('bubblesort').addEventListener('click', function() {
    const container = document.querySelector('.box');
    bubbleSortDivs(container);

    document.getElementById('mergesort').disabled = true;
    document.getElementById('generate').disabled = true;
});

document.getElementById('mergesort').addEventListener('click', function() {
    const container = document.querySelector('.box');
    mergeSortDivs(container);
    document.getElementById('generate').disabled = true;
    document.getElementById('bubblesort').disabled = true;
});