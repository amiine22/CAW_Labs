//setOne Function
const setOne = arr => arr.filter((val, index, self) => self.indexOf(val) === index);

console.log(setOne([4, 5, 5, 2, 2, 4, 3, 1, 5, 2])); 


//getRidOf
const getRidOf = (tab, ...val) => tab.filter(item => !val.includes(item));

console.log(getRidOf(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 'b', 'e', 'x'));