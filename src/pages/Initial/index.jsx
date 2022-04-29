import { useNavigate } from "react-router-dom";

import "./styles.css"

export const Initial = () => {
  return( 
    <div id="initialTitle">
      <p id="initialDescription">
        Clube destinado as pessoas que compreendem a verdade 
        e não acreditam na mentira contada pelos governos
        mundiais 
      </p>
      <button id="initialButtonColored">Começar</button>
    </div> 
  )
};