const checkForBingo = require('./index')

/*
    I wanted to verify my function, so I added this
    simple test. There's no package.json in the repo,
    so I opted to write this in vanilla JavaScript.

    This was tested on Node 17.2.0.
 */

const board = [
    8, 29, 35, 54, 65,
    13, 24, 44, 48, 67,
    9, 21, 'FREE', 59, 63,
    7, 19, 34, 53, 61,
    1, 20, 33, 46, 72
]

const drawnSets = [
    // diagonal
    [8, 24, 53, 72],
    // horizontal
    [8, 29, 35, 54, 65],
    [13, 24, 44, 48, 67],
    [9, 21, 'FREE', 59, 63],
    [7, 19, 34, 53, 61],
    [1, 20, 33, 46, 72],
    //vertical
    [8, 13, 9, 7, 1],
    [29, 24, 21, 19, 20],
    [35, 44, 'FREE', 34, 33],
    [54, 48, 59, 53, 46],
    [65, 67, 63, 61, 72],
]

drawnSets.forEach(set => {
    const result = checkForBingo(board, set)
    if (result) {
        console.log('passed')
    } else {
        console.log(`failed on set, ${set}`)
    }
})