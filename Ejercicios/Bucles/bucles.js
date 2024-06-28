/* 1. Realizar un programa que permita el ingreso de un numero y muestre su tabla de multiplicar (Los primeros 10 multiplos).  */

let num1=prompt('1. Ingrese el numero que quiera multiplicar')
console.log(' ')
console.log('Ejercicio 1')
console.log(' ')
for (i=1;i<11;i++){
    console.log(num1+'x'+i+'= '+num1*i)
}

/* 2. Realizar un programa que permita el ingreso de numeros los cuales se tienen que ir acumulando. El ingreso de datos terminara cuando el usuario ingrese un valor 0.*/

let numeros2=parseInt(prompt('2. Ingrese los numeros que quiera acumular, cuando termine ingrese 0'))
let acumulado2=0;
console.log(' ')
console.log('Ejercicio 2')
console.log(' ')
while(numeros2!=0){
    acumulado2=acumulado2+numeros2
    numeros2=parseInt(prompt('Ingrese el numero que quiera acumular'))
}
console.log('La suma de los numeros que ingresó es: '+acumulado2)

/* 3. Realizar en juego de adivinar el numero del los ejercicios del tema anterior, en una variable guardar un numero que este en el rango 1 - 100. La persona debera poder ingresar numeros hasta adivinar el valor que se encuentre en dicha variable. Si el valor es menor al numero secreto, avisarle al usuario lo  sucedido y pedirle nuevamente el ingreso de otro numero, realizar la misma accion pero en lugar de cuando es menor, si es que el numero ingresado es mayor. Asi sucesivamente hasta que el usuario adivine el numero secreto. Por ultimo mostrar un mensaje de felicitaciones y decirle en cuantos intentos lo ha realizado. */

let numAdivinar=45
let adivinar=parseInt(prompt('3. Ingrese un numero del 1 al 100 para adivinar'))

for (i=1;numAdivinar!=adivinar;i++){
    if (numAdivinar>adivinar){
        alert('El numero que ingresaste es menor')
        adivinar=parseInt(prompt('Ingrese el numero para adivinar'))
    } else {
        alert('El numero que ingresaste es mayor')
        adivinar=parseInt(prompt('Ingrese el numero para adivinar'))
    }
    
}
alert('Adivinaste!! y solo tomaste '+i+' intentos')

/* 4. Realizar un programa que permita decir si un numero es primo. Un numero es primo si solo es divisible por el valor 1 y por si mismo. Ayuda: Usar la operacion de modulo. Los numeros solo poseen divisores hasta la mitad del valor del mismo. Ej: 50 tiene como divisores 1, 2, 5, 10 y 25. No es primo. Con tener mas de 2 divisores el numero ya no es primo. */

let numPrimo=parseInt(prompt('4. Ingrese el numero para comprobar si es primo'))
let esPrimo=1
let divisiones=1


while(divisiones<numPrimo){
    if(numPrimo===0||numPrimo===1){
        alert(numPrimo+' no es un numero primo')
    } 
    else if (numPrimo%divisiones==0)
        {
            esPrimo++
        }
        divisiones++
        
    }
    if(esPrimo<3){
        alert(numPrimo+' es un numero primo')
    }
    else{alert(numPrimo+' no es un numero primo')}

/* 5. Realizar un programa que permita dado un numero, mostrar todos sus divisores. */

let dividir=parseInt(prompt('5. Ingrese el numero para conocer sus divisores'))
let divisores=[]
let posicion=0
console.log(' ')
console.log('Ejercicio 5')
console.log(' ')
for (i=1;i<=dividir;i++){
    if (dividir%i==0){
        divisores[posicion]=i
        posicion++
    } 
}
console.log('Los divisores de '+dividir+' son '+divisores)


/* 6. Dado un array de 10 elementos, realizar un programa que recorra ese array y muestre un mensaje por consola con cada uno de los elementos del array. */

console.log(' ')
console.log('Ejercicio 6')
console.log(' ')
let array=[1,2,3,4,5,6,7,8,9,10]

for(i=0;i<array.length;i++){
    console.log('el elemento en la posicion '+i+' es ' +array[i])
}

/* 7. Dado un array de 10 numeros, realizar un programa que muestre por consola el doble de cada uno de los elementos. */

console.log(' ')
console.log('Ejercicio 7')
console.log(' ')
let array7=[1,2,3,4,5,6,7,8,9,10]
for(i=0;i<array7.length;i++){
    console.log('el doble de '+array7[i]+' es ' +array7[i]*2)
}


/* 8. Dado un array con al menos 5 objetos comprendidos por un grupo familiar, cada objeto representa a 1 persona con al menos 4 propiedades, realizar un programa que muestre un mensaje de presentacion por cada elemento del array. */

let juan={
    nombre:'Juan',
    edad:23,
    altura: 1.77,
    genero:'Masculino'
}
let pedro={
    nombre:'Pedro',
    edad:29,
    altura: 1.67,
    genero:'Masculino'
}
let rosa={
    nombre:'Rosa',
    edad:25,
    altura: 1.57,
    genero:'Femenino'
}
let sara={
    nombre:'Sara',
    edad:18,
    altura: 1.60,
    genero:'Femenino'
}
let luz={
    nombre:'Luz',
    edad:58,
    altura: 1.61,
    genero:'Femenino'
}
console.log(' ')
console.log('Ejercicio 8')

let familia=[juan, pedro, rosa, sara,luz]
for(props in familia){
    console.log(' ')
    console.log(`Miembro # ${parseInt(props)+1} de la familia:`)
    for (miembro in familia[props]){
        console.log(`Su ${miembro} es ${familia[props][miembro]} `)
    }
    
}
console.log(' ')
console.log('Forma en que lo hizo el profe Edisson')
for(i in familia){
    console.log('Hola, mi nombre es '+familia[i].nombre+' y tengo '+familia[i].edad+' años de edad, mi genero es '+familia[i].genero+ ' y mido '+familia[i].altura+ ' centimetros')
}


/* 9. Dado un array de 10 numeros, realizar un programa que recorra el array y solo muestre los numeros impares. */

let array9=[1,2,3,4,5,6,7,8,9,10]
console.log(' ')
console.log('Ejercicio 9')
console.log(' ')
for(i=0;i<array9.length;i++){
    if(array9[i]%2==0){
        console.log(array9[i])
    }
} 

/* 10. Realizar un programa que permita la entrada de numeros y calcule la suma de los numeros pares por un lado y los impares por otro, el ingreso de dato finaliza cuando el usuario ingresa un 0. */

let numeros10=parseInt(prompt('Ingrese los numeros que desea sumar, cuando termine ingrese 0'))
let acumuladopar=0;
let acumuladoimpar=0
console.log(' ')
console.log('Ejercicio 10')
console.log(' ')
while(numeros10!=0){
    if (numeros10%2==0){
        acumuladopar=acumuladopar+numeros10
        numeros10=parseInt(prompt('Ingrese los numeros que sumar, cuando termine ingrese 0'))
    } else {
        acumuladoimpar=acumuladoimpar+numeros10
        numeros10=parseInt(prompt('Ingrese los numeros que sumar, cuando termine ingrese 0'))
    }
    
} 
console.log('La suma de los numeros pares es: '+acumuladopar)
console.log('La suma de los numeros impares es: '+acumuladoimpar)

/* 11. Dado un array de 10 numeros, realizar un programa que imprima por pantalla el numero mas grande. */

console.log(' ')
console.log('Ejercicio 11')
console.log(' ')
let array11=[8,2,30,4,33,40,90,20,3,1]
let mayor=array11[0]
for (i=0;i<array11.length;i++){
    if(mayor<array11[i]){
        mayor=array11[i]
    }
}

console.log('el numero mas grande es: '+mayor)

/* 12. Dado un array de 10 numeros, realizar un programa que imprima por pantalla el numero mas chico. */

console.log(' ')
console.log('Ejercicio 12')
console.log(' ')
let array12=[8,2,30,4,33,40,90,20,1,3]
let menor=array12[0]
for (i=0;i<array12.length;i++){
    if(menor>array12[i]){
        menor=array12[i]
    }
}

console.log('el numero mas pequeño es: '+menor)


/* 13. Realizar un programa que permita jugar a piedra papel o tijeras, se debera poder ingresar los nombres de 2 jugadores. En el bucle del juego se debera pedir 1 a 1 las manos de cada jugador, y en cada turno se debera seguir jugando solo si se produjo un empate. Caso contrario mostrar un mensaje con el nombre de la persona ganadora. */

alert('Vamos a jugar a piedra, papel o tijeras')
let jugador1=prompt('Jugador 1, ingresa tu nombre')
let jugador2=prompt('Jugador 2, ingresa tu nombre')
let eleccion1 = prompt(jugador1+', escoge "piedra", "papel" o "tijeras"')
let eleccion2 = prompt(jugador2+', escoge "piedra", "papel" o "tijeras"')

while(eleccion1==eleccion2){
    alert('Tenemos un empate, juguemos de nuevo')
    eleccion1 = prompt(jugador1+', escoge "piedra", "papel" o "tijeras"')
    eleccion2 = prompt(jugador2+', escoge "piedra", "papel" o "tijeras"')
}
if(eleccion1=='piedra'&&eleccion2=='tijeras'||eleccion1==='papel'&&eleccion2==='piedra'||eleccion1=='tijeras'&&eleccion2=='papel')
   {
   alert(jugador1+' ganó')
} else if (eleccion1=='piedra'&&eleccion2=='papel'||eleccion1=='papel'&&eleccion2=='tijeras'||eleccion1=='tijeras'&&eleccion2=='piedra')
   {
   alert(jugador2+' ganó')
} 
else{
    alert('Algun jugador ingreso mal su eleccion, recarguen la pagina')
}

/* 14. Realizar un programa que imprima por consola un triangulo de 5 asteriscos de lado. */

let numAsteriscos=5
let numEspacios=numAsteriscos-1
let espacios=' '
console.log(' ')
console.log('Ejercicio 14')
console.log(' ')
console.log('Mi interpretacion de triangulo')
for(i=0;i<numAsteriscos;i++){
    espacios=''
    for(j=0; j<numEspacios; j++){
        espacios=espacios + ' '
    }
    for (k = 0; k <= i; k++) {      
        espacios = espacios+' *'
      }

    console.log(espacios)
    numEspacios--
   }
   console.log('Triangulo como lo hizo el profe Edisson')
   for(i=0;i<numAsteriscos;i++){
    espacios=''
    for (k = 0; k <= i; k++) {      
        espacios = espacios+' *'
    }
    for(j=0; j<numEspacios; j++){
        espacios=espacios + ' '
    }

    console.log(espacios)
    numEspacios--
   }

/* 15. Realizar un programa que imprima por consola un triangulo de 5 asteriscos de lado pero invertido. */

let numAsteriscos2=5
let numEspacios2=0
let espacios2=''
console.log(' ')
console.log('Ejercicio 15')
console.log(' ')
console.log('Mi interpretacion de triangulo invertido')
for(i=0;i<numAsteriscos2;i++){
    for (k = 0; k <= i; k++) { 
        espacios2=' * * * * * '     
        espacios2 = espacios2.slice(k*2)
      
    }
    for(j=0; j<numEspacios2; j++){
        espacios2=' '+espacios2
    }

    console.log(espacios2)
    numEspacios2++
   }
console.log('Triangulo invertido como lo hizo el profe Edisson')
numEspacios=numAsteriscos-1
for(i=0;i<numAsteriscos;i++){
    espacios=' '
    for(j=0; j<numEspacios; j++){
        espacios=espacios + '  '
    }
    for (k = 0; k <= i; k++) {      
        espacios = espacios+'* '
      }

    console.log(espacios)
    numEspacios--
   }

/* 16. Dado un array de 10 numeros desordenados, realizar un programa que imprima por pantalla el array ordenado. (NO USAR SORT, solo ciclos FOR) */

console.log(' ')
console.log('Ejercicio 16')
console.log(' ')
let array16=[8,2,30,4,33,40,90,20,1,3]
let largoArray=array16.length
console.log('El arreglo original es: '+array16)
let menor16=array16[0]
let verificar16=0
let arreglo=[]

for(j=0;j<largoArray;j++){
    for (i=0;i<array16.length;i++){
        if(menor16>array16[i]){
            menor16=array16[i]
        }
    }
    verificar16=array16.indexOf(menor16)
    array16.splice(verificar16,1)
    arreglo.push(menor16)
    menor16=array16[0]    
}
console.log('El arreglo ordenado es: '+arreglo)

