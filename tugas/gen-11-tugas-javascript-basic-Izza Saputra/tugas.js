//TUGAS JAVASCRIPT BASIC

//TUGAS 1
//+ buatlah function yang me-return hasil dari perkalian 2 parameter/argument yang dimasukkan ke function tersebut
function perkalian(a,b){
    return a*b;
}

//TUGAS 2
//+ buatlah satu variable dengan tipedata object yg berisi properti berikut:
// - properti dengan tipe data string
// - properti dengan tipe data number
// - properti yang berisi object (nested object)
// - properti yang berisi function baru
// - properti yang menggunakan function perkalian yang pertama kalian buat

const objek = {
    nama : "Izza Saputra",
    tanggalLahir : 10,
    kesukaan : {
        makanan : "Mie",
        minuman : "Teh",
        angka : 17,
        klubBola : "Liverpool" 
    },
    salam : function(){
        return "Halo, aku adalah " + this.nama + ", aku suka "+ this.kesukaan.klubBola;
    },
    perkalian : perkalian (4,5)
}

//TUGAS 3
// + tampilkan ke console properti variable yang berisi hasil perkalian di atas

console.log(perkalian(4,5));
console.log(objek.nama);
console.log(objek.kesukaan.angka);
console.log(objek.salam());
console.log(objek.perkalian);
