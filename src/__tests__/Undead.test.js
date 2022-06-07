import Undead from '../Undead';

test('should create Undead check type', () => {
  const undead = new Undead('aa', 'Undead');

  expect(typeof undead).toBe('object');
});

test('should create Undead attack', () => {
  const undead = new Undead('aa', 'Undead');

  expect(undead.attack).toBe(25);
});

test('should create Undead defence', () => {
  const undead = new Undead('aa', 'Undead');

  expect(undead.defence).toBe(25);
});
