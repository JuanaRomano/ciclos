function getRandom(){
    return Math.floor(Math.random()*100);
}
var randomNumber = getRandom();
console.log(randomNumber)
var j =0;
for(var j=0; randomNumber !=50; j++){
    randomNumber=getRandom();
    console.log(randomNumber)
}
console.log("este es el numero de repeticiones para obtener 50:"+j)



/* 
for(inicializacion; !condicionTerminacion; accionRepetitiva) {
    //code to repart
}
*/


/*
PASOS:
1. iniciañizacion;// var i)=0
2. evalua !condicionTerminacion // i<3 ->true
3. Ejecuta{} // imprime en consola
4. realiza accionRepetitiva // i++ -> i= i+1 -> 0+1 -> i=1
5.paso2 //  i<3 ->  1<3 ->true
6.paso 3
7.paso 4//  i++ -> i= i+1 -> 1+1 -> i=2
8.paso2 //  i<3 ->  2<3 ->true
9.paso 3
10.paso 4//  i++ -> i= i+1 -> 2+1 -> i=3
11.paso2 //  i<3 ->  3<3 ->FALSE (ahí termina el ciclo)
12. sale del ciclo
!=distinto de

*/
for(var i=0;i<3;i++){
    console.log(i)
    console.log(i+1)
    console.log(i+2)
}

/*
FOR IN /FOR OF
el while hace lo que hace for

*/

var dias=["lunes", "martes", "miercoles", "jueves", "viernes"]
for(i in dias){
    console.log (dias[i])
}
for(v t of dias){
    console.log (dias[i])
}
for(v of dias){
    console.log (v)
}













