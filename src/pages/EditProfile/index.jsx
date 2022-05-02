import "./styles.css"

export const Profile = () => {
  return (
    <div id="profileTitle">
      <div id="profileTitle-internal">
        <input type='text' id="photo-edite" />
        <input type="text" className="input-edite" />
        <input type='password' className="input-edite" />
        <input type="email" className="input-edite" />
        <input type="date" className="input-edite" />
        <button id="editProfileButtonColored">Atualizar</button>
      </div>
    </div>
  )  
};
