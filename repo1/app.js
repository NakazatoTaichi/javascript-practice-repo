document.querySelector("#button").addEventListener("click", function(){
    $rand = Math.random();
    if($rand <= 0.2) {
        console.log("ピカチュウをゲットした！");
    } else {
        console.log("残念！もう少しで捕まえられたのに！");
    }
});