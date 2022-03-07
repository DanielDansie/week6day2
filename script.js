function draw_board(x, y) {
    let grid = [];
    for (let j = 0; j < y; j++) {
        for (let i = 0; i < x; i++) {
            let el = $('<div/>');
            el.click(changeColor);
            grid.push(el);
        }
    }
    $('#squares').append(grid);
}

function changeColor() {
    $(this).toggleClass('darkMode');
}

draw_board(4, 4);