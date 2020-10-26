function cook(callback, timeout) {
    setTimeout(callback, timeout);
}

const ramenRecipe = () => {
    return new Promise((resolve, reject) => {
        cook(() => {
            console.log('[라면 진행상황]');
            resolve(`[라면 만들기 시작]`);
        }, 1000);
    });
};

const boilWater = (progress) => {
    return new Promise((resolve, reject) => {
        console.log('[라면] - 1. 물 끓이기 시작');
        cook(() => {
            resolve(`${progress} => 물 끓이기`);
        }, 2000);
    });
};

const putTheRamenAndSoupPowder = (progress) => {
    return new Promise((resolve, reject) => {
        console.log('[라면] - 2. 라면과 스프 넣기 완료 앞으로 3분간 끓기 시작');
        cook(() => {
            resolve(`${progress} => 면과 스프 넣기 후 3분간 끓이기`);
        }, 500);
    });
};

const delayThreeMinute = (progress) => {
    return new Promise((resolve, reject) => {
        console.log('[라면] - 3. 3분간 대기 시작');
        cook(() => {
            resolve(`${progress} => 라면 완성`);
        }, 3000);
    });
};

ramenRecipe() //
    .then(function (progress) {
        return boilWater(progress)
    })
    .then(function (progress) {
        return putTheRamenAndSoupPowder(progress)
    })
    .then(function (progress) {
        return delayThreeMinute(progress)
    })
    .then(function (progress) {
        console.log(progress);
    });