//Alerta que usa SWEETALERT
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
            icon: 'custom-sweetAlert-icon', // Clase personalizada para el ícono
            popup: 'custom-sweetAlert-popup',
          }
      });
  }
}