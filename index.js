const util = require("util");

const binaryTree = {
  AA: {
    BA: {
      CA: true,
      CB: true,
    },
    BB: {
      CA: {
        DA: true,
        DB: true,
      },
      CB: true,
    },
  },
};

const isObject = (value) => {
  return typeof value === "object";
};

const inverse = (tree) => {
  return Object.keys(tree).reduce((acc, key) => {
    if (isObject(tree[key])) {
      return { [key]: inverse(tree[key]), ...acc };
    } else {
      return { [key]: tree[key], ...acc };
    }
  }, {});
};

const options = { depth: null, colors: true };
console.log("input: ", util.inspect(binaryTree, options));
console.log("------------------------------");
console.log("output: ", util.inspect(inverse(binaryTree), options));
