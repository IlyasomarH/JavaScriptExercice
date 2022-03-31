

//  let moyen =prompt("saisir votre moyenne generale")

// let moyenne=parseInt(moyen, 10)

//     function DetMention(moyenne) {
      
//         if(moyenne<10){
//             document.write('votre mention est faible')
//         }
//         else if(moyenne>=10 && moyenne<14)
//         {
//             document.write('votre mention est passable')
//         }
//         else if(moyenne>=14 && moyenne<20){
//             document.write('votre mention est trés bien')
//         }
//         else{
//              throw "votre nombre n'est valable " 
//             // alert("asc")
//         }
//     }

// try{

//   DetMention(moyenne)


// }catch(e){
    
//     alert(e)
// }



// vous voullez creer un tableau qui contient 12


let tab=['Janvier', 'fevrier','Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Otobre', 'Novembre', 'Deccembre' ]


// vous allez demander de saisir nombre compris entre 1 a 12

let numeroMois=prompt('saisir un nombre du mois')


// vous allez verifier s'il a saisir un nombre compris entre 1 a 12
function afficherMois(numeroMois) {
    
    if(isNaN(numeroMois) || numeroMois<0 || numeroMois>12){
        throw "votre nombre n'est pas valable"
    }else{
        
            alert('vous avez choisi ' + tab[numeroMois-1])
           
    }
}


try{
    afficherMois(numeroMois)
}catch(e){
    alert(e)
}


// vous allez creer une fonction qui permet de d'afficher 






