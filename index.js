var names = [
  "Mr. Fahri",
  "Mr. Abdul",
  "Mrs. Josephhine",
  "Mr. Joseph",
  "Mr. Paul",
  "Mrs. Paula",
  "Mr. Hakim"
];

console.log('----- LEVEL 0 -----');

names.forEach(name => console.log(name));

console.log('----- LEVEL 1 -----');

var mr = names.filter(word => word.startsWith('Mr.'))

mr.forEach(name => console.log(name))

console.log('----- LEVEL 2 -----');

var mrs = names.filter(word => word.startsWith('Mrs.'))

names.forEach(name => {
  if(name.startsWith('Mrs.')){
    console.log(name + " (female)");
  } else {
    console.log(name + " (male)");
  }
})

console.log('----- LEVEL 3 -----');

function search_name(keyword){
  var findWord = names.find(word => word.includes(keyword));
  return findWord
}

console.log(search_name('Fahri'));

console.log('----- LEVEL 4 -----');

var names1 = ["Mr. Fahri", "Mr. Abdul", "Mrs. Josephhine"];
var names2 = ["Mr. Joseph", "Mr. Paul", "Mrs. Paula", "Mr. Hakim"];

names = names1.concat(names2);
console.log(names)

console.log('----- LEVEL 5 -----');

names = [
  "Mr. Fahri",
  null,
  undefined,
  "Mr. Abdul",
  24,
  "Mrs. Josephhine",
  "Mr. Joseph",
  "Mr. Paul",
  32,
  "Mrs. Paula",
  7,
  22,
  "Mr. Hakim"
];

var showString = names.filter(word => typeof word == 'string')
console.log(showString.join(', '))
