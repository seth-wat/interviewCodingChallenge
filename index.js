/**
 * B-I-N-G-O
 *
 * A Bingo card contain 25 squares arranged in a 5x5 grid (five columns
 * and five rows). Each space in the grid contains a number between 1
 * and 75. The center space is marked "FREE" and is automatically filled.
 *
 * As the game is played, numbers are drawn. If the player's card has
 * that number, that space on the grid is filled.
 *
 * A player wins BINGO by completing a row, column, or diagonal of filled
 * spaces.
 *
 * Your job is to complete the function that takes a bingo card and array
 * of drawn numbers and return 'true' if that card has achieved a win.
 *
 * A bingo card will be 25 element array. With the string 'FREE' as the
 * center element (index 12). Although developers are unscrupulous, they
 * will pass valid data to your function.
 */

function matches(group, drawnNumbers) {
    return group.every(
        number => number === 'FREE' || drawnNumbers.includes(number)
    )
}

function checkForBingo(bingoCard, drawnNumbers) {
    let won = false

    /*
      Since there are 5 rows, 5 columns, and 2 diagonal sets,
      an outer loop of 5 can be used check everything at once.
      This uses the loop indexes to offset onto the correct
      row or column.

      This was tested on Node 17.2.0.
    */
    const diagonalRight = []
    const diagonalLeft = []

    for (let i = 0; i < 5; i++) {
        diagonalRight.push(bingoCard[i * 5 + i])
        if (diagonalRight.length === 5 && matches(diagonalRight, drawnNumbers)) {
            won = true
            break
        }

        const reversedIndex = 5 - i
        diagonalLeft.push(bingoCard[reversedIndex * 4])
        if (diagonalLeft.length === 5 && matches(diagonalLeft, drawnNumbers)) {
            won = true
            break
        }

        let row = []
        for (let j = i; j < 5; j++) {
            row.push(bingoCard[j + i * 5])
        }
        if (matches(row, drawnNumbers)) {
            won = true
            break
        } else {
            row = []
        }

        let column = []
        for (let j = 0; j < 5; j++) {
            column.push(bingoCard[j * 5 + i])
        }
        if (matches(column, drawnNumbers)) {
            won = true
            break
        } else {
            column = []
        }
    }

    return won
}

module.exports = checkForBingo;

// here are some samples

// this should return true with diagonal + free
checkForBingo(
  [
    8, 29, 35, 54, 65,
    13, 24, 44, 48, 67,
    9, 21, 'FREE', 59, 63,
    7, 19, 34, 53, 61,
    1, 20, 33, 46, 72
  ],
  [
    8, 24, 53, 72
  ]
);

// this should return false
checkForBingo(
  [
   8, 29, 35, 54, 65,
   13, 24, 44, 48, 67,
   9, 21, 'FREE', 59, 63,
   7, 19, 34, 53, 61,
   1, 20, 33, 46, 72
  ],
  [
    1, 33, 53, 65, 29, 75
  ]
);
