//===================================================================================
//===================================================================================
//===================================================================================

//Function

//regular function
function printHelloWorld(text) {
  console.log(text);
}

printHelloWorld("Hello Dumbways");
printHelloWorld("Hello Kelas Persiapan");

//regular function dengan parameter
function operasiPengurangan(number1, number2) {
  console.log(number1 - number2);
  return number1 - number2;
}

//regular function dengan expression
var sumOperation = function operasiPenjumlahan(number1, number2) {
  console.log(number1 + number2);
  return number1 + number2;
};

var hasil = sumOperation(1, 4);
var hasil2 = sumOperation(100, 30);

var hasil3 = operasiPengurangan(10, 4) + sumOperation(100, 50);

console.log(hasil);
console.log(hasil2);

console.log(hasil3);

//variable dengan anonymous function

var helloGuys = function () {
  alert("Hello All");
};

var hello = function () {
  return "hello world";
};

//global function
function showGreeting() {
  return "Selamat Sore";
}

//nested function
function showMessage() {
  //scope / local function
  function showHello() {
    return "hello semua ";
  }

  return showHello() + showGreeting();
}

console.log(showMessage());
console.log(showGreeting());

//arrow Function ES6

function printMyName() {
  return "My Name is Fadhil";
}

printMyName();

var printMyName2 = () => {
  return "My Name is Fadhil 2";
};

//jika return 1 baris code saja
var printMyName3 = () => "My Name is Fadhil 2";

printMyName2();

printMyName3();
