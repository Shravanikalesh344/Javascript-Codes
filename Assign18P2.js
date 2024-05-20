function Pattern(row, col) {
    var i = 0;
    var j = 0;
    for (i = 1; i <= row; i++) {
        var rowvalues = "";
        for (j = 1; j <= col; j++) {
            rowvalues += j + " ";
        }
        console.log(rowvalues);
    }
}
var Row = 4;
var Col = 3;
Pattern(Row, Col);
