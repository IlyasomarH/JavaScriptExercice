// getting HTML element 

	// let titre =document.getElementById('h1')

	// let titre=document.getElementsByTagName('h1')[0]

	// let titre=document.getElementsByClassName('h')[0]

	 let titre=document.querySelector('h1') 
	 let btn1=document.querySelectorAll('button')[0]
	 let btn2=document.querySelectorAll('button')[1]
	 let image=document.querySelector('img')

	 // alert(btn.innerHTML)





// changer le contenu d'un element 

	// titre.innerHTML="le titre est changer"

	// titre.textContent="ALI"




// Exercice 


	// ajouter un contenu a un element sans changer son propre contenu.


// JavaScript can change all the HTML attributes in the page


			btn1.addEventListener('click', function(){
			     
                
   
   				document.querySelector('p').className="red"
   				// document.querySelector('p').className='red'

  
              //image.src="2.png"

			  // document.querySelector('p').classList.toggle('blue')

			  


			       // document.querySelector('p').innerHTML="paragraphe est changer"
			})

			btn2.addEventListener('click', function(){
				document.querySelector('p').className='blue'
			})


//•	JavaScript can change all the CSS styles in the page


    titre.style.fontStyle='italic'



// •	JavaScript can change all the HTML elements in the page




// 

document.querySelector('h1').classList.add('red')

document.getElementsByTagName('p')[0].classList.replace('red', 'blue')

// let bol=document.querySelector('p').classList.contains("red")













// let p=document.querySelector('p')


// p.addEventListener('click', function(){


// 	p.classList.toggle('blue')

// })