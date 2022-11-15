

    var diceOne = Math.floor(Math.random()*6 + 1);
    var diceTwo = Math.floor(Math.random()*6 + 1);
    if(diceOne > diceTwo){
        document.getElementById("Heading").textContent = "Player 1 wins";
    }else if(diceOne === diceTwo){
        document.getElementById("Heading").textContent = "Draw";
    }else{
        document.getElementById("Heading").textContent = "Player 2 wins";
    }
    document.querySelector(".img1").setAttribute("src","images/dice" + diceOne + ".png");
    document.querySelector(".img2").setAttribute("src","images/dice" + diceTwo + ".png");
