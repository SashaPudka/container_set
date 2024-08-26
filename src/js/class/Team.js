import Character from "./Character";

class Team {
    constructor() {
        this.members = new Set();
    }
    add(data) {
        if (this.members.has(Character)) {
            throw new Error("Such an object already exists in the team");
        }
            this.members.add(data);
    }

    addAll(...data) {
        for (const i of Character) this.members.add(i)
    }

    toArray() {
        return toArray.from(this.members)
    }
}

export default Team

