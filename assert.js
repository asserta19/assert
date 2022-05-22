// console.assert does not halt :(
export function assert(x) {
  if (!x) throw new Error("assertion failed");
}
