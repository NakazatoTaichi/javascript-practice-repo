// const snsUser = {
//     id: 1,
//     username: "Taro",
//     like: function() {},
//     post: function() {},
//     followers: ["Yamada", "Suzuki", "Tanaka"],
//     following: ["Yamada", "Suzuki"],
//     premium: true,
//     darkMode: false,
//     posts: null,
// }

// console.log(snsUser.followers[1]);

const snsUser = {
    id: 1,
    username: "Taro",
    like: function() {},
    post: function() {},
    followers: ["Yamada", "Suzuki", "Tanaka"],
    following: ["Yamada", "Suzuki"],
    posts: null,
    settings: {
        premium: true,
        darkMode: false,
    },
    actions: {
        like: () => {
            console.log("こんにちは");
        },
        post: () => {}
    }
}

console.log(snsUser.settings.darkMode);
