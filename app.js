function foo(callback) {
    console.log("Hi, Tom!");
    callback();
}

function bar() {
    console.log("Hi, Ken!");
}

foo(bar);