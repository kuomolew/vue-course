import { describe, it, expect } from 'vitest';

import { evenOrOdd, multiply } from '@/playground';

describe('basic math', () => {
  it('adds two numbers', () => {
    expect(1 + 1).toBe(2.0);
  });

  describe('evenOrOdd', () => {
    describe('when number id even', () => {
      it('deternimes even or odd number', () => {
        expect(evenOrOdd(34)).toBe('even');
        expect(evenOrOdd(0)).toBe('even');
      });
    });

    describe('when number id odd', () => {
      it('deternimes even or odd number', () => {
        expect(evenOrOdd(33)).toBe('odd');
        expect(evenOrOdd(4.4)).toBe('odd');
        expect(evenOrOdd('4.4')).toBe('odd');
      });
    });
  });

  describe('multiply', () => {
    it('multiplies 2 numbers', () => {
      expect(multiply(1, 1)).toBe(1);
      expect(multiply(1, 0)).toBe(0);
      expect(multiply(-2, 3)).toBe(-6);
    });
  });
});
