import { useState } from "react";

function FizzBuzz() {
  return <div></div>;
}

export default FizzBuzz;

export function fizzBuzz(i) {
  if (i % 3 !== 0 && i % 5 !== 0) {
    return i;
  } else if (i % 5 === 0 && i % 3 === 0) {
    return "FizzBuzz";
  } else if (i % 5 === 0) {
    return "Buzz";
  } else if (i % 3 === 0) {
    return "Fizz";
  }
}
