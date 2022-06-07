import Magician from '../Magician';

test('should create Magician check type', () => {
  const magician = new Magician('aa', 'Magician');

  expect(typeof magician).toBe('object');
});

test('should create Magician attack', () => {
  const magician = new Magician('aa', 'Magician');

  expect(magician.attack).toBe(10);
});

test('should create Magician defence', () => {
  const magician = new Magician('aa', 'Magician');

  expect(magician.defence).toBe(40);
});
