/**
 * les variables utiliser dans tout le code
 */
let number1 = 1;
let number2 = 2;
let userInput = 0;/**valeur que rentre l'utilisateur */
let result = 0;
let expression = '';/** + - x / = */
let level = 0;/** le niveau*/
let randomRange = 0; /** chiffre aléatoire */
let score = 0;
let counter = 0;

document.getElementById('levelSetup').innerHTML= `
            <div class="d-flex justify-content-between p-5">
                <div class="border border-dark p-2">
                    <p class="text-centrer bg-dark text-white p-3 mb-2 font-weight-bold">Difficulty</p>
                    <button class="btn btn-primary" value="+" onclick="setExpression(this)">+</button>
                    <button class="btn btn-primary" value="-" onclick="setExpression(this)">-</button>
                    <button class="btn btn-primary" value="x" onclick="setExpression(this)">x</button>
                    <button class="btn btn-primary" value="/" onclick="setExpression(this)">/</button>
                </div>
                <div class="border border-dark p-2">
                    <p class="text-centrer bg-dark text-white p-3 mb-2 font-weight-bold">Difficulty</p>
                    <button class="btn btn-primary" value="1" onclick="setLevel(this)">1</button>
                    <button class="btn btn-primary" value="2" onclick="setLevel(this)">2</button>
                    <button class="btn btn-primary" value="3" onclick="setLevel(this)">3</button>
                    <button class="btn btn-primary" value="4" onclick="setLevel(this)">4</button>
                </div>
            </div>`;

/** fonction pour choisir le + x - / */
function setExpression(ex){
    expression = ex.value;
    startTestQuestion();
}


/** fonction pour récuperer le level */
function setLevel(lev){
    level = lev.value;
    switch(level){
        case '2':
            randomRange =10;
            break;
        case '2':
            randomRange =100;
            break;
        case '3':
            randomRange =1000;
            break;
        case '4':
            randomRange =10000;
            break;
        case '5':
            randomRange =100000;
            break;
    }
    startTestQuestion();
}

/** fonction : si il y a expression et level alors on affiche*/
function startTestQuestion(){
/** si expression n'est pas vide et level est plus grand que 0*/
    if(expression!= '' && level > 0){
        calculateTest();
    }
    showScoreInformation();
}

function calculateTest(){

    number1 = Math.floor(Math.random()*randomRange);
    number2 = Math.floor(Math.random()*randomRange);

    switch(expression){
        case '+' :
            result = number1 + number2;
            break;
        case '-' :
            result = number1 - number2;
            break;
        case 'x' :
            result = number1 * number2;
            break;
        case '/' :
            if(number2 === 0){
                result = number1 / number2 + 1;
            }else{
                result = number1 / number2;
            }
            break;
    }
TestQuestion();
}

function TestQuestion(){
    document.getElementById('levelSetup').innerHTML='';/**ici pour faire en sorte que cela s'enleve une fois choisi */

    document.getElementById('calcule').innerHTML=`
        <div class="input-group input-group-lg p-5">
            <div class="input-group-prepend">
                <span class="input-group-text" style="font-size: 40px;">${number1} ${expression} ${number2} =</span>
            </div>
             <input type="number" id="playerInput" class="form-control" style="font-size: 40px;">
             <div class="input-group-prepend">
                <button class="btn btn-success" style="font-size: 40px;" onclick="setUserInput()">Validate</button>
            </div>
        </div>`
    ;
}

function showScoreInformation(){
    document.getElementById('score').innerHTML = `
        <p class="m-0">Score : 20/20</p>
        <p class="m-0">Expression : ${expression} </p>
        <p class="m-0">Level : ${level} </p>`;
}