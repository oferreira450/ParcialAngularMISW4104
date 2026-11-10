import { Cafe } from './cafe';

describe('Cafe', () => {
  it('should create an instance', () => {
    expect(new Cafe(1, 'Café Especial para tí', 'Blend', 'Angelópolis, Antioquia', 'Panela, Durazno, Caramelo', 1920, '')).toBeTruthy();
  });
});
