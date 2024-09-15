document.addEventListener('DOMContentLoaded', (event) => {
    const buttons = document.getElementsByClassName("playButton");

    const actionOnMouseDown = function() {
        this.style.backgroundColor = 'yellow';
    };

    const actionOnMouseUp = function() {
        this.style.backgroundColor = '';
    };

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('mousedown', actionOnMouseDown);
        buttons[i].addEventListener('mouseup', actionOnMouseUp);
        buttons[i].addEventListener('mouseleave', actionOnMouseUp); // To handle the case when the mouse leaves the button while pressed
    }
});