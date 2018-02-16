export const sum = (a: number, b: number): number => a + b
export const subtract = (a: number, b: number): number => a - b
export const multiply = (a: number, b: number): number => a * b
export const divide = (a: number, e: number): number => a / e
export interface ILifecycle {
  start: () => void;
  stop: () => void;
}
