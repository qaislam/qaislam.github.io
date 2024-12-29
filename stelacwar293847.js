function openVideo(url) {

    if (!url.includes("embed")) {
        const videoId = url.split("v=")[1].split("&")[0];
        url = `https://www.youtube.com/embed/${videoId}`;
    }

    console.log("Embed URL:", url);  // Log URL setelah diubah

    document.getElementById('videoPopup').style.display = 'flex';
    document.getElementById('videoIframe').src = url;
}


let currentQuoteIndex = 0;

function scrollQuotes(direction) {
    const quotesList = document.querySelector('.quotes-list');
    const quotes = document.querySelectorAll('.quote-item');
    const totalQuotes = quotes.length;

    currentQuoteIndex += direction;
    if (currentQuoteIndex < 0) {
        currentQuoteIndex = totalQuotes - 1;
    } else if (currentQuoteIndex >= totalQuotes) {
        currentQuoteIndex = 0;
    }

    const offset = -currentQuoteIndex * 100;
    quotesList.style.transform = `translateX(${offset}%)`;
}

document.getElementById('darkModeToggle').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
});
const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
};

// Periksa apakah pengguna sudah mengaktifkan dark mode sebelumnya
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}

// Tombol untuk mengubah mode
const darkModeButton = document.getElementById('darkModeButton');
if (darkModeButton) {
    darkModeButton.addEventListener('click', toggleDarkMode);
}
