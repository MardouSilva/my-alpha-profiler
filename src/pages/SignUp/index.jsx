import "./styles.css";

export const SignUp = () => {
  async function signUp() {
    const user = document.getElementById("user_input").value;
    const password = document.getElementById("password_input").value;
    const birthday = document.getElementById("birthday_input").value;
    const email = document.getElementById("email_input").value;

    const message = JSON.stringify({ user, password, birthday, email });

    const response = await fetch("http://localhost:2000/user_insert", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: message,
    });

    const responseJson = await response.json();
    console.log(responseJson);
  }

  return (
    <section id="signupScreen">
      <div id="signupContainer">
        <h1>Cadastrar</h1>
        <input id="user_input" type="text" placeholder="Usuário" />
        <input id="password_input" type="password" placeholder="Senha" />
        <input id="email_input" type="email" placeholder="E-mail" />
        <input id="birthday_input" type="date" placeholder="Data de Nascimento" />
        <button id="signupButtonColored" onClick={signUp}>
          Cadastrar
        </button>
      </div>
    </section>
  );
};
