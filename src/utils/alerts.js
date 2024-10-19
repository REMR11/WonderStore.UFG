//Alerta que usa SWEETALERT
/**
 * 
 * @param {number} type Representa el tipo de alerta 
 * @param {string} text Representa el texto a mostrar 
 * @param {null | string} url Representa la URL a la que se redireccionará en caso de que no exista
 * 
 * Los tipos de alerta son:
 * 1. Éxito
 * 2. Error
 * 3. Advertencia
 * 4. Aviso 
 */
export function sweetAlert(type, text, url = null) {
    let title, icon;
    // Se compara el tipo de mensaje a mostrar.
    switch (type) {
        case 1:
            title = 'Éxito';
            icon = 'success';
            break;
        case 2:
            title = 'Error';
            icon = 'error';
            break;
        case 3:
            title = 'Advertencia';
            icon = 'warning';
            break;
        case 4:
            title = 'Aviso';
            icon = 'info';
    }
    // Si existe una ruta definida, se muestra el mensaje y se direcciona a dicha ubicación, de lo contrario solo se muestra el mensaje.
    if (url) {
        Swal.fire({
            title: title,
            text: text,
            icon: icon,
            allowEscapeKey: false,
            allowOutsideClick: false,
            confirmButtonText: 'Aceptar',
            background: '#FFDA03',
            confirmButtonColor: 'green',
        }).then(function () {
            location.href = url
        });
    } else {
        Swal.fire({
            title: title,
            text: text,
            icon: icon,
            allowOutsideClick: true,
            color: 'black',
            showConfirmButton: false,
            background: '#FFDA03',
            confirmButtonColor: 'green',
            customClass: {
                container: 'custom-sweetAlert-container',
                icon: 'custom-sweetAlert-icon', // Clase personalizada para el ícono
                popup: 'custom-sweetAlert-popup',
            }
        });
    }
}