const $post = document.createElement("article");
//setAttribute(セレクタ名, セレクタの値)
$post.setAttribute("class", "post");
$post.innerText = "お腹減ったなう。";

const $timeline = document.querySelectorAll(".timeline")[0];
//appendChild()→取得したHTML要素に使うと、引数に入れた別のHTML要素を挿入することができる。
$timeline.appendChild($post);