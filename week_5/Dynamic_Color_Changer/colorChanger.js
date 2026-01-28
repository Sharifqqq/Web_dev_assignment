    const colorBox = document.getElementById('color_box');
    const colorPicker = document.getElementById('color_picker');
    const reset = document.getElementById('reset_button');

    const defaultColor = '#3498db';

    colorPicker.addEventListener('input', function () {
        colorBox.style.backgroundColor = this.value;
    });

    reset.addEventListener('click', function () {
        colorBox.style.backgroundColor = defaultColor;
        colorPicker.value = defaultColor;
    })

