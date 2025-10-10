// windowに対するaddEventListenerはWebページ全体に対するイベント
// window.addEventListener("イベントタイプ", "イベント時に実行する関数")
window.addEventListener("load", function(){
    alert("読み込み完了");
})

// documentに対するaddEventListenerは個々のHTML要素に関するイベントを設定（ボタンや画像など）
// document.addEventListener()
document.querySelector("#button").addEventListener("click", function(){
    console.log("クリックされた！");
});