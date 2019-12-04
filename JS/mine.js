var allImageArray =[];
var allImage = document.querySelectorAll(".itemImage");
var ligtBoxContainer = document.querySelector(".ligtBoxContainer");
var close = document.getElementById("close");
var lightBoxInner = document.querySelector(".lightBoxInner");
var currentIndex = 0;
var next = document.getElementById("next");
var peve = document.getElementById("reve")
for(i=0 ; i<allImage.length ; i++)
    {
        
        allImageArray.push(allImage[i])
        
        
        
        
        
        allImage[i].addEventListener("click", function(e){
            currentIndex =  allImageArray.indexOf(e.target)
            console.log(currentIndex)
            var myImageSrc = e.target.src;
            lightBoxInner.style.backgroundImage = "url("+myImageSrc+")"
            ligtBoxContainer.classList.add("show")
            
            

        })
        
        
    }
next.addEventListener("click",function(){
    
    currentIndex = currentIndex +1
    if(currentIndex >= allImage.length)
        {
            currentIndex = 0;
        }
      var nextImageSrc = allImage[currentIndex].src;
    lightBoxInner.style.backgroundImage = "url("+nextImageSrc+")"
   
})

peve.addEventListener("click", function(){
    
    currentIndex = currentIndex-1;
    if(currentIndex < 0)
        {
            currentIndex = allImage.length -1 
        }
    var perveImageSrc = allImage[currentIndex].src;
    lightBoxInner.style.backgroundImage = "url("+perveImageSrc+")"
    
    
    
    
})
close.addEventListener("click", function(){

    ligtBoxContainer.classList.remove("show")
    
})
document.addEventListener("keydown",function(e){
    
    if(e.keyCode == 39)//right
        {
            
             currentIndex = currentIndex +1
    if(currentIndex >= allImage.length)
        {
            currentIndex = 0;
        }
      var nextImageSrc = allImage[currentIndex].src;
    lightBoxInner.style.backgroundImage = "url("+nextImageSrc+")"
    
        }
    
    else if(e.keyCode == 37) //left
        {
            
            currentIndex = currentIndex-1;
    if(currentIndex < 0)
        {
            currentIndex = allImage.length -1 
        }
    var perveImageSrc = allImage[currentIndex].src;
    lightBoxInner.style.backgroundImage = "url("+perveImageSrc+")"
    
    
        }
    
    else if(e.keyCode == 27) //close
        {
             
    
           ligtBoxContainer.classList.remove("show")
    
        }
    
})