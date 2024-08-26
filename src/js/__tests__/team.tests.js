import Team from "../class/team";

// test('work in team', () => { 
//     const team = new Team();
//     team.add('Sasha')
//     expect(() => team.add('Sasha')).toThrow();
//     expect(() => team.addAll('Masha', 'Petr')).not.toThrow();
//     expect(team.members.has('Masha')).toBe('true');
//     expect(team.toArray()).toBeInstanceOf(Array);
// })

test('work in team array', () => { 
    const team = new Team();
    team.add('Sasha')
    expect(team.toArray()).toEqual(['Sasha']);
});

test('work in team', () => { 
    const team = new Team();
    team.add('Sasha')
    expect(() => team.add('Sasha')).toBe('Such an object already exists in the team')
});

test('work in team all', () => { 
    const team = new Team();
    team.add('Ivan', 'Petr')
    expect(team.toArray()).toEqual(['Ivan', 'Petr'])
})