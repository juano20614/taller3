// 1Crea una clase llamada "Perro" con un atributo llamado "nombre". Agrega un método llamado ladrar() que
// imprima en la consola "¡Woof!" junto al nombre del perro.

class Perro{
    constructor (nombre){
        this.nombre=nombre
    }
    ladrar(){
        console.log(`¡Woof! ${this.nombre}`);
    }
}

// 2. Crea una instancia de la clase "Perro" llamada "miPerro" con un nombre de tu elección. Llama al método
// ladrar() de la instancia.

const miPerro = new Perro("juano")
miPerro.ladrar()

// 3. Crea una clase llamada "CuentaBancaria" con atributos "saldo" (inicializado en 0) y "titular". Agrega un
// método llamado depositar(cantidad) que sume la cantidad proporcionada al saldo actual.

// 5. Agrega un método llamado retirar(cantidad) a la clase "CuentaBancaria" que reste la cantidad
// proporcionada del saldo actual. Asegúrate de verificar si hay suficiente saldo antes de realizar la
// operación.

class CuentaBancaria{
    constructor (titular){
        this.saldo=0
        this.titular=titular
    }
    depositar(cantidad){
        this.saldo+= cantidad
    }
    retirar(cantidad){
        this.saldo-=cantidad
        if (this.saldo>=0) {
            console.log("si se puede retirar la cantidad asignada");
            console.log(`saldo: ${miCuenta.saldo}`);
        }else{
            console.log("no se puede retirar la cantidad asiganda");
            this.saldo+=cantidad
            console.log(`saldo: ${miCuenta.saldo}`);
        }
    }
}

// 4. Crea una instancia de la clase "CuentaBancaria" llamada "miCuenta" con un titular de tu elección.
// Deposita 100 en la cuenta llamando al método depositar().

const miCuenta = new CuentaBancaria();
console.log(`cuenta inicial: ${miCuenta.saldo}`);
miCuenta.depositar(100);
console.log(`cuenta con deposito: ${miCuenta.saldo}`);

// 6. Llama al método retirar() en la instancia "miCuenta" para retirar 50. Imprime en la consola el saldo actual
// después de la operación.

console.log(`cuenta con deposito: ${miCuenta.saldo}`);
console.log(miCuenta.retirar(200));