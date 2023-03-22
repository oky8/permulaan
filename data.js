const nama = "Okky efand";
let usia = 20;

const biodata = document.getElementById("biodata");

function generateBiodata() {
  let generasi;

  if (usia > 10 && usia < 20) {
    generasi = "nak kenek";
  } else if (usia >= 20 && usia < 30) {
    generasi = "jolong kan godang";
  } else if (usia >= 30) {
    generasi = "dak lamo lai";
  } else if (usia > 3 && usia < 10) {
    generasi = "jolong tobik";
  } else {
    generasi = "gaib";
  }

  return (biodata.innerHTML = generasi);
}

console.log(nama);
console.log(usia);

generateBiodata();
