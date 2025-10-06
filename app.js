const pikachu = {
    name: "ピカチュウ",
    level: 18,
    types: ["でんき"],
    skills: ["10万ボルト", "でんこうせっか", "たいあたり"],
    levelUp: function() {
        this.level++;
        if (this.level >= 20) {
            this.skills.push("スパーク");
        };
    },
};

console.log(pikachu.level, pikachu.skills);
pikachu.levelUp();
console.log(pikachu.level, pikachu.skills);
pikachu.levelUp();
console.log(pikachu.level, pikachu.skills);