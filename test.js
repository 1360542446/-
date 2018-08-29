const testFun = () => {
    //////////////////////////////////

    let str1 = 'BDCABA';
    let str2 = 'ABCBDAB';
    let n = str1.length;
    let m = str2.length;
    let arr = [];
    for (let i = 0, length1 = n; i <= length1; i++) {
        arr[i] = [];
        for (let j = 0, length2 = m; j <= length2; j++) {
            if (i === 0 || j === 0) {
                arr[i][j] = 0;
            } else {
                if (str1[i - 1] === str2[j - 1]) {
                    arr[i][j] = arr[i - 1][j - 1] + 1;
                } else if (str1[i - 1] !== str2[j - 1]) {
                    arr[i][j] = Math.max(arr[i - 1][j], arr[i][j - 1]);
                }
            }
        }
    }

    // let current = [n, m];
    // let time = 1;

    // while (arr[current[0]][current[1]] !== 0 && time !== 0) {

    // }

    let times = [];
    const deep = (n, m) => {
        if (arr[n][m] === 0) {
            return '';
        }
        if (str1[n - 1] === str2[m - 1]) {
            return str1[n - 1] + deep(n - 1, m - 1);
        } else {
            if (arr[n - 1][m] > arr[n][m - 1]) {
                return deep(n - 1, m);
            } else if (arr[n - 1][m] < arr[n][m - 1]) {
                return deep(n, m - 1);
            } else {
                times.push([n, m - 1]);
                return deep(n, m - 1);
            }
        }
    }

    do {
        let temp = times.pop();
        temp && (arr[temp[0]][temp[1]] = -1);
        console.log(deep(n, m).split('').reverse().join(''));
    }
    while (times.length !== 0);








































    /////////////////////////////
}

