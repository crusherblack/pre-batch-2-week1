// if(kondisi){
//  jika kondisi terpenuhi jalankan kode ini
// }

//jika dedi belum makan maka dia lapar

var apakahDediBelumMakan = false; // sudah makan

if (apakahDediBelumMakan === true) {
  document.write("Dia tidak lapar");
} else {
  document.write("Dia lapar");
}

function gantiWarnaLampuMerah(warnaLampuMerah) {
  if (warnaLampuMerah == "merah") {
    document.getElementById("body").style.background = "red";
  } else if (warnaLampuMerah == "kuning") {
    document.getElementById("body").style.background = "yellow";
  } else if (warnaLampuMerah == "hijau") {
    document.getElementById("body").style.background = "green";
  } else {
    document.getElementById("body").style.background = "black";
  }
}

var tono = true;
var indah = true;

if (tono == true && indah == true) {
  document.write("<br/> Mereka Jodoh");
} else {
  document.write("<br/> Mereka Tidak Jodoh");
}

//aturan gerbang logika AND

// kondisi 1     kondisi 2      result
//   true           true          true
//   false          true          false
//   true           false         false
//   false          false         false

//aturan gerbang logika OR

// kondisi 1     kondisi 2      result
//   true           true          true
//   false          true          true
//   true           false         true
//   false          false         false

var suami = false;
var istri = false;

if (suami === true || istri === true) {
  document.write("<br/> Keluarganya bisa hidup");
} else {
  document.write("<br/> Keluarganya tidak bisa hidup");
}

// nested if

var nilai = 80;

if (nilai >= 85 && nilai <= 100) {
  document.write("<br/> Score anda A");
  if (nilai >= 80) {
    document.write("<br/> Selamat Anda dapat beasiswa");
  }
} else if (nilai >= 70 && nilai <= 84) {
  document.write("<br/> Score anda B");
  if (nilai >= 80) {
    document.write("<br/> Selamat Anda dapat beasiswa");
  } else {
    document.write("<br/> Mohon Maaf Anda tidak dapat beasiswa");
  }
} else if (nilai >= 50 && nilai <= 69) {
  document.write("<br/> Score anda C");
} else if (nilai >= 0 && nilai <= 49) {
  document.write("<br/> Score anda D");
} else {
  document.write("<br/> Inputkan nilai yang valid");
}

//switch case

var bulan = "March";

switch (bulan) {
  case "March":
    document.write("<br/> Bulan Maret");
    break;
  case "May":
    document.write("<br/> Bulan Mei");
    break;

  default:
    document.write("<br/> Bulan tidak valid");
    break;
}

//tennary operator

var lulus = false;
var statusKelulusan = lulus === true ? "<br/> Lulus" : "<br/> Tidak Lulus";
document.write(statusKelulusan);
