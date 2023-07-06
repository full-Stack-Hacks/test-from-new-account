


// custom map

function customMap(arr, fx) {
    const newArr = []

    for(let i = 0; i < arr.length; i++) {
        let current = arr[i]
        newArr.push(fx(current))
    }

    return newArr
}

function doubler(num) {
    return num * 2
}

const arr = [1,2,3,4,5]
console.log(customMap(arr, doubler))
