var sortPeople = function (names, heights) {
  //   let obj = {};
  //   for (let i = 0; i < names.length; i++) {
  //     obj[names[i]] = heights[i];
  //   }
  //   Object.keys(obj).forEach((key, index) => {
  //     if (obj[key] > obj[key + 1]) {
  //       obj[key] = index;
  //     }
  //   });
  //   console.log(obj);
  //   .map((a) => a[0])

  let finalArray = [];
  for (let i = 0; i < names.length; i++) {
    finalArray.push([names[i], heights[i]]);
  }

  return finalArray.sort((a, b) => b[1] - a[1]).map((a) => a[0]);
};

names = ["Mary", "John", "Emma"];
heights = [180, 165, 170];

const result = sortPeople(names, heights);
console.log(result);

// heights.sort((a, b) => b - a);
// console.log(heights);
