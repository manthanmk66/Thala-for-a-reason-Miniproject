function countcharacters(){
    
    const inputdata=document.getElementById("id1").value;
    var charCount = inputdata.length;
    switch(charCount){

        case 1: 
        document.getElementById("charCount").innerText = inputdata+" = 1 + 6 = 7 Thaala for a Reason!!" ;
        break;
        case 2: 
        document.getElementById("charCount").innerText = inputdata+"  = 2 + 5 = 7 Thaala for a Reason!!" ;
        break;
        case 3: 
        document.getElementById("charCount").innerText = inputdata+"  = 3 + 4 = 7 Thaala for a Reason!!" ;
        break;
        case 4: 
        document.getElementById("charCount").innerText = inputdata+"  = 4 + 3 = 7 Thaala for a Reason!!" ;
        break;
        case 5: 
        document.getElementById("charCount").innerText = inputdata+" = 5 + 2 = 7 Thaala for a Reason!!" ;
        break;
        case 6: 
        document.getElementById("charCount").innerText =inputdata+ " = 6 + 1 = 7 Thaala for a Reason!!" ;
        break;
        case 7: 
        document.getElementById("charCount").innerText =inputdata+ " = 7 Thaala for a Reason!!" ;
        break;
        case 8: 
        document.getElementById("charCount").innerText =inputdata+ " = 8 - 1 = 7 Thaala for a Reason!!" ;
        break;
        case 9: 
        document.getElementById("charCount").innerText =inputdata+ " = 9 - 2 = 7 Thaala for a Reason!!" ;
        break;
        case 10: 
        document.getElementById("charCount").innerText =inputdata+ " = 10 - 3 = 7 Thaala for a Reason!!" ;
        break;
        default:document.getElementById("charCount").innerText =inputdata+" = Moye Moye" ;
        break;
            
    }
    
    

    var audioElement = document.getElementById("audio");
    audioElement.play();
    var imageElement = document.getElementById("img");
    imageElement.src = "./Assets/giphy.gif";
    imageElement.style.display = "block";
    


}