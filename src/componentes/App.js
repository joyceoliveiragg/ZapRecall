//import Inicio from "./Inicio";
import { useState, useEffect } from "react";
import nextWorkflowStatus from "../util/workflowStatus";
import Target from "./Target";
import Collection from "./Collection";


function App(){

  const [zapInfo, changeZapInfo] = useState({
    workflowStatus: "inicio",
    meta: 0,
    deck: ''
  })

  useEffect(()=> {})

  var changeStatus = (status) => {
    //manusear state e o workflow status.
  
    changeZapInfo({...zapInfo,})
  }
 // console.log(changeStatus(status))

  let vapo = () => {
    // cliquei(zapInfo.workflowStatus)
  }
  let clickTarget = (status, target ,deck) => {
    changeZapInfo({workflowStatus: nextWorkflowStatus[status], meta: target, deck: deck})
  }

  let workflow = () => {
    console.log(zapInfo)
    switch(zapInfo.workflowStatus){
     /* case "inicio":
        return (<Inicio clickInicio={cliquei}/>)*/
      case "inicio":
        return (<Target ClickTarget={clickTarget}/>)
      case "jogo":
        return (<Collection />)
    }
  }

  
  return(
    <>
    {workflow()}  
    </>
  )
}
export default App;