export const sum = (a: number, b: number): number => a + b

export interface ILifecycle {
  start: () => void;
  stop: () => void;
}
