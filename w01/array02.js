var arr1 = [];
console.log(arr1);
console.log(typeof arr1);

var arr2 = new Array(1, 2, 3, 4, 5);
console.log(arr2);
console.log(typeof arr2);

var arr3 = ['이진호', 1, 2, 3, null, {
  name: 'jh',
  age: 27
}];
console.log(arr3);
console.log(typeof arr3);

console.log('************************************************');

console.log(arr1.length);
console.log(arr2.length);
console.log(arr3.length);

var arr = [1, 2, 3, 4];
console.log(`arr 의 길이 : ${arr.length}`);

arr.push('new item');
console.log(`push 결과 : ${arr}`);

arr.pop();
console.log('pop 결과 : ', arr);

arr.unshift('first item');
console.log(`unshift 결과 : ${arr}`);

arr.shift();
console.log('shift 결과 : ', arr);

console.log('arr.include(4) 결과 : ', arr.includes(4));
console.log('arr.include(100) 결과 : ', arr.includes(100));

console.log('arr.indexOf(4) 결과 : ', arr.indexOf(4));
console.log('arr.indexOf(100) 결과 : ', arr.indexOf(100));

var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var concatArr = arr1.concat(arr2);
console.log('arr1.concat(arr2) 결과 : ', concatArr);

var location = ['서울', '대전', '대구', '부산'];
console.log(location.join('-> '));
console.log(location.reverse().join('-> '));
console.log(location);
console.log(location.reverse());

var countries = ['Österreich', 'Andorra', 'Vietnam'];
console.log(countries.sort((a, b) => a > b ? 1 : -1));
console.log(countries.sort(function (a, b) {
  return a.localeCompare(b);
}));
console.log('오름차순 정렬 : ', concatArr.sort((a, b) => a - b));
console.log('내림차순 정렬 : ', concatArr.sort(function (a, b) {
  return b - a;
}));


// filter : 배열 요소 전체를 대상으로 조건을 걸어서 조건충족하는 결과를 새로운 배열로 반환.
var number = [100, 234, -125, 1, 23, -637, -123, 99, 2, 3, 4, 5];
var minusNumber = number.filter(item => item < 0);
console.log('minusNumber : ', minusNumber);

// map : 배열 요소 전체를 대상으로 함수를 호출하고 그 결과를 새로운 배열로 반환.
var countries = ['Österreich', 'Andorra', 'Vietnam', 'Korea', 'China'];
var countriesLengths = countries.map(item => item.length);
console.log('countriesLengths : ', countriesLengths);

// reduce : map 과 달리 하나의 값을 반환할 때 사용 (ex. 배열원소들의 합)
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sum = number.reduce((previousValue, currentValue) => {
  console.log(`previousValue : ${previousValue}, currentValue : ${currentValue}`);
  return previousValue + currentValue;
});
console.log('sum : ', sum);


// 배열 순회
var serverPart = ["김현기", "석영현", "강준우", "송정우", "신지혜", "이영은", "이진호"];
let serverIndexStr = '서버파트 여러분 번호 한번 세겠습니다. "';
let serverPartMemberNameStr = '서버파트 여러분 이름 한번씩만 불러주세요~ "'

for (let item in serverPart) {
  serverIndexStr += item + '! ';
}
console.log(serverIndexStr);

for (let item of serverPart) {
  serverPartMemberNameStr += item + '! ';
}
console.log(serverPartMemberNameStr);

serverPart.forEach(item => {
  console.log(item);
});