export const task1 = (elem, comment) => typeof elem + `${comment ? ' ' + `(${comment})` : ''}`;

const bubbleSort = (arr, direction) => {
    for (let i = 0, endI = arr.length - 1; i < endI; i++) {
        let wasSwap = false;
        for (let j = 0, endJ = endI - i; j < endJ; j++) {
            if (direction === 'ask') {
                if (arr[j] > arr[j + 1]) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                    wasSwap = true;
                }
            }
            if (direction === 'desk') {
                if (arr[j] < arr[j + 1]) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                    wasSwap = true;
                }
            }
        }
        if (!wasSwap) break;
    }
    return arr;
};

export const task2 = (arr, id) => {
    switch (id) {
        case 'sort-ask-save': {
            return `[${bubbleSort(arr, 'ask').join(', ')}]`
        }
        case 'sort-desk-save': {
            return `[${bubbleSort(arr, 'desk').join(', ')}]`
        }
        case 'sort-ask-dont-save': {
            return `[${Array.from(new Set(bubbleSort(arr, 'ask'))).join(', ')}]`
        }
        case 'sort-desk-dont-save': {
            return `[${Array.from(new Set(bubbleSort(arr, 'desk'))).join(', ')}]`
        }
        case 'min': {
            let min = arr[0];
            for (let i = 1; i < arr.length; ++i) {
                if (arr[i] < min) min = arr[i];
            }
            return min;
        }
        case 'max': {
            let max = arr[0];
            for (let i = 1; i < arr.length; ++i) {
                if (arr[i] > max) max = arr[i];
            }
            return max
        }
    }
}

export const task3 = initArr => {
    const result = {};
    initArr.forEach(obj => {
        result[obj.name] = obj.value;
    })
    return JSON.stringify(result);
}
