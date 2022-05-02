import "./styles.css";

export const SignIn = () => {
  async function signIn() {
    const user = document.getElementById("user_input_signin").value;
    const password = document.getElementById("password_input_signin").value;

    const message = JSON.stringify({ user, password });

    const response = await fetch("http://localhost:2000/user_validate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: message,
    });

    const responseJson = await response.json();
    console.log(responseJson);
  }

  return (
    <section id="signinScreen">
      <div id="signinContainer">
        <h1>Logar</h1>
        <input id="user_input_signin" type="text" placeholder="Usuário" />
        <input id="password_input_signin" type="password" placeholder="Senha" />
        <button id="signinButtonColored" onClick={signIn}>
          Logar
        </button>
      </div>
    </section>
  );
};
