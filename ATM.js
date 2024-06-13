//una sola funcion que nos trabaje todo lo que hace un cajero automatico
//1.retirar dinero
//2.ingresar dinero
//3.consultar dinero
//4.salir
function cajero(nombre = "Toni") {
  let saldo = 20;
  let ingreso = 0;
  let resultado = "";
  // let nombre = nombre;
  let input = "";

  while (input !== "salir" || input !== "4") {
    if (input === "salir" || input === "4") {
      console.log("Saliendo...");
      break;
    } else if (input === "retirar" || input === "1") {
      ingreso = Number(prompt(`${nombre}, ingrese el monto a retirar`));
      if (ingreso > saldo) {
        alert("No tienes suficiente saldo");
      } else {
        // saldo = saldo - ingreso;
        saldo -= ingreso;
        resultado = `Saldo actual: ${saldo}`;
      }
    } else if (input === "ingresar" || input === "2") {
      // console.log('Ingrese el monto a ingresar');
      ingreso = Number(prompt("Ingrese el monto a ingresar"));
      // saldo = saldo + ingreso;
      saldo += ingreso;
      resultado = `Saldo actual: ${saldo}`;
    } else if (input === "consultar" || input === "3") {
      // console.log(`Saldo actual: ${saldo}`);
      alert(`Saldo actual: ${saldo}`);
      resultado = `Saldo actual: ${saldo}, que te vaya bien${nombre}.`;
    } else {
      resultado = `Hasta la proxima ${nombre}!`;
    }
    input = prompt(
      "Ingrese comando\n1.retirar\n2.ingresar\n3.consultar\n4.salir"
    );
  }
  return alert(resultado);
}
