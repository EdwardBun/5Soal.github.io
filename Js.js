//Mencari keliling Persegi Panjang//
//Memasukkan nilai panjang,lebar//
//Menghitung rumus: 2*p + 2*l//
//Menampilkan hasil//

//Memasukkan nilai panjang, lebar//
 let panjang = 150;
 let lebar = 40;

///menghitung rumus: 2*p + 2*l//
let hasil = 2*panjang + 2*lebar;

//menampilkan hasil//
console.log("keliling persegi panjang adalah:" + hasil)

//2.Luas Lingkaran//

//Tentukan phi dan r//
let phi = 3.14;
let r = 100;
let hasilL = phi* 2 * r;
console.log ("Hasil dari luas lingkarang adalah:" + hasilL);

//menentukan luas persegi dari keliling persegi//
let lp = 64;
let sisi = Math.sqrt(lp);
let hasilp = 4 *sisi;
console.log ("Hasil lp:" + hasilp);

//ktp//
let umur = 17

if (umur >= 17) {
    console.log("Boleh buat ktp")
} else {
    console.log("tidak boleh buat ktp")
}

let PABP = 76;
let MTK = 76;
let DPK = 76;
let rtrt = (PABP + MTK + DPK) / 3;

if (rtrt >= 80 && rtrt <100) {
    result = "A"
} else if (rtrt >=75 && rtrt< 80) {
    result = "B"
} else if (rtrt >=65 && rtrt< 75) {
    result = "C"
} else if (rtrt >=45 && rtrt< 65) {
    result = "D"
} else if (rtrt >=0 && rtrt< 45) {
    result = "E"
} else {
    result = "K"
}

console.log (rtrt)
console.log (result)


// menetukan luas segitiga
// mulai
let alas = 5
let tinggi = 6
let hasilLL = 1/2 * alas * tinggi
console.log ("hasil dari luas segitiga" + hasilLL)
// selesai

//Absen//






