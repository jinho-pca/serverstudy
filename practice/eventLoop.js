function greet(){
    console.log('Hello!');
}

function timer(){
    return setTimeout(() => {
        console.log('End!');
    }, 3000);
}

greet();
timer();

// setTimeout() 에서 매개변수로 0ms 를 주더라도 결국 call stack엔 task2와 task3이
// 들어가있어서 그것들을 실행하고 마지막에 처리된다.
function task1(){
    setTimeout( () => {
        console.log('task1');
    }, 0);
}

function task2(){
    console.log('task2');
}

function task3(){
    console.log('task3');
}

task1();
task2();
task3();
task3();
task3();
task3();
task3();
task3();