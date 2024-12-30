import profilePic from "./assets/image.png";

function Card() {
  return (
    <div className="card">
      <img
        className="card-image"
        alt="my profile picture"
        src={profilePic}
        style={{ width: "250px", height: "auto" }}
      />
      <h2 className="card-title">Fakhir</h2>
      <p className="card-text">Computer Science student</p>
    </div>
  );
}

export default Card;
