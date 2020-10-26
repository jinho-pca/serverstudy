let arr = [];
for (var i = 0; i < 10; i++) {
  arr[i] = i;
}
console.log(arr.length);

const obj = [{
    name: 'jinho',
    age: 27
  },
  {
    name: 'hyerin',
    age: 25
  }
]

console.log(obj[0].name);
console.log(obj[1].name);

obj[1].name = 'hyerinMin';
console.log(obj[1].name);