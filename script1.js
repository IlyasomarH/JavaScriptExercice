// document.querySelector('#h1').style.color='red'

// let p=document.querySelector('p')


// p.addEventListener('mouseover', function(){
// 	this.style.color="red"
// })



// p.addEventListener('mouseout', function(){
// 	this.style.color="black"
// })


// let lien= document.querySelector('a')

// lien.addEventListener('click', function(e){
// 		confirm('vous voulez vraiment quitter')
// 		e.preventDefault()
// })






// let d=document.querySelector('select')


// d.addEventListener('change',function(){
// 	// document.write("vous avez choisi :" + d.value)
// 	document.getElementById('p').innerHTML="vous avez choisi :" + d.value
// })






// let d=document.querySelector('h1')

// let f=function mafonction()
// {
// 	d.style.color="blue"
// }

// d.addEventListener('mouseover',f)






// d.addEventListener('mouseout',function(){
// 	d.style.color="red"
// })





let boutton=document.querySelectorAll('button')


let enfant =boutton[0]

enfant.addEventListener('click',function(){
		enfant.style.backgroundColor='#F1A'
		enfant.style.color='white'
})
