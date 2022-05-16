import { useState } from "react";
import Logo from "./../assets/img/logo.png";
import "./style.css";
import Select from "react-select";
import decks from "../util/decks";


 function Target(props){

    var [meta, setMeta] = useState(0)
    var [deck, setDeck] = useState('')
    let options =   Object.entries(decks).map(d => {return {value: d[0], label: d[0]}})
    console.log(options)
    let changeValor = (event) => setMeta(event.target.value)
    let changeDeck = (event) => setDeck(event.target.value)
    let handleClick = () => props.ClickTarget("inicio", meta, deck)


    return (
        <div className="Target">
           <img src={Logo} alt="Zap Recall!" />
           <h1>ZapRecall</h1>
           <input onChange={changeValor} type="number" placeholder="Digite sua meta de zaps..." />
           <Select onChange={changeDeck} options={options} placeholder= "Selecione um Zap para começar"  />
           <button onClick={handleClick}>Iniciar Recall!</button>
         </div>
         )
 }
 export default Target;

