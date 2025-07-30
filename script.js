// Ambil element pembungkusnya / parent
const container = document.querySelector('.container');

// Ambil element yang memiliki clss jumbo
const jumbo = document.querySelector('.jumbo');

// Ambil semua element yang memiliki class thumb
const thumbs = document.querySelectorAll('.thumb');

// Event click di pembungkusnya
container.addEventListener('click', function(e) {
    // cek apakah yang diclick adalah thumb
    if(e.target.className === 'thumb' ) {
        // Ubah src class jumbo mencari src yang diclick
        jumbo.src = e.target.src;

        // Tambahkan class fade untuk menambahkan animasi yang sudah di style di css
        jumbo.classList.add('fade');

        // Atur wartu untuk menghapus class fade
        setTimeout(function() {
            jumbo.classList.remove('fade');
        }, 500);

        // Mengulang element thumbs;
        thumbs.forEach(thumb => {

            // mengecek apakah memiliki class yang bernama active atau engga
            if(thumb.classList.contains('active') ) {

                // kalo iya, habus class active
                thumb.classList.remove('active');
            }
        });

        // Tambahkan animasi active pada element yang di click
        e.target.classList.add('active');
    }
})