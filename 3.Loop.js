function printWord() {
  //ambil value dari input id input-perulangan dan tampung pada variable count
  var count = document.getElementById("input-perulangan").value;
  //variable start, perulangan dimulai dari mana? dalam kasus ini dari 1
  var start = 1;
  //init sebuah array kosong
  var temp = [];

  // lakukan perulangan sesuai dengan jumlah count
  while (start <= count) {
    //setiap perulangan tambahkan value baru kedalam array kosong
    temp.push(`<li>Hello World ${start}</li>`);
    //start ditambah 1 setiap kali perulangan
    start++;
  }
  //perulangan selesai hingga kondisi terpenuhi
  //dalam kasus ini perulangan selesai hingga start nilainya sama dengan count

  //tampilkan output pada element ul dengan id output-perulangan yang sudah
  //ditampung pada variable temp
  document.getElementById("output-perulangan").innerHTML = temp;
}

// 1 <= 10, true
// 1 + 1 = 2 <= 10, true
// 2 + 1 = 3 <= 10, true
// 3 + 1 = 4 <= 10, true
// 4 + 1 = 5 <= 10, true
// 5 + 1 = 6 <= 10, true
// 6 + 1 = 7 <= 10, true
// 7 + 1 = 8 <= 10, true
// 8 + 1 = 9 <= 10, true
// 9 + 1 = 10 <= 10, true
// 10 + 1 = 11 <= 10, false

function printBiodata() {
  var firstName = document.getElementById("first-name").value;
  var lastName = document.getElementById("last-name").value;
  var gender = document.getElementById("gender").value;

  var fullName = firstName + " " + lastName;

  var output = `
    <h2>Fullname: ${fullName}</h2>
    <h3>Gender: ${gender}</h3>
  `;

  document.getElementById("output-biodata").innerHTML = output;
}
