function permutation(string) {
    let length = string.length;
    let arr = string.split("");
    let temp = "";
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - 1; j++) {
            temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
            console.log(arr.join(","));
        }
    }
}

permutation("ABC"); 