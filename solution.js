function evenOrOdd(n) {  // here n takes input
  return (n % 2 == 0) ? 'Even' // if number remainder is 0 then even
  : (n !=  parseInt(n)) ? 'Not an integer' // if n is not a integer then not an integer
  : 'Odd' // else odd
}
