const calcModule = require('./calculator');

var result = {
    "sum": null,
    "substract": null,
    "multifly": null,
    "divide": null
};
result.sum = calcModule.sum(1, 2);
result.substract = calcModule.substract(1, 2);
result.multifly = calcModule.multiply(1, 2);
result.divide = calcModule.divide(1, 2);

console.log(result);