class ship{
    constructor(name,hull,firepower,accuracy){
      this.name = name;
      this.hull = hull;
      this.firepower = firepower;
      this.accuracy = accuracy;
    }
    get getHull(){
        return this.hull;
    }
  
    fire(){
        let odds = Math.round(Math.random()*100)/100;
        if(odds <= this.accuracy){
            return this.firepower;
            } else {
            console.log("%c You missed!", 'color:red;');
            return 0;
        }
    }
    takeHarm(harm){
        this.hull -= harm;
        if(this.hull <= 0){
            alert(`${this.name} has been destroyed!`);
            console.log(`%c ${this.name} has been destroyed!`, 'color:red;');
            } else {
            alert(`${this.name} has taken ${harm} harm`);
            console.log(`%c ${this.name} has taken ${harm} harm`, 'color:red;');
        }
    }
}
let yourScore = 0;
let alienScore = 0;
function playerChoice(){
    let choice = prompt("Do you attack or retreat?", "What would you like to do? Attack or Retreat? Type your choice.");
    if(choice.toLowerCase() === 'retreat'){
        alienScore++;
        document.getElementById('flex-child-2').innerHTML = alienScore;
        return 'break'; 
        } else if(choice.toLowerCase() === 'attack'){
        return 'continue';
        } else {
        alert('You did not make any choice. Try again!');
        console.log('%c You did not make any choice. Try again!', 'font-style: italic; background: azure; border: 1px solid grey;');
        playerChoice();
    }
}

function getRandom(min, max){
    return Math.random() * (max - min + 1) + min;
}

        
const newGame = () => {
    console.log('%c spacebattle', 'font-size: 30px');
    let  YourShip = new ship('YourShip', 20, 5, 0.7);
    alert("Ready? \n \n Set. \n \n GO!");
    console.log(`%c Ready? Set. GO!`, 'font-style: italic; background: white; border: 1px solid black; color: red;');
    for(let i = 1; i <= 6; i++){
        let alien = new ship(`Alien ship number ${i}`, getRandom(3, 6), getRandom(2, 4), getRandom(0.6, 0.8));
        alert(`Pilot: I got visual on alien ship ${i}`);
        console.log(`%c Pilot: I got visual on alien ship ${i}`, 'font-style: italic; background: white; border: 1px solid grey; color: red;');

        
        let answer = playerChoice();      
        if(answer === 'break'){
            break;
        }

        while(alien.getHull > 0 && YourShip.getHull > 0){
            alien.takeHarm(YourShip.fire());
            if(alien.getHull > 0){
                YourShip.takeHarm(alien.fire());
            }  
        }

        if(YourShip.getHull <= 0){
            alienScore++;
            document.getElementById('flex-child-2').innerHTML = alienScore;
            break;  
        }

        if(i === 6){
            alert("YOU WIN!");
            yourScore++;
            document.getElementById('flex-child-1').innerHTML = yourScore;
            console.log(`%c YOU WIN!`, 'color:green;');
        }
    }
    let playagain = prompt("Do you want to play again? Type your choice.", "YES or NO");
    
    if(playagain.toLowerCase() === 'yes'){
        newGame();
        } else {
        alert("GAME OVER");
        console.log(`%c GAME OVER`, 'color:red;');
    }
};
newGame();