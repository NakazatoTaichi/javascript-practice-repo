//alertはwindowオブジェクトのメソッド
//windowは省略することもできる

// window.alert("危険です");
// alert("危険です");

//documentオブジェクト→windowオブジェクトが持つプロパティの一つ
//HTMLやCSSの操作を行うことができる

// console.log(document);
document.querySelector("#pokemon").innerText = "ポケモンゲットだぜ！";
document.querySelector("#pokemon").style.backgroundColor = "#000";

const timer = setTimeout(function() {
    alert("こんにちは！");
}, 5000);

clearTimeout(timer);