var foo = "hello bobby";

var goo = foo.split("").filter((x)=> x.match(/[aeiou]/)).length

console.log(goo)