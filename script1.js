

//  let numeroMois=Number(prompt("saisir un numero compris entre 1 a 12 pour savoir le mois correspond ?"))




//  function getMois(numero){

 	

//  		let Mois=['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'juin', 'juillet', 'Aout', 'Septembre', 'octobre', 'Novembre' , 'Decembre']

//  	if(numero>=1 && numero<=12){
//          alert('vous avez choisi ' + Mois[numero-1])
//  	}
//  	else{
//  		throw "numeroMoisInvelid"
//  	}
//  }


// try{

//  getMois(numeroMois)
// }catch (e) {

//  alert(e); // on gère l'erreur avec une fonction
// }





// autre 

// function f() {
//   try {
//     console.log(0);

//     // return true
//      throw "bug";
//   } catch(e) {
//     console.log(1);
//     return true; // Cette instruction est bloquée jusqu'à la fin du bloc finally
//     console.log(2); // Ne pourra jamais être exécuté
//   } finally {
//     console.log(3);
//     // return true; // On surcharge l'instruction "return" précédente
//     console.log(4); // Ne pourra jamais être exécuté
//   }
//   // "return false" est exécuté

//   console.log(5); // Ne pourra jamais être exécuté
// }
// f()



try {
    throw new Error("Ouups !");
} catch (e) {
    console.log(e.name + ": " + e.message);
}