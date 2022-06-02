$('.carousel').carousel({
    interval: 2000
  })
  //
  var phoTo= document.querySelectorAll('.photoo li');
  var imaArray= Array.from(phoTo);
  var imaGe=document.querySelectorAll('.photo-images .col');
  var imaSe=document.querySelectorAll('.photo-images .switzerland');
  var imaTe=document.querySelectorAll('.photo-images .thailand');
  var imaIe=document.querySelectorAll('.photo-images .ireland');
  var imaKe=document.querySelectorAll('.photo-images .turkey');
  phoTo.forEach(el =>
     el.onclick=function(){
      imaArray.forEach(e=>e.classList.remove('active'));
  
      this.classList.add('active');

      if(this.dataset.photo === 'all' ){imaGe.forEach(im=>{im.style.opacity='1';});}

     if(this.dataset.photo !== 'all' ){imaGe.forEach(im=>{im.style.opacity='.1';});}
      
     if(this.dataset.photo=== '.switzerland'){imaSe.forEach(im=>{im.style.opacity='1';});}
          
     if(this.dataset.photo=== '.thailand'){imaTe.forEach(im=>{ im.style.opacity='1';});}
               
     if(this.dataset.photo=== '.ireland'){ imaIe.forEach(im=>{im.style.opacity='1';});}
                    
     if(this.dataset.photo=== '.turkey'){ imaKe.forEach(im=>{im.style.opacity='1';});}             
      
}

      );