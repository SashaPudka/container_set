class Team {
    constructor(name) {
        this.name = name;
        this.members = new Set();
    }

    add(member) {
        if (this.members.has(member)) {
            throw new Error("Such an object already exists in the team");
        }
            this.members.add(member);
    }

    addAll(...rest) {
        rest.forEach((member) => this.members.add(member));
    }

    toArray() {
        return Array.from(this.members);
    }
}

export default Team

