let reng=['A','B','C','D','E','F','1','2','3','4','5','6','7','8','9']

let divinRengi=document.querySelector('#reng');
let divinRengi1=document.querySelector('#reng1');
let divinRengi2=document.querySelector('#reng2');
let bodye=document.querySelector('#body')


let h1Kod=document.querySelector('#btn2');
let h1Kod1=document.querySelector('#btn21');
let h1Kod2=document.querySelector('#btn22');
let kod=''
function myfirst(){
   for(let z=0; z<3;z++){
    for(let i=0; i<3;i++){
        let k=Math.floor(Math.random()*reng.length)
        
        
        
kod+=reng[k];
    }
    console.log(kod);
    divinRengi.style.backgroundColor='#'+kod;
    divinRengi1.style.backgroundColor='#'+kod;
    divinRengi2.style.backgroundColor='#'+kod;
    h1Kod.innerHTML='#'+kod;
    h1Kod1.innerHTML='#'+kod;
    h1Kod2.innerHTML='#'+kod;
    
    bodye.style.backgroundColor='#'+kod;
    kod='';
   }

  
// alert('salam')


// divinRengi.style.backgroundColor='#'+kod


}


