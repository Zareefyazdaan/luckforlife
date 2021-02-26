



function lucktester(){

    var a = new Date();
    var max = 700
    var min = 200
  
  
    if(a.getMilliseconds() > Math.floor(Math.random() * (max - min + 1) ) + min){
      document.getElementById("p1").innerHTML = "You are lucky";
  
    }
    else{
      document.getElementById("p1").innerHTML = "You are not lucky";
    }
  
  
  
    
  }
