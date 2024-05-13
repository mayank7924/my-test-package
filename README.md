Install the package using

```
npm i basic-adder
```

The package only exposes a single method as default, which can be used to add two numbers as follows

```
const adder = require("basic-adder");

const result = adder(2, 3);

console.log(result); //5
```

The function also takes care of type casting string/boolean values
