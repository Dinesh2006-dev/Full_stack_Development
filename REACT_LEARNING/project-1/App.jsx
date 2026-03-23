import Die from "./Die.jsx"
import React from "react"
import { nanoid } from "nanoid"
import Confetti from "react-confetti"                   // this package for the party effect 
export default function App() {
    const [Dice, setDice] = React.useState(()=>generatesAllNewDice())   // here the "Dice" as a state array
    const buttonref=React.useRef(null)
    const gameWon = Dice.every(die => die.isHeld) && Dice.every(die => die.value === Dice[0].value)
    React.useEffect(()=>{
        if (gameWon){
            buttonref.current.focus()
        }
    },[gameWon])    
    function generatesAllNewDice() {
        // const newDice =[]
        // for (let i=0;i<10;i++){
        //     newDice.push(Math.ceil(Math.random()*6))
        // }
        // return newDice

        //     OR

        return new Array(10)
            .fill(0)
            .map(() => ({
                value: Math.ceil(Math.random() * 6),
                isHeld: false,                                       // this for change the color of the die
                id: nanoid()                                        // here we can be sure that each die will have a unique id  (supose we could give this means console will be error )
            }))
    }
    function rollDice() {
        if (gameWon){                                   // this for new game start 
            setDice(generatesAllNewDice())
            return
        }
        setDice(oldDice => oldDice.map(die =>
            die.isHeld ?
                die :
                { ...die, value: Math.ceil(Math.random() * 6) }
        ))
    }

    function hold(id) {                                             // here we can be give the hold function to the Die component for print in console 
        console.log(id)                                             // for print in console id vaule like this "rumrjHGGHdskfn "
        setDice(oldDice => oldDice.map(die => {
            return die.id === id ? { ...die, isHeld: !die.isHeld } : die
        }))
    }
    const dieElements = Dice.map(dieObj =>                         // dieObj is indicated the Dice
        <Die
            value={dieObj.value}
            isHeld={dieObj.isHeld}
            key={dieObj.id}                                         // allocated the unique elements 
            hold={() => (hold(dieObj.id))}                            //  here we can be give the hold function to the Die component 
        />                                                          // In  this place we can be give  the three pros to the Die component 
    )
    return (
        <main>
            {gameWon && <Confetti                                   // this for partty effect
                width={window.innerWidth}
                height={window.innerHeight}
            />}
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="dice-container">
                {dieElements}
            </div>
            <button className="roll-dice" onClick={rollDice} ref={buttonref}>
                {gameWon ? "New Game" : "Roll"}
            </button>
        </main>
    )
}
