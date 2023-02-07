import React from "react";
import { GiWeightLiftingUp } from "react-icons/gi";
import { Link } from "react-router-dom";

export const Fitness = () => {
  return (
    <div id="category">
      <main>
        <h1 className="title">Fitness</h1>
        <div className="cat-cards">
          <div>
            <div className="inventory-card">
              <h3>Shake-Weight</h3>
              <br></br>
              <p>$10</p>
              <br></br>
              <Link to="/categories/fitness">
                <GiWeightLiftingUp id="mini-icon" />
              </Link>
              <hr></hr>
              <br></br>
              <p>it is great, to shake the weight</p>
            </div>
            <button className="btn" id="buy-btn" type="submit">
              Purchase
            </button>
          </div>
          <div>
            <div className="inventory-card">
              <h3>Bench Press</h3>
              <br></br>
              <p>$300</p>
              <br></br>
              <Link to="/categories/fitness">
                <GiWeightLiftingUp id="mini-icon" />
              </Link>
              <hr></hr>
              <br></br>
              <p>lightly used, olympic-style bench</p>
            </div>
            <button className="btn" id="buy-btn" type="submit">
              Purchase
            </button>
          </div>
          <div>
            <div className="inventory-card">
              <h3>Stationary Bike</h3>
              <br></br>
              <p>$200</p>
              <br></br>
              <Link to="/categories/fitness">
                <GiWeightLiftingUp id="mini-icon" />
              </Link>
              <hr></hr>
              <br></br>
              <p>a few years old, max weight 250</p>
            </div>
            <button className="btn" id="buy-btn" type="submit">
              Purchase
            </button>
          </div>
          <div>
            <div className="inventory-card">
              <h3>Dumbbells</h3>
              <br></br>
              <p>$300</p>
              <br></br>
              <Link to="/categories/fitness">
                <GiWeightLiftingUp id="mini-icon" />
              </Link>
              <hr></hr>
              <br></br>
              <p>from 5-50 lb set</p>
            </div>
            <button className="btn" id="buy-btn" type="submit">
              Purchase
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Fitness;
