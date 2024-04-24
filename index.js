// Função para medir o tempo de execução 
function tempo(func, arr) {
    const startTime = performance.now();
    func(arr);
    const endTime = performance.now();
    return endTime - startTime;
}

function quicksort(array) {
    if (array.length <= 1) return array;
    
    var pivot = array[0];
    
    var head = array.filter( n => n < pivot);
    var equal = array.filter( n => n === pivot);
    var tail = array.filter( n => n > pivot);
    
    return quicksort(head).concat(equal).concat(quicksort(tail));
}

function mergeSort(arr) {
    if(arr.length < 2) {
        return arr
    }
    const mid = Math.floor(arr.length / 2)
    const leftArr = arr.slice(0, mid)
    const rightArr = arr.slice(mid)
    return merge(mergeSort(leftArr), mergeSort(rightArr)) 
}

function merge(leftArr, rightArr) {
    const sortedArr = [];
    while(leftArr.length && rightArr.length) {
        if(leftArr[0] < rightArr[0]) {
            sortedArr.push(leftArr.shift())
        } else {
            sortedArr.push(rightArr.shift())
        }
    }
    return [...sortedArr, ...leftArr, ...rightArr]
}

function bubble_sort(arr) {
    let tmp;
    for(let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - (i - 1); j++) {
            if(arr[j] > arr[j+1]) {
                tmp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = tmp;
            }
        }
    } 
    return arr;
}

const arr = [5, 9, 2, 1, 8, 3, 7, 4, 6];

const quickSortTempo = tempo(quicksort, arr.slice());

const mergeSortTempo = tempo(mergeSort, arr.slice());

const bubbleSortTempo = tempo(bubble_sort, arr.slice());

console.log(`QuickSort: ${quickSortTempo} ms`);
console.log(`MergeSort: ${mergeSortTempo} ms`);
console.log(`BubbleSort: ${bubbleSortTempo} ms`);
