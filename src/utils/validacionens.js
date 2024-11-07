//Evitar que se pueda copiar y pegar
export function noPaste(arreglo) {
  for (let i = 0; i < arreglo.length; i++) {
      arreglo[i].onpaste = function(e){
          e.preventDefault();
      }
  }
}