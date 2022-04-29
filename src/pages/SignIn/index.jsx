import "./styles.css"

export const SignIn = () => {
  return (
    <section id="signinScreen">
      <div id="signinContainer">
        <h1>Logar</h1>
        <input type="text" placeholder="Usuário" />
        <input type="password" placeholder="Senha" />
        <button id="signinButtonColored">Logar</button>
      </div>
    </section>
  ) 
};