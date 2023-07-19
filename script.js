let hitung = document.getElementById('form');
let berat = document.getElementById('berat');

let tinggi = document.getElementById('tinggi'); 

hitung.addEventListener("submit", (event) => {
    event.preventDefault()
  
    const perhitungan = berat.value/(tinggi.value / 100) **2;
    angka = perhitungan.toFixed(1);

    let kategori;

    if(perhitungan < 18.5) {
        kategori = 'Underwegiht';
    }else if(perhitungan < 25){
        kategori = 'Normal';
    }else if(perhitungan < 30){
        kategori = 'Overweight';
    }else{
        kategori = 'Obesity';
    }

    const hasil = document.createElement("p"); 
    hasil.innerHTML = `<p>Your BMI is <B>${angka}</B> which means You are <B>${kategori}</B></p>`;
    document.body.appendChild(hasil);
    hasil.style.margin = "60px 100px"
    hitung.reset();
});
