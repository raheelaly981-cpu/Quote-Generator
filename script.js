let quotes = [
    "Believe in yourself",
    "Never give up",
    "Stay positive",
    "Work hard, dream big",
    "Success needs patience"
];

function generateQuote() {
    let random = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerText = quotes[random];
}