import Zombie from '../Zombie';

test('should create Zombie check type', () => {
  const zombie = new Zombie('aa', 'Zombie');

  expect(typeof zombie).toBe('object');
});

test('should create Zombie attack', () => {
  const zombie = new Zombie('aa', 'Zombie');

  expect(zombie.attack).toBe(40);
});

test('should create Zombie defence', () => {
  const zombie = new Zombie('aa', 'Zombie');

  expect(zombie.defence).toBe(10);
});
