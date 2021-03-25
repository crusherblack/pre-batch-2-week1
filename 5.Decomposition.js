var fullName, job, lainLain;

[fullName, job, , ...lainLain] = [
  "Dinda",
  "Frontend Developer",
  "Perempuan",
  "Bandung",
  "Lautan Api",
  "Ceweknya cantik",
];

document.write("<br/> " + fullName);
document.write("<br/> " + job);
document.write("<br/> " + lainLain);

var a = "1";
var b = "2";

[a, b] = [b, a];

document.write("<br/> " + a);
document.write("<br/> " + b);

//object destructuring

//ketika ingin membuat sebuah method pastikan menggunakan regular function bukan arrow function
var profiles = {
  name: "Firdaus",
  address: "Magelang",
  gender: "Male",
  skills: ["html", "js"],
  education: {
    highscool: "SMP N 21 Tasikmalaya",
    university: "Universitas Indonesia",
  },
  showProfile: function () {
    document.write(`
        <h2>Name: ${this.name}</h2>
        <h2>Alamat: ${this.address}</h2>
        <h2>Jenis Kelamin: ${this.gender}</h2>
        <h2>skills: ${this.skills[0]}</h2>
      `);
  },
  showName: function () {
    document.write(`
        <h1>Name: ${this.address}</h1>
      `);
  },
};

var {
  name,
  address,
  gender,
  skills,
  education: { highscool, university },
} = profiles;

document.write("<br/> " + name);
document.write("<br/> " + address);
document.write("<br/> " + gender);
document.write("<br/> " + skills[1]);
document.write("<br/> " + highscool);
document.write("<br/> " + university);

//DRY - Don't repeat yourself

profiles.showProfile();
profiles.showName();

//this arrow function global
var testing = () => {
  console.log(this);
};

//this regular function local scope
function testing2() {
  console.log(this);
}

var testing;
testing = "nilai";

var testing = "nilai berbeda";

console.log(testing);

//ciri-cir var
//1. nilai dapat didefinisikan kembali
//2. variable bisa dideclare ulang

let myName = "fadhil";
myName = "fadhil darma";

// let myName = "fadhil darma putera";

console.log(myName);

//ciri-cir let
//1. nilai dapat didefinisikan kembali
//2. variable tidak bisa dideclare ulang

const myDomain = "http://dumbways.id";

// myDomain = "google.com";

//ciri-cir const
//1. nilai tidak dapat didefinisikan kembali
//2. variable tidak bisa dideclare ulang

const nilai = 90;
let score;
let beasiswa;

if (nilai >= 85 && nilai <= 100) {
  score = "A";
  if (nilai >= 80) {
    beasiswa = "Selamat Anda dapat beasiswa";
  }
} else if (nilai >= 70 && nilai <= 84) {
  score = "B";
  if (nilai >= 80) {
    beasiswa = "Selamat Anda dapat beasiswa";
  } else {
    beasiswa = "Mohon Maaf Anda tidak dapat beasiswa";
  }
} else if (nilai >= 50 && nilai <= 69) {
  score = "C";
} else if (nilai >= 0 && nilai <= 49) {
  score = "D";
} else {
  score = "Tidak Valid";
}

document.write("<br/> Nilai Anda " + score);
if (beasiswa) {
  document.write("<br/>" + beasiswa);
}
