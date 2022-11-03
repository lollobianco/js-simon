/* 
Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. 
*/

let casualNumbers = [];
let inputNumbers = [];
let correctNumbers = [];
let numbers = document.getElementById('numbers');
let inputNum = document.getElementById('inputNum');
let correct = document.getElementById('correct');



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

   numbers.classList.remove('d-none');

   numbers.innerHTML = (`I numeri corretti erano: ${casualNumbers}`);
   inputNum.innerHTML = (`I numeri inseriti sono: ${inputNumbers}`);

   checkNumbers();

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


//funzione che compara i due array e stampa risultato

function checkNumbers(){

   for (let i = 0; i < casualNumbers.length; i++){

      for (let k = 0; k < inputNumbers.length; k++){

         if(casualNumbers[i] == inputNumbers[k]){

            correctNumbers.push(inputNumbers[k]);
            console.log(correctNumbers);

         }

      }

   }

   let manyCorrect = correctNumbers.length;

   correct.innerHTML = `Hai inserito ${manyCorrect} numeri corretti su 5: ${correctNumbers}`

}




generatedNumbers();

numbers.innerHTML = `${casualNumbers}`;

setTimeout(hideNumbers, 4800);
setTimeout(userNumbers, 5000); 





