import Character from '../Character';

test('should create character check type', () => {
  const bowman = new Character('aa', 'Bowman');

  expect(typeof bowman).toBe('object');
});

test('should not create character short name', () => {
  expect(() => {
    new Character('a', 'Bowman');
  }).toThrow(Error);
});

test('should not create character long name', () => {
  expect(() => {
    new Character('1234567890a', 'Bowman');
  }).toThrow(Error);
});

test('should not create character wrong type', () => {
  expect(() => {
    new Character('aa', 'test');
  }).toThrow(Error);
});

test('should create character check name', () => {
  const bowman = new Character('aa', 'Bowman');

  expect(bowman.name).toBe('aa');
});

test('should create character check type Bowman', () => {
  const bowman = new Character('aa', 'Bowman');

  expect(bowman.type).toBe('Bowman');
});

test('should create character check type Daemon', () => {
  const bowman = new Character('aa', 'Daemon');

  expect(bowman.type).toBe('Daemon');
});

test('should create character check health on create', () => {
  const bowman = new Character('aa', 'Bowman');

  expect(bowman.health).toBe(100);
});

test('should create character check level on create', () => {
  const bowman = new Character('aa', 'Bowman');

  expect(bowman.level).toBe(1);
});

test('should create character check func levelUp exist', () => {
  const bowman = new Character('aa', 'Bowman');

  expect(typeof bowman.levelUp).toBe('function');
});

test('should create character check func levelUp works level check', () => {
  const bowman = new Character('aa', 'Bowman');
  bowman.levelUp();

  expect(bowman.level).toBe(2);
});

test('should create character check func levelUp works attack check 1', () => {
  const bowman = new Character('aa', 'Bowman');
  bowman.attack = 10;
  bowman.defence = 10;
  bowman.levelUp();

  expect(bowman.attack).toBe(10 * 1.2);
});

test('should create character check func levelUp works attack check 2', () => {
  const bowman = new Character('aa', 'Bowman');
  bowman.attack = 100;
  bowman.defence = 10;
  bowman.levelUp();

  expect(bowman.attack).toBe(100 * 1.2);
});

test('should create character check func levelUp works defence check 1', () => {
  const bowman = new Character('aa', 'Bowman');
  bowman.attack = 10;
  bowman.defence = 10;
  bowman.levelUp();

  expect(bowman.defence).toBe(10 * 1.2);
});

test('should create character check func levelUp works defence check 2', () => {
  const bowman = new Character('aa', 'Bowman');
  bowman.attack = 10;
  bowman.defence = 100;
  bowman.levelUp();

  expect(bowman.defence).toBe(100 * 1.2);
});

test('should create character check func levelUp works restore health', () => {
  const bowman = new Character('aa', 'Bowman');
  bowman.health = 1;
  bowman.attack = 10;
  bowman.defence = 10;
  bowman.levelUp();

  expect(bowman.health).toBe(100);
});

test('should create character check func levelUp throw error with health 0', () => {
  expect(() => {
    const bowman = new Character('aa', 'Bowman');
    bowman.health = 0;
    bowman.attack = 10;
    bowman.defence = 10;
    bowman.levelUp();
  }).toThrow(Error);
});

test('should create character check func damage exist', () => {
  const bowman = new Character('aa', 'Bowman');

  expect(typeof bowman.damage).toBe('function');
});

test('should create character check func damage health 0', () => {
  const bowman = new Character('aa', 'Bowman');
  bowman.health = 0;
  bowman.attack = 10;
  bowman.defence = 10;
  bowman.damage(100);

  expect(bowman.health).toBe(0);
});

test('should create character check func damage 10', () => {
  const bowman = new Character('aa', 'Bowman');
  bowman.attack = 10;
  bowman.defence = 50;
  bowman.damage(10);

  expect(bowman.health).toBe(95);
});

test('should create character check func damage 198', () => {
  const bowman = new Character('aa', 'Bowman');
  bowman.attack = 10;
  bowman.defence = 50;
  bowman.damage(198);

  expect(bowman.health).toBe(1);
});

test('should create character check func damage 200', () => {
  const bowman = new Character('aa', 'Bowman');
  bowman.attack = 10;
  bowman.defence = 50;
  bowman.damage(200);

  expect(bowman.health).toBe(0);
});

test('should create character check func damage 201', () => {
  const bowman = new Character('aa', 'Bowman');
  bowman.attack = 10;
  bowman.defence = 50;
  bowman.damage(201);

  expect(bowman.health).toBe(0);
});
