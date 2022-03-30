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



window.addEventListener('load', function() {
    let p=document.getElementById('html')
    let css=document.getElementById('css').style.display="none"
    let js=document.getElementById('js').style.display="none"
    let php=document.getElementById('php').style.display="none"
	 document.getElementById('p1').innerHTML=p.innerHTML
    p.style.display="none"
 //     css.style.display="none"
	// js.style.display="none"
	// php.style.display="none"
})


let boutton=document.querySelectorAll('button')



for(let i=0; i<boutton.length;i++){
	let enfant =boutton[i]
	

enfant.addEventListener('click',function(){

  let p=document.getElementById('html')
   let css=document.getElementById('css')
    let js=document.getElementById('js')
    let php=document.getElementById('php')
  // let p1=document.querySelectorAll('p')

  		document.getElementById('p1').innerHTML=php.innerHTML

  			 // alert(p1[3].textContent)
  			  // alert(css.innerHTML)
       let bouttonClick=enfant.textContent

       // alert(enfant.textContent)

      if(bouttonClick=='HTML'){
      	  p.style.display="none";
	 	document.getElementById('p1').innerHTML=p.innerHTML
      }
      else if(bouttonClick=="CSS"){
      	document.getElementById('p1').innerHTML=css.innerHTML
      }
      else if(bouttonClick=="JavaScript"){
      	document.getElementById('p1').innerHTML=js.innerHTML

      }
      else if(bouttonClick=="PHP") {
      	document.getElementById('p1').innerHTML=php.innerHTML
      }
  

})

}


// function defaultF() {

// 	document.getElementById('html').style.color="red"

//  	// 	p.style.display="none";
// 	 // document.getElementById('p1').innerHTML=p.innerHTML
        
	
// }

