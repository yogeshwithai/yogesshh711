const text = [
    "Student",
    "AI Learner",
    "Web Developer",
    "Future Software Engineer"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {

    if (count === text.length) {
        count = 0;
    }

    currentText = text[count];
    letter = currentText.slice(0, ++index);

    document.querySelector(".typing-text span").textContent = letter;

    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 1200);
    } else {
        setTimeout(type, 100);
    }

})();
