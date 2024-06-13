"use strict";
//una sola funcion que nos trabaje todo lo que hace un cajero automatico
//1.retirar dinero      //withdraw
//2.ingresar dinero     //deposit
//3.consultar dinero    //balance
//4.salir

//VARIABLES
let balance = 20;
let nombre;
let deposit;
const MILEURISTA = 1000;
const TEXT = [
  [
    "Options",
    "Change Language",
    "Deposit",
    "Withdraw",
    "Balance",
    "Exit",
    "English",
    "Spanish",
    "How much do you want to deposit?",
    "How much do you want to withdraw?",
    "Goodbye!",
    "Invalid option",
    "You don't have enough money on your bank account, there is a liver transplant clinic nearby, make a donation!",
    "Your 'should' have",
    "leaving the terminal.\nActual balance actual :",
    "Your Balance is:",//15
    ". You are rich!",
    ", dont cry, there are cameras around!",
    "Your actual balance is:",
    ", iva : ",
    "from deposit ",
    "was deducted. Thank you citizen. Continue working.",
  ],
  [
    "Que option desea?",
    "Cambiar idioma",
    "Ingresar",
    "Retirar",
    "Consultar",
    "Salir",
    "Ingles",
    "Español",
    "¿Cuánto quieres depositar?",
    "¿Cuánto deseas retirar?",
    "Adiós!",
    "Opción inválida",
    "No tienes suficiente dinero en tu cuenta bancaria, hay una clínica de trasplante de hígado cerca, ¡haz una donación!",
    "Debería tener",
    "saliendo de la terminal.\nSaldo real ahora:",
    "Saldo actual:",//15
    ". Eres rico!",
    "¡No llores, hay cámaras alrededor!",
    "Su saldo actual es:",
    ", iva : ",
    "de deposito ",
    "se dedujo. Gracias ciudadano. Continúe trabajando.",
  ],
];
let langindex = 0;

//MAIN FUNCTION
function main(name = "Toni") {
  let message = `Connecting... \nWelcome ${name}!`;
  let input = null;
  alert(message);

  while (input !== "5") {
    //PROMPT
    input = prompt(
      `${TEXT[langindex][0]}: \n 1. ${TEXT[langindex][1]} \n 2. ${TEXT[langindex][2]} \n 3. ${TEXT[langindex][3]} \n 4. ${TEXT[langindex][4]} \n 5. ${TEXT[langindex][5]}`
    );
    //
    switch (input) {
      case "1":
        changeLanguage(
          prompt(`1.${TEXT[langindex][6]} \n2.${TEXT[langindex][7]}`),
          langindex
        );
        break;
      case "2":
        depositFunds(prompt(`${TEXT[langindex][8]}`));
        break;
      case "3":
        withdrawFunds(prompt(`${TEXT[langindex][9]}`));
        break;
      case "4":
        //call balance function
        showBalance(balance);
        break;
      case "5":
        message = `${TEXT[langindex][10]}`;
        break;
      default:
        alert(`${TEXT[langindex][11]}`);
        break;
    }
  }
  return alert(message);
}
function setLangindex(index) {
  langindex = index;
}
//LOGIC FUNCTIONS
function withdrawFunds(money) {
  let withdraval = Number(money);
  if (balance < withdraval) {
    alert(`${TEXT[langindex][12]}`);
  } else {
    // saldo = saldo - ingreso;
    balance -= withdraval;
    balance = parseFloat(balance).toFixed(2);
    alert(
      `${TEXT[langindex][13]} ${withdraval}€ ${TEXT[langindex][14]} ${balance}€`
    );
  }
}
function changeLanguage(action, langindex) {
  //data verification TODO
  //data 1 or 2 or else
//   console.log(action);
  if (action === "1") {
    setLangindex(0);
    // console.log(langindex);
  } else if (action === "2") {
    setLangindex(1);
    // console.log(langindex);
  } else {
    langindex = 0;
    alert(`${TEXT[langindex][11]}`);
  }
  return langindex;
}

function showBalance(money) {
  if (money > MILEURISTA) {
    alert(`${TEXT[langindex][15]} ${money}€ ${TEXT[langindex][16]}`);
  } else {
    alert(`${TEXT[langindex][15]} ${money}€ ${TEXT[langindex][17]}`);
  }
}
function depositFunds(money) {
  deposit = Number(money);
  // saldo = saldo + ingreso;
  let iva = (deposit / 100) * 20;
  iva = parseFloat(iva).toFixed(2);
  balance += (deposit - iva);
  balance = parseFloat(balance).toFixed(2);
  alert(
    `${TEXT[langindex][18]} ${balance}€ ${TEXT[langindex][19]} ${iva}€ ${TEXT[langindex][20]} ${deposit}€ ${TEXT[langindex][21]}`
  );
}
