let names = ['Jack', 'John', 'Bill', 'John', 'Rick', 'Bill', 'John'];
let nameCounts = {}

names.forEach(name => {
  if (nameCounts[name]) {
    nameCounts[name]++
  } else {
    nameCounts[name] = 1
  }
})

console.log(nameCounts) // Output: {Jack: 1, John: 3, Bill: 2, Rick: 1}
