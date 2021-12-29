// Car Park Exit
// Published by Mubashir Hassan in
//   arrays games logic
// You are stuck in a multi - story car parking lot.Your task is to
// exit the carpark using only the staircases. Exit is always at the
// bottom right of the ground floor.
// Create a function that takes a two - dimensional array where:
// 1. Free carparking spaces are represented by a 0
// 2. Staircases are represented by a 1
// 3. Your starting position is represented by a 2 and can be at
// any level of the car park.
// 4. Exit is always at the bottom right of the ground floor.
// 5. You must use the staircases(1) to go down a level.
// 6. Each floor will have only one staircase apart from the
// ground floor which will not have any staircases.
// ...and returns an array of the quickest route out of the carpark.

// arr = [
//   [1, 0, 0, 0, 2],
//   [0, 0, 0, 0, 0]
// ]
// // Starting from 2, move to left 4 times = "L4"
// // Go down from stairs 1 step = "D1"
// // Move to right 4 times to exit from right bottom corn
// result = ["L4", "D1", "R4"]


//   Examples
// parking_exit([
//     [1, 0, 0, 0, 2],
//   [0, 0, 0, 0, 0]
// ]) ➞["L4", "D1", "R4"]

// parking_exit([[0, 0, 0, 0, 2]]) ➞[]
// You are already at right bottom corner.

// parking_exit([
//   [2, 0, 0, 1, 0],
//   [0, 0, 0, 1, 0],
//   [0, 0, 0, 0, 0]
// ]) ➞["R3", "D2", "R1"]
// Starting from 2, move to right 3 times = "R3"
// Go down from stairs 2 steps = "D2"
// Move to right 1 step to exit from right bottom corne

function parking_exit(array) {
  let
    staircase, //respresented by 1
    startingPosition, //respresented by 2
    start_floor, //used to track movement between floors
    directions = [] // final array of directions to return

  array.map((floor, level_num) => {
    //find the staring floor by finding index of 2
    if (floor.indexOf(startingPosition) !== -1) {
      //find movement from start to stairs
      let movement = (floor.indexOf(startingPosition) - floor.indexOf(1))
      //determine if movement was left or right
      if (floor.indexOf(startingPosition) - floor.indexOf(1) < 0) {
        directions.push('R' + -movement)
      } else {
        directions.push('L' + movement)
      }
      //mark location of staircase
      staircase = floor.indexOf(1)
      //start count of how far down we travel to bottom floor
      start_floor = level_num

      //if we have started travel down stairs
    } else if (start_floor >= 0) {
      //if we have hit bottom floor
      if (level_num === array.length - 1) {
        //push directons to array
        directions.push('D' + (level_num - start_floor))
        directions.push("R" + ((floor.length - 1) - staircase))
      }
    }
  })

  return directions

}

console.log(parking_exit([
  [2, 0, 0, 1, 0],
  [0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0]
])) //➞["R3", "D2", "R1"]
console.log(parking_exit([
  [1, 0, 0, 0, 2],
  [0, 0, 0, 0, 0]
]))// ➞["L4", "D1", "R4"]