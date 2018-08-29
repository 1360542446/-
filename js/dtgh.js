let arr1 = [5, 1, 3, 4, 9, 7, 6, 8];    //1,3,4,7,8
let max = 0;

let arr2 = [...arr1].sort((x, y) => x - y);

const sum = arr => {
    if (arr.length === 0) return 0;
    return arr.reduce((pre, current) => pre + current);
}

const find = (end1, end2) => {
    if (end1 === 0 || end2 === 0) {
        return [];
    }

    if (arr1[end1 - 1] === arr2[end2 - 1]) {
        return [arr1[end1 - 1], ...find(end1 - 1, end2 - 1)]
    } else {
        let tempArr = find(end1 - 1, end2);
        let tempArr2 = find(end1, end2 - 1);

        // if (tempArr.length < tempArr2.length) {
        //     return tempArr2;
        // }
        if (sum(tempArr) < sum(tempArr2)) {
            return tempArr2;
        }
        return tempArr;
    }

}

let newArr = find(arr1.length, arr1.length);
console.log(newArr.reverse());