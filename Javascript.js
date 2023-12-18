//Luas Segitiga//
let alas = 12
let tinggi = 15
let Hasil1 = 1/2 * alas * tinggi
console.log (`1. Dengan alas ${alas} dan tinggi ${tinggi} maka hasilnya :` + Hasil1)

//Keliling Lingkaran//
let phi = 3.14
let diameter = 20
let r = 10
let Hasil2 = Math.round(phi * diameter)
let hasil2 = Math.round(phi * 2 * r)
console.log (`2. Dengan phi ${phi} dan diameter ${diameter} maka hasilnya :` + Hasil2)
console.log (`2. Dengan phi ${phi} dan r = ${r} maka hasilnya :` + hasil2)

//Luas Persegi panjang//
let panjang = 40
let lebar = 25
let Hasil3 = panjang * lebar
console.log (`3. Dengan Panjang ${panjang} dan lebar ${lebar} maka hasilnya :` + Hasil3)

//Mengirim Surat//

//Menghitung keliling persegi yang diketahui luas//
let Luas = 25
let Sisi = Math.sqrt(Luas)
let Hasil5 = 4 * Sisi
console.log (`5. Dengan Luas ${Luas} maka hasilnya :` + Hasil5)

//Menentukan ganjil dan genap
let angka = 80
if(angka % 2 == 0 ) {
    Hasil6 = (" genap")
}else {
    Hasil6 = (" ganjil")
}

console.log(`6. Jadi bilangan ${angka} adalah` +  Hasil6)

//Menentukan siswa kompeten atau tidak//
let NilaiSiswa = 90
if(NilaiSiswa <= 75) {
    Hasil7 = ("Tidak kompeten")
}else {
    Hasil7 = ("Kompeten")
}

console.log ("7. Jadi siswa ini :" + Hasil7)

//Konversi suhu//
let Celcius = 20
let Reamur = 4/5 * Celcius
console.log(`8. Jadi Jika Celcius ${Celcius} maka Reamurnya adalah :` + Reamur)

//Penerimaan siswa baru//
let NilaiSiswaBaru = 70
let syarat = NilaiSiswaBaru

if (syarat >= 60) {
    Hasil9 = ("Diterima")
} else {
    Hasil9 = ("Tidak Diterima")
}

console.log("9. Jadi Siswa baru ini :" + Hasil9)

//Membuat kopi instan//

//Membuat nasi goreng//

//Pemesanan makanan//

//Penjumlahan 2 angka//
let Angka1 = 100
let Angka2 = 10
let Hasil13 = Angka1 + Angka2 
console.log (`13. Jadi hasil penjumlahan dari ${Angka1} dan ${Angka2} tersebut adalah : ` + Hasil13)


//Menentukan umur seseorang//
let TahunSekarang = 2023
let TahunLahir = 2008
let Hasil15 = TahunSekarang - TahunLahir
console.log(`15. Jadi umur saya sekarang adalah ${Hasil15} Tahun`)

//Menghitung nilai akhir//
let Angka3 = 100
let Angka4 = 10
let Hasil14 = (Angka1 + Angka2)/2
console.log (`14. Jadi nilai akhir dari ${Angka3} dan ${Angka4} adalah : ` + Hasil14)

//Menghitung jam ke detik//
let jam = 2
let detik = jam * 3600

console.log(`Jadi ${jam} jam sama dengan ${detik} detik`)

//Menghitung jam ke menit//
let jam1 = 5
let menit = jam1 * 60

console.log(`Jadi ${jam1} jam sama dengan ${menit} menit`)

//Menghitung kilometer ke meter//
let Kilometer = 9.5
let Meter = Kilometer * 1000

console.log(`Jadi ${Kilometer} Kilometer sama dengan ${Meter} meter`)

//Menghitung Kilogram ke gram//
let Kilogram = 7
let gram = Kilogram * 1000

console.log(`Jadi ${Kilogram} Kilometer sama dengan ${gram} gram`)