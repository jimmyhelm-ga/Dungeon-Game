const prompt = require('prompt-sync')()

const username = prompt('Enter your name: ')

console.log(`Welcome to the game, ${username}!`);

console.log(`You enter the forrest and walk along the path.
You encounter a stranger. 
He asks if you'll enter the dungeon to rescue his cat.
` )
    
let answer = prompt("Yes or No: ");
let weapon = ""
let ghostHp = 10
    if(answer.toLowerCase() === "yes"){
        console.log(`You have chosen to rescue the cat. You enter the dungeon.
        `)
        console.log("In the dungeon there are two hallways. One to the left and one to the right.")
       
        answer = prompt("Do you choose to go left or right? ")
       

        if(answer.toLowerCase() === "left"){
            console.log(`You walk down the hallway and find a treasure chest.
            You open the treasure chest and inside are a bunch of snakes. They bite you.
            Game Over.`)
        }
            else if(answer.toLowerCase() === "right"){
            console.log(`You walk down the hallway to the right and discover a dining room where a group of people are eating.
        `)
            answer = prompt("Do you join them? Yes or no. ")

            if(answer.toLowerCase() === "yes"){
                console.log("You eat a few grapes from the table and discover that they are poison. Game Over. ")
            }
            
                if(answer.toLowerCase() === "no")
                console.log("You ignore the people and continue on down the hallway. A sword lies on the ground. Do you pick it up? Yes or no." )

                answer = prompt("Yes or No: ")

                  if(answer.toLowerCase() === "yes") {
                    weapon = "sword"
                    console.log("You picked up a sword")
                    
                }  
                if(answer.toLowerCase() === "no"){
                    console.log("You see a bow and arrow and pick it up")
                    weapon = "bow" 
                    

                } 
                    console.log(`You are attacked by a ghost. You use ${weapon}`)
                    if(weapon === 'sword'){
                        console.log(`You hit the ghost. His HP is ${ghostHp -= 5}`)
                        console.log(`The ghost hp is now ${ghostHp}`)
                    }
                    if(weapon === 'bow'){
                        console.log(`You hit the ghost. His HP is ${ghostHP -= 6}`)
                        console.log(`The ghost hp is now ${ghostHp}`) 
                    }

                    console.log("The ghost attacks again. You strike him a second time with your sword and kill him.")

                    console.log("The ghost attacks again. You can't ")
        
        }
        
    }
    else if(answer.toLowerCase() === "no"){
        console.log("You continue the path are killed by a lion. Game Over.")
    } 

  