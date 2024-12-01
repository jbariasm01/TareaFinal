// Cuando se pulse cualquier enlace del menú lateral se eliminará el CHECKED de su INPUT asociado y, por lo tanto, se cerrará el menú lateral.
const inputLateral = document.getElementById('navegacion-lateral');
const enlacesLaterales = document.querySelectorAll('.menu-lateral a');
enlacesLaterales.forEach(enlace => {
    enlace.addEventListener('click', (e) => {
        inputLateral.checked = false;
    });
});

