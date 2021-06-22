// No cambies los nombres de las funciones.

function factorear(num) {
    // Factorear el número recibido como parámetro y devolver en un array
    // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
    // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
    // Tu código:
    let array = [1];
      let i = 2;
      while (num !== 1) {
          if (num % i === 0) {
              array.push(i);
              num = num / i;
          } else {
              i++;
          }
      }
      return array;
  }
  
  function bubbleSort(array) {
    // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
    // el array recibido como parámetro
    // Devolver el array ordenado resultante
    // Tu código:
    for (var i = 0; i < array.length - 1; i++)          //recorrido con valor en i = 2
      for (var j = 0; j < array.length - 1 - i; j++) {    //recorrido con valor en  j = 5
        if (array[j] > array[j + 1]) {                  // si j = 5 es mayor que j + 1 = 2
          var temp = array[j];                         // asigno a la nueva variable el valor de J = 5
          array[j] = array[j + 1];                    //  hago intercambio y paso j = 5  hacia  j+1
          array[j + 1] = temp;                       // re asigno j + 1 el nuevo valor
        }
      }
    return array;                              // return array ordenado
  }
  
  // console.log(bubbleSort([4,5,2]))  ----> [2, 4, 5]
  
  
  function insertionSort(array) {
    // Implementar el método conocido como insertionSort para ordenar de menor a mayor
    // el array recibido como parámetro utilizando arreglos
    // Devolver el array ordenado resultante
    // Tu código:
    for (var i = 1; i < array.length; i++) {
      var curr = array[i];
      for (var j = i - 1; j >= 0 && array[j] > curr; j--) {
        array[j + 1] = array[j];
      }
      array[j + 1] = curr;
    }
    return array;
  }
  
  // console.log(insertionSort([7,3,2,8]))  ----> [2,3,7,8]
  
  function selectionSort(array) {
    // Implementar el método conocido como selectionSort para ordenar de menor a mayor
    // el array recibido como parámetro utilizando dos arreglos
    // Devolver el array ordenado resultante
    // Tu código:
    function swap(a, b, arr) {
      var tmp = arr[a];
      arr[a] = arr[b];
      arr[b] = tmp;
    }
    {
      for (var i = 0; i < array.length - 1; i++) {
        var min = i;
        for (var j = i + 1; j < array.length; j++) {
          if (array[min] > array[j]) min = j;
        }
        swap(i, min, array);
      }
      return array;
    }
  }
  
  // console.log(selectionSort(6,4,1,8]))  ----> [1,4,6,8]
  
  // No modificar nada debajo de esta línea
  // --------------------------------
  
  module.exports = {
    factorear,
    bubbleSort,
    insertionSort,
    selectionSort,
  };
  