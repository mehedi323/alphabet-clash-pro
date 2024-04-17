function continueGame(){
    const alphaBet = getARandomAlpabet();
    const currentAlphaBetElement = document.getElementById('current-alphabet');
    currentAlphaBetElement.innerText = alphaBet;

    setBackgroundColor(alphaBet)

}

function playNow(){  
    hiddenElementById('home-screen');
    showElementById('play-graound');
    continueGame();
}