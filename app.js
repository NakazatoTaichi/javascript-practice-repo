// console.log(document.querySelector("#foo"));
// console.log(document.querySelectorAll(".bar")[0].innerHTML = "<div>Hello!<div>");

// document.getElementById("foo")
// console.log(document.getElementsByClassName("bar")[0].innerHTML = "<div>Hello!<div>");

const $foo = document.querySelectorAll(".bar");

//$→変数がHTMLを格納していることを表すプレフィックス
$foo[0].innerHTML = "<div>Hello!<div>";

//絶対に変わらない定数は大文字にする
const DOMAIN = "https://pokemon.com"

//true/falseで状態を表す系の変数=is〇〇
const isLogin = false;

//二つ以上の英単語をつなげたい場合(キャメルケース)
const pokemonName = "pikacyu"