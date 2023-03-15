var Role;
(function (Role) {
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role[Role["READ_ONLY"] = 100] = "READ_ONLY";
    Role[Role["AUTHOR"] = 200] = "AUTHOR";
    Role[Role["TEST"] = 201] = "TEST";
})(Role || (Role = {}));
var person = {
    name: "Maximilian",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN
};
//leteral types
function combine(input, input2, resultConversion //leteral types
) {
    if ((resultConversion = "as-number")) {
    }
}
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
function printColor(Color) {
    console.log(Color);
}
printColor(Color.Red); // logs 0
printColor(Color.Green); // logs 1
printColor(Color.Blue); // logs 2
