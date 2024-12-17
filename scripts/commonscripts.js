document.addEventListener("DOMContentLoaded", () => {
    const text = "N o h x x - Profile"; 

    function animateTitle(text) {
        let index = 0;

        function loop() {
            document.title = text.slice(0, index + 1);
            index++;

            if (text[index - 1] === ' ') {
                setTimeout(loop, 400); 
            } else {

                setTimeout(loop, 350);
            }

            if (index >= text.length) {
                index = 0;
            }
        }

        loop();
    }

    animateTitle(text);
});

document.addEventListener('copy', (e) => {
    e.preventDefault();
});