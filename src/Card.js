import FamImage from "./components/FamImage";
import Footer from "./components/Footer";
import Main from "./components/Main";
import "./Card.css";
function Card() {
  return (
    <div className="card">
      <FamImage />
      <Main />
      <Footer />
    </div>
  );
}

export default Card;
