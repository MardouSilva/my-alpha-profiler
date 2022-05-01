import "./styles.css";

export const SignUp = () => {
  return (
    <section id="signupScreen">
      <div id="signupContainer">
        <h1>Cadastrar</h1>
        <input type="text" placeholder="Usuário" />
        <input type="password" placeholder="Senha" />
        <input type="email" placeholder="E-mail" />
        <input type="date" placeholder="Data de Nascimento" />
        <button id="signupButtonColored">Cadastrar</button>
      </div>
    </section>
  );
};
