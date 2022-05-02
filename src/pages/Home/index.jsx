import "./styles.css"

export const Home = () => {
  return (
    <section id="homeScreen">
      <div id="infoContainer">
        <div id="blueCardsContainer">
          <div class="blueCards">
            <p class="cardTitle">Nome</p>
          </div>
          <div class="blueCards">
            <p class="cardTitle">Sobrenome</p>
          </div>
          <div class="blueCards">
            <p class="cardTitle">Idade</p>
          </div>
        </div>
        <div id="violetCardsContainer">
        <div class="violetCards">
            <p class="cardTitle">Idade</p>
          </div>
          <div class="violetCards">
            <p class="cardTitle">Idade</p>
          </div>
        </div>
        <img class="imageUser" src="https://i.pinimg.com/564x/8b/da/ca/8bdaca81d5ddbaeb92b61d6b5787d866.jpg" alt="UserPerfil"></img>
      </div>
      
    </section>
    )
};
