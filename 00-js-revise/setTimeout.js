let string = "vaibhav";

let start = 0;
let end = string.length - 1;

while (start < end) {
  [string[start], string[end]] = swap(string[start], string[end]);
  start++;
  end--;
}
console.log(end);
console.log(string);

function swap(a, b) {
  let temp = a;
  a = b;
  b = temp;
  return [a, b];
}
