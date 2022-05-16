import { useState } from "react";
import "./style.css"
import App from "./App";
import Target from "./Target";

import "./style.css";
import LogoPequeno from "./../assets/img/logo-pequeno.png";

import Card from "./Card";
import Icone from "./Icone";

 const target = Target()
function Collection() {
    const [meta, setMeta] = useState ([]);
    const [deck, setDeck] = useState ([]);
    const [respostas, setRespostas] = useState([]);
    const [questoes, setQuestoes] = useState([]);
  
    function montarcards() {
      if(questoes.length === 0) {
        deck.sort(comparador);
        setQuestoes([...deck]);
        return <></>;
      }
      else {
        return questoes.map((questao, indice) => {
          const {frente, verso} = questao;
          return <Card 
            key={frente + indice}
            indice={indice + 1}
            frente={frente}
            verso={verso}
            aoFinalizar={resposta => setRespostas([...respostas, resposta])}
          />
        })
      }
    }
  
    function montarFooter() {
      let resultado = <></>;
      
      if(respostas.length === questoes.length && questoes.length > 0) {
        if(!respostas.includes("erro")) {
          resultado =  (
            <div className="resultado">
              <span><Icone icone="festinha" /> Parabéns!</span>
              <p>Você não esqueceu de nenhum card!</p>
            </div>
          ) 
        } else {
          resultado = (
            <div className="resultado">
              <span><Icone icone="triste" /> Putz!</span>
              <p>Ainda faltam alguns...Mas não desanime!</p>
            </div>
          )
        }
      }
  
  
      return (
        <>
        {resultado}
        <p>{respostas.length}/{questoes.length} concluídos</p>
        { respostas.map(resposta => <Icone icone={resposta} />) }
        </>
      )
    }
  
    const cards = montarcards();
    const footer = montarFooter();
  
    return (
      <div className="Collection">
        <header>
          <img src={LogoPequeno} alt="ZapRecall" />
          <h1>Zap Recall</h1>
        </header>
        <main>
          {cards}
        </main>
        <footer>
          {footer}
        </footer>
      </div>
    )
  }
  
  function comparador() {
    return Math.random() - 0.5;
  }
  
  export default Collection;
  //let dadosUsuario = App.clickTarget
//console.log(dadosUsuario)