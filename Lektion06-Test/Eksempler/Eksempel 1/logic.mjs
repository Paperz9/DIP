// function add(x,y) {
//   return x + y
// }

// let subtract = (x,y) => {
//   return x - y
// }

// exports = {add, subtract}
export function add(x,y) {
  if (x<0) {
    return -x+y;
  }
  return x + y
}

export function subtract(x,y) {
  return x - y
}
