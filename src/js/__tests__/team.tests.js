import Team from "../class/team";

test('work in team', () => { 
    const team = new Team();
    team.add('Sasha')
    expect(() => team.add('Sasha')).toThrow();
    expect(() => team.addAll('Masha', 'Petr')).not.toThrow();
    expect(team.members.has('Masha')).toBe('true');
    expect(team.toArray()).toBeInstanceOf(Array);
})

