document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById("playNoteButton1");

    const actionOnMouseDown = function() {
        button.style.backgroundColor = 'yellow';
    };

    const actionOnMouseUp = function() {
        button.style.backgroundColor = '';
    };

    button.addEventListener('mousedown', actionOnMouseDown);
    button.addEventListener('mouseup', actionOnMouseUp);
    button.addEventListener('mouseleave', actionOnMouseUp); // To handle the case when the mouse leaves the button while pressed
});

