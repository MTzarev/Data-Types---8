function triangle(row) {

    for (let i = 1; i <= row; i++) {
        let res = ""
        for (let j = 1; j <= i; j++) {
            res += i + " "
        }
        console.log(res);
    }


}
triangle(3);
//triangle(4);
//triangle(5);

