function gameon() {
    const move = document.getElementById("move-off");
    
   

    const quizContainer = document.getElementById("quizContainer").style.display = 'none';
    move.addEventListener("click", start);
    
    function start () {
        move.style.display = 'none';
        document.getElementById("quizContainer").style.display  = 'block';
       
    }

}

gameon();