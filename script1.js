
// variables 

// nombre 


// let age=2+6    operand et operateur 



//declaration d'un array


let tab=["ilyas","omar",169,12]
// document.write("ASC")



// Ajouter un element à la fin du tableau et return taille du tableau 
let taille=tab.push("Farah")
console.log("la taille est "+ taille)
console.log( tab)



// Supprimer le dernier élément du tableau et return l'element en question

let dernierElementSupprimer= tab.pop()
console.log("la dernier element du tableau a été supprimer")
console.log( tab)
console.log("la dernier element supprimer est "+ dernierElementSupprimer)

//Supprimer le premier élément du tableau  et return l'element en question
let premierElementSuprimer= tab.shift()
console.log("la premiere element du tableau a été supprimer")
console.log( tab)
console.log("la premiere element supprimer est "+ premierElementSuprimer)

// ajouter un element au debut du tableau
console.log("ajouter un element au debut du tableau et return la taille du tableau")
tab.unshift("Mako")
console.log( tab)


// declarer le tableau


const semaine=['lun', 'mra', 'mer', 'jeu', 'ven', 'sam', 'ddi' ]
document.write(semaine)

// 1.	Retirer le dernière valeur du tableau jours

semaine.pop()
document.write('<br>')
document.write(semaine)

// 3.	Ajouter la valeur ‘dim’ à la fin du tableau

semaine.push('dim')

document.write('<br>')
document.write(semaine)
// 4.	Remplacer la valeur ‘mra’ par ‘mar’

semaine[1]="mar"

document.write('<br>')
document.write(semaine)

//6.	Afficher la troisième valeur du tableau
document.write('<br>')
document.write(semaine[2])




// tab[0]="Ali"

// console.log(tab.length)
