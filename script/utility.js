function hiddenElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden')
}

function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden')
}

function setBackgroundColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-500')
}

function getARandomAlpabet(){
    const alphaBetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphaBets = alphaBetString.split('');

    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);
    const alphaBet = alphaBets[index];
    return alphaBet;
}