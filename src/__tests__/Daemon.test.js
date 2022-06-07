import Daemon from '../Daemon';

test('should create Daemon check type', () => {
  const daemon = new Daemon('aa', 'Daemon');

  expect(typeof daemon).toBe('object');
});

test('should create Daemon attack', () => {
  const daemon = new Daemon('aa', 'Daemon');

  expect(daemon.attack).toBe(10);
});

test('should create Daemon defence', () => {
  const daemon = new Daemon('aa', 'Daemon');

  expect(daemon.defence).toBe(40);
});
