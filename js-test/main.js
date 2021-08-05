import getType from './getType';


/*
// 산술 연산자 arithmetic operator
console.log(1 + 2);
console.log(5 - 7);
console.log(3 * 4);
console.log(12 / 2);
console.log(18 % 5);


// 할당 연산자 assignment operator
let a = 2;

//a = a + 1;
a += 1

console.log(a);


// 비교 연산자 comparison operator
// function isEqual(x, y) {
//     return x === y;
// }
// console.log(isEqual(1, 1));
// console.log(isEqual(2, '2'));

const a = 7;
const b = 7;

console.log(a === b);
console.log(a !== b); // 불일치 연산자
console.log(a < b);
console.log(a >= b);


// 논리 연산자 logical operator
const a = 1 === 1;
const b = 'AB' === 'Ab';
const c = true;

console.log(a);
console.log(b);
console.log(c);

console.log('\"&&\" : ', a && b && c);
console.log('\"||\" : ', a || b || c);
console.log('\"!\" : ', !a);


// 삼항 연산자 ternaty operator

const a = 1 < 2; // true

if (a) {
    console.log('참');
} else {
    console.log('거짓');
}

console.log(a ? '참' : '거짓');


import random from './getRandom';

// 조건문
const a = random();

switch (a) {
    case 0:
        console.log('a is 0');
        break
    case 1:
        console.log('a is 1');
        break
    case 3:
        console.log('a is 3');
        break
    default:
        console.log('rest...');
}

if (a === 0) {
    console.log('a is 0');
} else if (a === 2) {
    console.log('a is 2');
} else if (a === 4) {
    console.log('a is 4');
} else {
    console.log('rest...');
}


// 반복문
const ulEl = document.querySelector('ul');

for (let i = 0; i < 10; i++) {
    const liEL = document.createElement('li');
    liEL.textContent = `list-${i + 1}`;
    if (i % 2 === 0) {
        liEL.addEventListener('click', function () {
            console.log(liEL.textContent)
        });
    }
    ulEl.appendChild(liEL);
}


// 변수 유효범위 Variable Scope
// var 함수범위 -> 권장하지 않음
// let, const 블럭(중괄호) 범위

function scope() {
    if (true) {
        const a = 123;
        console.log(a);
    }
}
scope()


// 형 변환 Type conversion
// == -> 값을 비교하므로 의도하지 않게 true값이 나올 수 있음
const a = 1;
const b = '1';
console.log(a == b);

// Truthy(참 같은 값)
// true, {}, [], 1, 2, 'false', -12, '3.14'...

// Falsy(거짓 같은 값)
// false, '', null, undefined, 1, -1, NaN
if ('false') {
    console.log(123);
}
*/


// 함수 복습
function sum(x, y) { // 함수 선언에 선언된 함수에 사용되는 변수 = 매개변수
    return x + y;
}

const a = sum(1, 3);
const b = sum(4, 12); // 함수에 들어가는 특정 값 = 인수

console.log(a);
console.log(b);
console.log(a + b);

function sem() {
    console.log(arguments);
    return
}

console.log(sem(7, 3));