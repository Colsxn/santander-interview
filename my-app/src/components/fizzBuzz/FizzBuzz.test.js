const FizBuzz = require("./FizzBuzz");
import {fizzBuzz} from ("./FizzBuzz");

//test to check if When the integer is divisible by 3 the endpoint returns `Fizz`
test("test to check if When the integer is divisible by 3 the endpoint returns `Fizz`", () => {
    expect(fizzBuzz(3)).toBe("Fizz");
  });
  

//	When the integer is divisible by 5 the endpoint returns `Buzz`
test("When the integer is divisible by 5 the endpoint returns `Buzz`", () => {
    expect(fizzBuzz(5)).toBe("Buzz");
  });
  


//When the integer is divisible by both 3 and 5 the endpoint returns `FizzBuzz`
test("When the integer is divisible by both 3 and 5 the endpoint returns `FizzBuzz`", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });
  

//When the integer passed is not divisible by either 3 or 5 the endpoint returns the integer
test("When the integer passed is not divisible by either 3 or 5 the endpoint returns the integer", () => {
    expect(fizzBuzz(4)).toBe();
  });
  