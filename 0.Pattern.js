// 1
// 12
// 123
// 1234
// 12345

console.log("ini dari js pattern");

var x, y;

for (x = 1; x <= 5; x++) {
  console.log(`perulangan ${x}`);
  for (y = 1; y <= x; y++) {
    document.write(y);
    console.log(`yang diprint oleh perulangan ${x} adalah ${y}`);
    if (y == x) {
      continue;
    } else {
      document.write(" ");
    }
  }
  document.write("<br />");
}
