
import { useState } from "react"
import "./Counter.css"
import "animate.css"


export default function Counter(){

    // useState
    const [counter, setCounter] = useState(Number)

    let counterOptions = {
        // increment button
        buttonUp: ()=> setCounter(c=>c+=1),

        //decrement button
        buttonDown: ()=> {
            if(counter > 0)  setCounter(c=>c-=1)
        },

        //reset button
        buttonReset: ()=> {
            if(counter > 0)  setCounter((c)=>c-=counter)
        }
    }
   
//counter buttons
    const Buttons = ()=>{
        return  <article className="container__controls animate__animated animate__fadeIn">
        <button className="button__down container__controls animate__animated  animate__bounce" onClick={()=>counterOptions.buttonDown()}>-</button>
        <p className="data__result" >{counter}</p>
        <button className="button__up container__controls animate__animated animate__bounce" onClick={()=>counterOptions.buttonUp()}>+</button>
        <button className="button__reset" onClick={()=>counterOptions.buttonReset()}>RESET</button>
    </article>
    }


    return <section className="container__counter">
            <h1 className="animate__animated animate__fadeIn">Counter</h1>
            

           <Buttons counter={counter} counterOptions={counterOptions} />

    </section>
}



