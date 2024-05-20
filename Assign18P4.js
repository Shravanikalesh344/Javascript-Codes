function Pattern(Row, Col) {
    var i = 0;
    var j = 0;
    for (i = 1; i <= Row; i++) {
        var colvalues = "";
        for (j = 1; j <= Col; j++) {
            if ((j % 2) != 0) {
                colvalues += "*" + " ";
            }
            else {
                colvalues += "#" + " ";
            }
        }
        console.log(colvalues);
    }
}
var row = 3;
var col = 4;
Pattern(row, col);
