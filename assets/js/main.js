/* 
Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. 
*/

let casualNumbers = [];
let inputNumbers = [];
let numbers = document.getElementById('numbers');	



//funzione genera numeri casuali

function randomNumbers(min, max){

   let randomNumber = Math.floor(Math.random() * max) + min;

   return randomNumber;

}


//funzione che fa sparire i numeri

function hideNumbers(){

   numbers.classList.add('d-none');

}


//funzione che chiede e riempe un array con i numeri inseriti da utente

function userNumbers(){

   while (inputNumbers.length < 5){

      let userNumber = parseInt(prompt('inserisci numero: '));
   
      if(!inputNumbers.includes(userNumber)){
   
         inputNumbers.push(userNumber);
   
      }  else{
   
         console.log('numero già inserito')
   
      }
   
   }

   console.log(inputNumbers)

}


//funzione che riempe l'array di x numeri casuali

function generatedNumbers(){

   while (casualNumbers.length < 5){

      let randomNum = parseInt(randomNumbers(1, 10));

      if(!casualNumbers.includes(randomNum)){

         casualNumbers.push(randomNum);

      }  else{

         console.log('numero già generato')

      }

   }

   console.log(casualNumbers);

}




generatedNumbers();

numbers.innerHTML = `${casualNumbers}`;

setTimeout(hideNumbers, 4800);
setTimeout(userNumbers, 5000);





