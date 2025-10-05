const snsUser = {
    id: 1,
    username: "Taro",
    post: function(contents) {
        return contents + "を投稿しました by " + this.username;
    },
};

console.log(snsUser.post("プログラミングなう。"));