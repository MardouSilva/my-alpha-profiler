import "./styles.css"

export const Home = () => {
  return (
    <section id="homeScreen">
      <div id="infoContainer">
        <div id="blueCardsContainer">
          <div class="blueCards">
            <p class="cardTitle">Nome</p>
            <p class="blueCardTextContent">Tiago</p>
          </div>
          <div class="blueCards">
            <p class="cardTitle">Sobrenome</p>
            <p class="blueCardTextContent">Santos</p>
          </div>
          <div class="blueCards">
            <p class="cardTitle">Idade</p>
            <p class="blueCardTextContent">21 anos</p>
          </div>
        </div>
        <div id="violetCardsContainer">
        <div class="violetCards">
            <p class="cardTitle">Nascimento</p>
            <p class="violetCardTextContent">23/02/2001</p>
          </div>
          <div class="violetCards">
            <p class="cardTitle">Email</p>
            <p class="violetCardTextContent">tiagooogomes@gmail.com</p>
          </div>
        </div>
        <img class="imageUser" src="https://i.pinimg.com/564x/8b/da/ca/8bdaca81d5ddbaeb92b61d6b5787d866.jpg" alt="UserPerfil"></img>
      </div>
      
    </section>
    )
};
