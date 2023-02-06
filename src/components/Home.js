import MP3light from "../assets/MP3-light.png";

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
        <img src={MP3light} alt="Logo" className="home-logo" />
        <h3 className="home-text">Buy, Sell and Trade!</h3>
      </main>
    </div>
  );
};

export default Home;
