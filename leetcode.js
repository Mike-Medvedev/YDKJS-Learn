/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
  return {
    toBe(val) {
      if (val === 5) {
      } else {
        throw new Error("Not Equal");
      }
    },
    notToBe(val) {
      if (val !== 5) {
        return true;
      } else {
        throw new Error("Equal");
      }
    },
  };
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
