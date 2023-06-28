// 1. Cree un objeto donde se almacenen los productos de un supermercado con su respectivo precio. Los
// productos son:
// Papa, Arroz, Lentejas, Aceite. Luego imprima cada uno de los precios almacenados en 
//el objeto anterior con su respectivo producto.
// let productos={ Papa: 1000 , Arroz: 2000 , Lentejas: 2000 , Aceite: 5000 };
// console.log(productos);

// 2. Cree un objeto vacío, p.e. let objeto = {} y agregue tres pares clave-valor. Imprima todo 
//el objeto para verificar que se han agregado las nuevos pares clave-valor
// let objeto = {}
// objeto[1]= 'uno'
// objeto[2]= 'dos'
// objeto[3]= 'tres'
// console.log(objeto);

// 3. Dado el objeto {password: "admin30905", rol: "admin", edad: 20} cambie el valor de la clave 
// password por "user_7833", el valor de la clave rol por "user", el valor de la clave edad por 34.
// Imprima todo el objeto para verificar los cambios.
// let objeto ={password: "admin30905", rol: "admin", edad: 20};
// objeto.password='user_7833'
// objeto.rol='user'
// objeto.edad='34'
// console.log(objeto);

// 4. Dado el objeto {"dos": 2, "cinco": 5, "siete": 7, "cuarenta": 40, "cincuenta": 50} 
//recorrer el objeto y mostrar cuáles de los valores son pares.
// let objeto= {"dos": 2, "cinco": 5, "siete": 7, "cuarenta": 40, "cincuenta": 50}
//  for ( clave in objeto) {
//     if (!(objeto[clave] % 2 !=0)) {
//         console.log(objeto[clave]);
//     }
//  }

// 5. Dado el siguiente objeto { 183344: "habilitado", 354625: "habilitado", 6762442: "inhabilitado", 88552:
// "inhabilitado", 438276: "habilitado" } recorrer el objeto y mostrar cuántos usuarios están habilitados.
// let objeto ={ 183344: "habilitado", 354625: "habilitado", 6762442: "inhabilitado", 88552: "inhabilitado", 438276: "habilitado" };
// let con=0 
// for (clave in objeto) {
//      if (objeto[clave]==="habilitado") {
//          con++   
//      }     
//  } 
// console.log("usuarios habilitados",con);

//  6. Dado el siguiente objeto { numeros: [45, 78, 22, 89, 8] } recorrer el valor de la clave números. 
// let objeto = { numeros: [45, 78, 22, 89, 8] };
// console.log(objeto.numeros);

// 7. Dado el objeto { 3: "tres", 60: "sesenta", 10: "diez" } 
// consulte cómo eliminar la clave valor 60-"sesenta". Imprima todo el objeto para verificar los cambios.
// let objeto = { 3: "tres", 60: "sesenta", 10: "diez" };
// delete objeto [60];
//   console.log(objeto);

