document.getElementsByTagName("h1")[0].style.fontSize = "6vw";



// fence variables //

var fencePricePack = {
  boards : 4.65
  twoByFours : 16
  cPost : 70
  gatePost : 116
  walkGate : 85
  driveGate : 250
  nails : 6
  remove : 2.5
}



// For tax

var tax = .084

// For todays date;
Date.prototype.today = function () { 
    return ((this.getDate() < 10)?"0":"") + this.getDate() +"/"+(((this.getMonth()+1) < 10)?"0":"") + (this.getMonth()+1) +"/"+ this.getFullYear();
}

// For the time now
Date.prototype.timeNow = function () {
     return ((this.getHours() < 10)?"0":"") + this.getHours() +":"+ ((this.getMinutes() < 10)?"0":"") + this.getMinutes() +":"+ ((this.getSeconds() < 10)?"0":"") + this.getSeconds(); 

}




// Fence Function // 


function fenceFunction() {
  boardTotal = fencePricePack.boards * document.getElementByID(‘boardInput’).value;

  twoByFourTotal = fencePricePack.twoByFours * document.getElementByID(‘twoByFourInput’).value;
  
  cPostTotal = fencePricePack.cPost * document.getElementByID(‘cPostInput’).value;

  gatePostTotal = fencePricePack.gatePost * document.getElementByID(‘gatePostInput’).value;
  
  walkGateTotal = fencePricePack.walkGate * document.getElementByID(‘walkGateInput’).value;
  
  //Values of nails and remove always based on the input of "board"
  
  nailTotal = fencePricePack.nails * document.getElementByID(‘boardInput’).value;
    
  removeTotal = fencePricePack.remove * document.getElementByID(‘boardInput’).value;
  
  sumTotal = boardTotal + twoByFourTotal + cPostTotal + gatePostTotal + walkGateTotal + nailTotal + removeTotal
  
  tax = sumTotal * .084


//Function Header
  print ("Customer Name " document.getElementByID(‘form-user’).value) + document.getElementByID(‘input-last’).value
  print ("Date: " + Date.prototype.today) 
  print ("Time: " + Date.prototype.timeNow)
  
  
 
 //Function Math
  print ("Board total: " + boardTotal) 
  print (" 2x4 total: " + twoByFourTotal) 
  print ("C-Post total: " + cPostTotal) 
  print ("Gate Post total: " + gatePostTotal) 
  print ("Walk Gate total total: " + walkGateTotal 
  print ("Nail total: " + nailTotal
  print ("Remove total: " + removeTotal)
  Print ("Total, Before Tax: " + sumTotal)
  Print ("Tax: " + tax)
  print ("Total, After Tax: " + (sumTotal + tax))
  print ("Price per foot: " + sumTotal/ document.getElementByID('boardInput').value;

}





// Form Submission //


// Automatically send form to Jerry (fencemanco.yahoo.com) //










