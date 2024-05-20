function Pattern() {
    var iRow = 4;
    var i = 0;
    var j = 0;
    var iCol = 3;
    for (i = 1; i <= iRow; i++) {
        for (j = 1; j <= iCol; j++) {
            console.log(j + "\t");
        }
        console.log();
    }
}
Pattern();
