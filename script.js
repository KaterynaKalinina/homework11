// Task 1

const runner = {
    $$runnerId: null,
    $$tasks: [],
    setSpeed: function (speed) {
        this.stop();
        this.start(speed);
    },
    add: function (task) {
        this.$$tasks.push(task);
    },
    start: function (speed) {
        var _this = this;
        this.$$runnerId = setTimeout(function callback() {
            _this.$$tasks.forEach(function (sb) {
                sb();
            })
            _this.$$runnerId = setTimeout(callback, speed);
        }, speed);
    },
    stop: function () {
        clearTimeout(this.$$runnerId);
    }
}

runner.add(() => console.log('Hello'));
runner.add(() => console.log('World'));

runner.setSpeed(2000);

// Task 2

function maplike(cb, arr) {
    const newArr = [];
    for (let index = 0; index < arr.length; index++) {
        newArr.push(cb(arr[index]));
    }
    return newArr;
};

const incrementing = (elem) => elem + 1;
const numbers = [1,2,3,4];

console.log(maplike(incrementing, numbers));
console.log(numbers.map(incrementing));
console.log(numbers);