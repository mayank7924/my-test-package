Install the package using

```
npm i basic-adder
```

The package only exposes a single method as default, which can be used to add two numbers as follows

```
const adder = require("basic-adder");

const result = adder(2, 3);

console.log(result); //5

const floatSum = adder(0.2, 0.3);

console.log(floatSum); //0.5
```

The function also takes care of type casting numeric string and boolean values
```
adder(2, false); // returns 2
adder(0.2, true); // returns 1.2
adder(1, '2'); // returns 3
adder('1', '2'); // returns 3
adder(true, false); // returns 1, false=0, true=1
```
