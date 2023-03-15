enum Role {
  ADMIN = 5,
  READ_ONLY = 100,
  AUTHOR = 200,
  TEST,
}

enum Color {
    Red,
    Green,
    Blue,
  }
  
  /**
   *
   *We can use an enum in TypeScript to define a variable or function parameter with a specific set of allowed values. For example, we could define a function that only accepts values from the Color enum
   * @param {Color} color
   */
  function printColor(color: Color) {
    console.log(color);
  }
  
  printColor(Color.Red); // logs 0
  printColor(Color.Green); // logs 1
  printColor(Color.Blue); // logs 2
  

const person = {
  name: "Maximilian",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

//leteral types
function combine(
  input: number | string,
  input2: number | string,
  resultConversion: "as-number" | "as-text" //leteral types
) {
  if ((resultConversion = "as-number")) {
  }
}

