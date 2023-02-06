import MP3dark from "../assets/MP3-dark.png";

// import { BiMoney } from "react-icons/bi";
// import { GoTools } from "react-icons/go";
// import { MdSportsEsports } from "react-icons/md";
// import { GiConverseShoe, GiWeightLiftingUp, GiBoombox } from "react-icons/gi";
// import { MdOutlineChair } from "react-icons/md";

export const Home = () => {
  return (
    <div id="home">
      <main>
        {/* <h1 className="title">Home</h1> */}
        <img src={MP3dark} alt="Logo" className="home-logo" />
        <h3 className="home-text">Buy, Sell, & Trade</h3>
      </main>
    </div>
  );
};

export default Home;
