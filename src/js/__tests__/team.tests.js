import Character from "../class/Character";
import Team from "../class/Team"

test('new team', () => {
  const description = new Team('Reya');
  const result = { name: 'Reya', members: new Set() };
  expect(description).toEqual(result);
});

test('add new person', () => {
  const team = new Team('Reya');
  const unit = new Character('warrior');
  team.add(unit);
  const result = {
    name: 'Reya',
    members: new Set([{
      name: 'warrior',
      level: 1,
      health: 100,
    }]),
  };
  expect(team).toEqual(result);
});

test('error with new person', () => {
  const team = new Team('Reya');
  const unit = new Character('warrior');
  team.add(unit);
  expect(() => team.add(unit)).toThrow(new Error('Such an object already exists in the team'));
});

test('addAll new person', () => {
  const team = new Team('Reya');
  const unit1 = new Character('warrior1');
  const unit2 = new Character('warrior2');
  const unit3 = new Character('warrior3');
  team.addAll(unit1, unit2, unit3);
  const result = {
    name: 'Reya',
    members: new Set([{
      name: 'warrior1',
      level: 1,
      health: 100,
    },
    {
      name: 'warrior2',
      level: 1,
      health: 100,
    },
    {
      name: 'warrior3',
      level: 1,
      health: 100,
    }]),
  };
  expect(team).toEqual(result);
});

test('addAll', () => {
  const team = new Team('Reya');
  const unit1 = new Character('warrior1');
  const unit2 = new Character('warrior2');
  const unit3 = new Character('warrior3');
  team.addAll(unit1, unit2, unit3, unit3);
  const result = {
    name: 'Reya',
    members: new Set([{
      name: 'warrior1',
      level: 1,
      health: 100,
    },
    {
      name: 'warrior2',
      level: 1,
      health: 100,
    },
    {
      name: 'warrior3',
      level: 1,
      health: 100,
    }]),
  };
  expect(team).toEqual(result);
});

test('toArray', () => {
  const team = new Team('Reya');
  const unit1 = new Character('warrior1');
  const unit2 = new Character('warrior2');
  const unit3 = new Character('warrior3');
  team.addAll(unit1, unit2, unit3);
  const result = [
    {
      name: 'warrior1',
      level: 1,
      health: 100,
    },
    {
      name: 'warrior2',
      level: 1,
      health: 100,
    },
    {
      name: 'warrior3',
      level: 1,
      health: 100,
    }];
  expect(team.toArray()).toEqual(result);
});