// Implementa la clase LinkedList
// tiene metodos `add`, `remove`, y `search`
// add: Agrega un nuevo nodo en el final de la lista
// Ej:      Head --> null
// add(1):  Head --> 1 --> null
// add(2):  Head --> 1 --> 2 --> null
// remove:  Elimina el último nodo de la lista y devuelve su valor. (Tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía)
// Ej:         Head --> 1
// remove():   Head --> null y devuelve 1
// search: Busca un valor dentro de la lista. Puede recibir un valor o una función. Si no hubiera resultados, devuelve null.
​
function Node(value) {
	// next y el value
	this.value = value;
	this.next = null;
}
function LinkedList() {
	//head
	this.head = null;
}
​
LinkedList.prototype.add = function (value) {
	var node = new Node(value);
	if (this.head === null) {
		this.head = node;
	} else {
		var current = this.head;
		while (current.next !== null) {
			current = current.next;
		}
		current.next = node;
	}
};
​
LinkedList.prototype.remove = function () {
	//cuando no tengo elementos
	if (this.head === null) return false;
​
	//cuando tengo 1 solo elemento
	if (this.head.next === null) {
		var aux = this.head.value;
		this.head = null;
		return aux;
	}
	//cuando tengo mas de 1 elemento
	//guardo mi nodo head en current
	var current = this.head;
​
	//me fijo si el nodo siguiente, del siguiente, tiene null
	// ¿por que? Porque yo no puedo borrar si estoy parado en el mismo nodo
	while (current.next.next !== null) {
		current = current.next;
	}
	//me guardo el valor de forma auxiliar
	var aux = current.next.value;
	// lo borro y lo retorno
	current.next = null;
	return aux;
};
​
LinkedList.prototype.search = function (arg) {
	// che, si esta vacia, retorna null
	if (this.head === null) {
		return null;
	}
​
	//me guardo el lugar de una variable
	var cb;
	//Si no sos una funcion, creemos una funcion que retorne true si son iguales
	if (typeof arg !== 'function') {
		cb = function (val) {
			return val === arg;
		};
	} else {
		//sino, asignale a cb, arg
		cb = arg;
	}
	//defino mi puntero y le asigno head
	var current = this.head;
	//mientras tenga un valor
	while (current !== null) {
		//si mi funcion, retorna true, devolve el valor
		if (cb(current.value)) {
			return current.value;
		} else {
			// sino, continua
			current = current.next;
		}
	}
	//si termine y no lo encontre, no esta, retorna null
	return null;
	/*
	if (typeof arg === 'string') {
		var current = this.head;
		while (current !== null) {
			if (current.value === arg) {
				return current.value;
			}
			current = current.next;
		}
	}
	if (typeof arg === 'function') {
		var current = this.head;
		while (current !== null) {
			if (arg(current.value)) {
				return current.value;
			} else {
				current = current.next;
			}
		}
	}
	*/
};
​
// Hash Table( ver información en: https://es.wikipedia.org/wiki/Tabla_hash)
// Una Hash table contiene un arreglo de "contenedores" o buckets donde puede guardar información.
// Para este ejercicio, generar 35 buckets para la Hash Table, y realizar los métodos, get, hasKey
// Para almacenar un valor asociado a una key (string):
//    - Se pasa ese valor a la función hash(Pista: usar la función charCodeAt), que determina la posición en que debe ir en el arreglo.
//    - Luego el elemento se inserta(llamando al método set) en la posición(índice) devuelta.
// Para buscar el valor por su key:
//    - Sólo habrá que pasarle a la función hash la clave del elemento a buscar y ésta determinará la posición
//      en que se encuentra.
//    - Usar el número obtenido, para buscar(llamando al método get) el contenedor o bucket donde está el valor.
//    - Retornar dicho valor.
​
function HashTable() {
	//fijo la cantidad de cajones maximo
	this.numBuckets = 35;
	//creo mi array donde voy a guardar mis cajones
	this.cajones = [];
	//creo mi funcion hash, donde, dependiendo del string que reciba
	// va a devolver un output entre 0 y 34
	//a partir del bytecode sumado del string
	this.hash = function (value) {
		var acc = 0;
		for (var i = 0; i < value.length; i++) {
			acc = acc + value.charCodeAt(i);
		}
		return acc % this.numBuckets;
	};
}
​
HashTable.prototype.set = function (key, value) {
	//me fijo, si no es un string, tiro un error
	if (typeof key !== 'string') {
		throw new TypeError('Keys must be strings');
	}
	//objeto la posicion, recuerden, siempre con la misma
	//funcion de hash, me devuelve la misma posicion
	var posicion = this.hash(key);
	//me fijo, si tengo un array ahi, lo agarro, sino lo creo
	this.cajones[posicion] = this.cajones[posicion] || [];
	//primero me fijo si tengo la key,
	var index = this.cajones[posicion].findIndex((obj) => {
		return obj.key === key;
	});
	//findIndex, si no lo encuentra, devuelve -1, entonces, si
	// lo encontro, pisalo.
	if (index !== -1) {
		this.cajones[posicion][index] = {
			key,
			value,
		};
		//sino, agregalo
	} else {
		this.cajones[posicion].push({
			key,
			value,
		});
	}
};
​
HashTable.prototype.get = function (key) {
	//obtengo la posicion del cajon
	var posicion = this.hash(key);
	//reviso en ese arreglo, si esta la key que busco
	for (var i = 0; i < this.cajones[posicion].length; i++) {
		if (this.cajones[posicion][i].key === key) {
			return this.cajones[posicion][i].value;
		}
	}
	//sino, return false
	return false;
};
HashTable.prototype.hasKey = function (key) {
	//aca me fijo si tengo el valor, si lo tengo retorno true
	//sino false
	var found = this.get(key);
	if (found === false) {
		return false;
	} else {
		return true;
	}
};
/*
un lugar donde guardar tus datos
var misCajones = {
  5: ['zapatillas']
}
funcion de hash ---> dado el mismo el input, te devuelve el mismo output
​
function myHashFunction(input){
 return input
}
misCajones['10'] ---> zapatillas
myHashFunction('zapatillaa')
{
  name: 'zapatillas,
  talle: 44,
​
}
*/
​
// No modifiquen nada debajo de esta linea
// --------------------------------
​
module.exports = {
	Node,
	LinkedList,
	HashTable,
};