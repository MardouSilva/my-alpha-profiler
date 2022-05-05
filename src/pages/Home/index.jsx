import { useEffect, useState } from "react";
import "./styles.css";

export const Home = () => {
  const [userInfo, setUserInfo] = useState({});

  async function getUserInfo() {
    const token = document.cookie.split("=")[1];
    const response = await fetch(`http://localhost:3333/view?token=${token}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    const responseJson = await response.json();
    console.log(responseJson);
    setUserInfo(responseJson);
    console.log(userInfo);
  }
  
  const getAge = () => {
    const now = new Date(); // Data de hoje
    const past = new Date(userInfo.birth_date); // Outra data no passado
    const diff = Math.abs(now.getTime() - past.getTime()); // Subtrai uma data pela outra
    return Math.ceil(diff / (1000 * 60 * 60 * 24 * 30 * 12));
  }
  useEffect(()=>{
    getUserInfo();
  })

  return (
    <section id="homeScreen">
      <div id="infoContainer">
        <div id="blueCardsContainer">
          <div class="blueCards">
            <p class="cardTitle">Nome</p>
            <p class="blueCardTextContent">{userInfo.username}</p>
          </div>
          <div class="blueCards">
            <p class="cardTitle">Idade</p>
            <p class="blueCardTextContent">{getAge()}</p>
          </div>
        </div>
        <div id="violetCardsContainer">
          <div class="violetCards">
            <p class="cardTitle">Nascimento</p>
            <p class="violetCardTextContent">{userInfo.birth_date}</p>
          </div>
          <div class="violetCards">
            <p class="cardTitle">Email</p>
            <p class="violetCardTextContent">{userInfo.email}</p>
          </div>
        </div>
        <img class="imageUser" src="https://i.pinimg.com/564x/8b/da/ca/8bdaca81d5ddbaeb92b61d6b5787d866.jpg" alt="UserPerfil"></img>
      </div>
    </section>
  );
};
