const { remise } = require('../src/remise');

test('25% de remise sur 100 euros donnent 75 euros', () => {
  expect(remise(100, 25)).toBe(75);
});

test('25 % de remise sur 200 euros donnent 150 euros', () => {
  expect(remise(200, 25)).toBe(150);
});

test('une remise au-dessus de 100 est refusee', () => {
  expect(() => remise(200, 120)).toThrow('Remise invalide');
});
