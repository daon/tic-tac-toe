export let computer = {};

computer.getMove = (model) => {
    let data = {};
    do {
        data.position = Math.floor(Math.random() * model.board.length);
    } while(!model.isEmptyCell(data.position))

    return data;
};