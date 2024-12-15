type ToBeOrNotToBe = {
  toBe: (val: any) => boolean;
  notToBe: (val: any) => boolean;
};

function expect(funcVal: any): ToBeOrNotToBe {
  const toBe = (val: any) => {
    if (funcVal === val) return true
    else throw Error('Not Equal')
  }
  const notToBe = (val: any) => {
    if (funcVal !== val) return true
    else throw Error('Equal')
  }

  return {
    toBe,
    notToBe
  }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */

console.log(expect(5).toBe(5));
console.log(expect(5).notToBe(5));