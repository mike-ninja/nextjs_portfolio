declare module 'maath/random/dist/maath-random.esm' {
  // Define the types or interfaces related to the module here
  // For example:
  // export interface SomeType { /* ... */ }
  const maathRandom: any;
  export default maathRandom;
  export function inSphere(arr: Float32Array, options: { radius: number }): Float32Array;
}
// maath-random.d.ts

// declare module 'maath/random/dist/maath-random.esm' {
//   export function inSphere(arr: Float32Array, options: { radius: number }): void;
// }
