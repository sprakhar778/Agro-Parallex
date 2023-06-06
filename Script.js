let text=document.getElementById('text');
let leaf=document.getElementById('leaf');
let hill1=document.getElementById('hill1');
let hill4=document.getElementById('hill4');
let hill5=document.getElementById('hill5');
let animal2=document.getElementById('animal2');

window.addEventListener('scroll',() => {

    let value = window.scrollY;
    if (value>1000)
    { 
      return
    
    }
    text.style.marginTop = value * 2.5 + 'px';
    leaf.style.top = value*-1.5 +'px';
    leaf.style.left = value*1.5 +'px';
    hill5.style.left = value*1.5 +'px';
    hill4.style.left = value*-1.5 +'px';
    hill1.style.top= value*1.5 +'px';
    if (value>300){
    if (value*1.1>600)
    {
      return;
    }
    animal2.style.marginLeft=1.1*value +'px';
    return;
    }
    
    else{
        animal2.style.marginLeft= value+ 'px';
        return;
    }
    
});

