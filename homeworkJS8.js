// No cambies los nombres de las funciones.

function quickSort(array) {
    // Implementar el método conocido como quickSort para ordenar de menor a mayor
    // el array recibido como parámetro
    // Devolver el array ordenado resultante
    // Tu código:
    if (array.length === 0) {
      return [];
    } else {
      const pivotValue = array[0];
      // Clasifica los elementos en tres pilas
      let menor = [];
      let igual = [];
      let mayor = [];
      for (let i of array) {
        if (i < pivotValue) {
          menor.push(i);
        } else if (i > pivotValue) {
          mayor.push(i);
        } else {
          igual.push(i);
        }
      }
      return [...quickSort(menor), ...igual, ...quickSort(mayor)];
    }
  }
  
  
  function mergeSort(array) {
    // Implementar el método conocido como mergeSort para ordenar de menor a mayor
    // el array recibido como parámetro
    // Devolver el array ordenado resultante
    // Tu código:
    if (array.length === 1) {
      return array;
    } else {
      const indexDividido = Math.floor(array.length / 2);
      return merge(
        mergeSort(array.slice(0, indexDividido)),
        mergeSort(array.slice(indexDividido))
      );
    }
  
    // Para dos matrices ordenadas
  
    function merge(array1, array2) {
      let merged = [];
      while (array1.length && array2.length) {
        if (array1[0] < array2[0]) {
          merged.push(array1.shift());
        } else if (array1[0] > array2[0]) {
          merged.push(array2.shift());
        } else {
          merged.push(array1.shift(), array2.shift());
        }
      }
      // Una vez finalizado el ciclo, una matriz está vacía y la otra matriz contiene solo
      // valores mayores que todos los valores en merged
      return [...merged, ...array1, ...array2];
    }
  }
  
  
  // No modificar nada debajo de esta línea
  // --------------------------------
  
  module.exports = {
    quickSort,
    mergeSort,
  };
  