import Swordsman from '../Swordsman';

test('should create Swordsman check type', () => {
  const swordsman = new Swordsman('aa', 'Swordsman');

  expect(typeof swordsman).toBe('object');
});

test('should create Swordsman attack', () => {
  const swordsman = new Swordsman('aa', 'Swordsman');

  expect(swordsman.attack).toBe(40);
});

test('should create Swordsman defence', () => {
  const swordsman = new Swordsman('aa', 'Swordsman');

  expect(swordsman.defence).toBe(10);
});
