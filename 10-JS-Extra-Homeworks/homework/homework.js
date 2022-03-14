// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  let matriz=[];
  for (const key in objeto) {
    var valores=[];
    valores.push(key,objeto[key]);
    matriz.push(valores); 
  }  
  return matriz;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  let cantCaracteres={};
  string =Array.from(string).sort().join('');
  for (let index = 0; index < string.length; index++) {
    const el = string[index];
    if(cantCaracteres[`${el}`] === undefined){
      cantCaracteres[`${el}`] = 1; 
    }else{
      cantCaracteres[`${el}`] += 1;
    }
  }
  return cantCaracteres;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let mayusculas='';
  let minusculas='';
  for (let i = 0; i < s.length; i++) {
    if (/[A-Z]/.test(s[i])) {
        mayusculas+=s[i];
      } else {
          minusculas+=s[i];
    }
  }
  return mayusculas+minusculas;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  let palabras = str.split(' ');
  let mirror = [];
  palabras.forEach(el => {
    mirror.push(Array.from(el).reverse().join(''));
  }); 
  return mirror.join(' ');
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let numString= numero.toString();
  let capicua = Array.from(numString).reverse().join('');
  if (numString === capicua) {
      return 'Es capicua';
    } else {
      return 'No es capicua';
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  cadena = cadena.replaceAll('a','');
  cadena = cadena.replaceAll('b','');
  cadena = cadena.replaceAll('c','');
  return cadena;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  let obj=[];
  let texto = [];
  arr.forEach(el => {
    obj.push({texto:el, longitud:el.length})
  });
  obj.sort((a,b)=>{
    if (a.longitud > b.longitud) {
      return 1;
    }
    if (a.longitud < b.longitud) {
      return -1;
    }
    return 0;
  })
  for (const key in obj) {
    texto.push(obj[key].texto);
  }
  return texto;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí 
  let arreglo=[];
  arreglo1.forEach(el1 => {
    arreglo2.forEach(el2 => {
      if (el1 == el2) {
        if (!arreglo.includes(el1)) {
          arreglo.push(el1);
        }
      } 
    });
  });
  return arreglo;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

