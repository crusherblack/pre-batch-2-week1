document.getElementById("testing").innerHTML = "INI DARI JAVASCRIPT";

//===================================================================================
//===================================================================================
//===================================================================================

//Primitive Data Types

//var
//let
//const

var name = "Samsul Rijal"; //variable dengan type var dan type datanya adalah string
var semester = 6; //number
var isFreelance = true; //boolean
var bilangBerkoma = 9.5; //number

console.log(typeof name);
console.log(typeof semester);
console.log(typeof isFreelance);
console.log(typeof bilangBerkoma);

var bilangan1 = 100; //number
var bilangan2 = 2000; //number
var penjumlahan = bilangan1 + bilangan2; // 2100
var apakahLebihKecil = bilangan1 < bilangan2; //true

console.log(penjumlahan);
console.log(apakahLebihKecil);

var hello; //undefined
var kosong = null; //null
console.log(hello);
console.log(kosong);

//===================================================================================

//Non Primitive Data Types

//Array merupakan sebuah type data yang mampu menyimpan berbagai macam nilai seperti string, number, boolean hingga object
//Index merupakan idetifikasi setiap value pada array
//Index dimulai dari 0
var namaAnakKelasPersiapan = ["Cyra", "Orbit", "Iqbal", "Rudi", "Tito"]; //array of strings
var tahun = [2020, 2021, 2022]; //array of numbers
var boolean = [true, false, true]; //array of boolean

console.log(namaAnakKelasPersiapan);
console.log(tahun);
console.log(boolean);
//menampilkan value array menggunakan index
console.log(namaAnakKelasPersiapan[3]);

var profile = {
  name: "Putri Shina",
  address: "Bandung",
  study: "UI",
  email: "putri@gmail.com",
  semester: 5,
};

const profile2 = ["Putri Shina", "Bandung", "UI", "putri@gmail.com", 5];

console.log(profile2[3]);
console.log(profile.email);

console.log(profile);

//cara akses spesifik object properties pada sebuah object
console.log(profile.name);
console.log(profile.address);
console.log(profile.study);

//array of object
const muridMurid = [
  {
    name: "Bayu",
    jk: "Laki-laki",
  },
  {
    name: "Dedi",
    jk: "Laki-laki",
  },
  {
    name: "Dinda",
    jk: "Perempuan",
  },
];

//menampung sebuah data dari array of object pada variable
var dataDedi = muridMurid[1].name;
var dataDinda = muridMurid[2].name;

//menampilkan data keseluruhan sebuah array
console.log(muridMurid);

//memilih value dari sebuah properti object pada array
console.log(muridMurid[2].name); //dinda

//menampilkan 2 value secara bersamaan
console.log(muridMurid[1].name, muridMurid[2].name);
console.log(dataDedi, dataDinda);

//menampilkan tanggal sekarang
var tanggal = new Date();
console.log(tanggal);

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
