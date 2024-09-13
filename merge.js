function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function mergeSortDivs(container) {
    const divs = Array.from(container.children);
    await mergeSort(divs, 0, divs.length - 1, container);
}

async function mergeSort(divs, l,  r, container) {
    if (l <  r) {
        const mid = Math.floor((l +  r) / 2);
        await mergeSort(divs, l, mid, container);
        await mergeSort(divs, mid + 1,  r, container);
        await merge(divs, l, mid,  r, container);
    }
}

async function merge(divs, l, mid,  r, container) {
    const n1 = mid - l + 1;
    const n2 =  r - mid;

    const lDivs = [];
    const  rDivs = [];

    for (let i = 0; i < n1; i++) {
        lDivs.push(divs[l + i]);
        divs[l + i].style.backgroundColor = 'yellow'; 
    }
    for (let j = 0; j < n2; j++) {
         rDivs.push(divs[mid + 1 + j]);
        divs[mid + 1 + j].style.backgroundColor = 'orange'; 
    }

    let i = 0, j = 0, k = l;

    while (i < n1 && j < n2) {
        let height1 = parseFloat(lDivs[i].style.height);
        let height2 = parseFloat( rDivs[j].style.height);

        if (height1 <= height2) {
            divs[k] = lDivs[i];
            i++;
        } else {
            divs[k] =  rDivs[j];
            j++;
        }
        container.insertBefore(divs[k], container.children[k]);
        divs[k].style.backgroundColor = 'blue';
        await sleep(100);
        divs[k].style.backgroundColor = 'green';
        k++;
    }

    while (i < n1) {
        divs[k] = lDivs[i];
        container.insertBefore(divs[k], container.children[k]);
        divs[k].style.backgroundColor = 'blue';
        await sleep(500);
        divs[k].style.backgroundColor = 'green';
        i++;
        k++;
    }

    while (j < n2) {
        divs[k] =  rDivs[j];
        container.insertBefore(divs[k], container.children[k]);
        divs[k].style.backgroundColor = 'blue';
        await sleep(500);
        divs[k].style.backgroundColor = 'green';
        j++;
        k++;
    }

    for (let i = l; i <=  r; i++) {
        divs[i].style.backgroundColor = 'green';
    }
}