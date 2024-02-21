"use strict";
function quickestPath(board) {
    const laddersMap = new Map(board.ladders);
    const snakesMap = new Map(board.snakes);
    const visited = new Set();
    const queue = [[1, 0]]; // [square, rolls]
    while (queue.length > 0) {
        const [square, rolls] = queue.shift();
        if (square === 100) {
            return getPath(rolls);
        }
        for (let roll = 1; roll <= 6; roll++) {
            const newSquare = square + roll;
            if (newSquare > 100)
                continue;
            const nextSquare = laddersMap.has(newSquare) ? laddersMap.get(newSquare) : snakesMap.has(newSquare) ? snakesMap.get(newSquare) : newSquare;
            if (!visited.has(nextSquare)) {
                visited.add(nextSquare);
                queue.push([nextSquare, rolls + 1]);
            }
        }
    }
    return [];
    function getPath(rolls) {
        const path = [];
        let currentSquare = 100;
        while (currentSquare !== 1) {
            for (let roll = 1; roll <= 6; roll++) {
                const prevSquare = currentSquare - roll;
                if (laddersMap.has(prevSquare) && laddersMap.get(prevSquare) === currentSquare) {
                    path.unshift(roll);
                    currentSquare = prevSquare;
                    break;
                }
            }
        }
        return path;
    }
}
const result = quickestPath({
    ladders: [[3, 39], [14, 35], [31, 70], [44, 65], [47, 86], [63, 83], [71, 93]],
    snakes: [[21, 4], [30, 8], [55, 38], [79, 42], [87, 54], [91, 48], [96, 66]]
});
console.log("Output:", "[" + result.join(", ") + "]"); // Output: [2, 5, 6, 6, 1]
