import { Link, useNavigate } from "react-router-dom";

import "./styles.css";

export const Initial = () => {
  let navigate = useNavigate()
  const toLogin = () => {
    navigate('/signin')
  }
  return (
    <div id="initialTitle">
      <p id="initialDescription">Clube destinado as pessoas que compreendem a verdade e não acreditam na mentira contada pelos governos mundiais</p>
      <Link to="signin" ><button id="initialButtonColored">Começar</button></Link>
    </div>
  );
};
