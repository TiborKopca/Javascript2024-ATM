//una app que nos permite calcular la cantidad de billetes 
//240euros --> 2 billetes de 100euros, 1 billete de 20euros
//100euros --> 1 billete de 100euros
//50euros --> 1 billete de 50euros
//20euros --> 1 billete de 20euros
//345euros --> 3 billetes de 100euros, 2billetes de 20euros, 1billete de 5euros

//Explicar que tipos de billetes vamos a usar

//500€, 200€, 100€, 50€, 20€, 10€, 5€
//menos billetes mejor
//3 x 100 = 300
//1 x 100 + 1 x 200 = 300


//LOOPS through the bills array
function calcularBilletes(money, contar){
    const billetes = [500,200,100,50,20,10,5];

    for(billete of billetes){
        //console.log(`Hemos pasado con ${billete}`);
        if(billete > money){
            continue;
        }else{
            while(billete <= money && money > 0){ //200 < 345
                money -= billete; //145 = 345 - 200

                contar.push(billete); //200, 200, 20, 10
                // console.log(`Operation restante:${money}`)
            }
        }
    }
}
function mostrarBilletes(contar){
    // console.log(`La cantidad de billetes es ${contar}`);
    let frase = "";
    let i = 0;
    contar.forEach(function(element, index){
        
        //COMPARING DUPLICATES
        
        while(element[index] === element[index + 1]){
            i++;
            frase = `${i} billetes de ${element} ,`
            
            break;
        }

        
        document.write(frase)
    })
    document.write(`<br>`);
    document.write(`La cantidad de billetes es ${contar}`)
}
function main(){
    let contar = [];
    let cantidad = Number(prompt("Introduce la candidad de billetes"));
    calcularBilletes(cantidad, contar);
    mostrarBilletes(contar);
    
}

//main esta llamado onload in html
// main();


