import greet from './greet.js';

describe('greet', () => {
  it('returns a string "Hello you!" if called without arguments', () => {
    const result = greet();
    expect(result).toBe('Hello you!');
  });
  it('returns "Hello Coach!" when called with getGreeting("Lene")', () => {
    const result = greet('Lene');
    expect(result).toBe('Hello Coach!');
  });
  it('returns "Hello Merle" if called with the name Merle', () => {
    const result = greet('Merle');
    expect(result).toBe('Hello Merle');
  });
});
