import Bowman from '../Bowman';

test('should create Bowman check type', () => {
  const bowman = new Bowman('aa', 'Bowman');

  expect(typeof bowman).toBe('object');
});

test('should create Bowman attack', () => {
  const bowman = new Bowman('aa', 'Bowman');

  expect(bowman.attack).toBe(25);
});

test('should create Bowman defence', () => {
  const bowman = new Bowman('aa', 'Bowman');

  expect(bowman.defence).toBe(25);
});
