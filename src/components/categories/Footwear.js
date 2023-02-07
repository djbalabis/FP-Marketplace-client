import React from "react";
import { GiConverseShoe } from "react-icons/gi";
import { Link } from "react-router-dom";

export const Footwear = () => {
  return (
    <div id="category">
      <main>
        <h1 className="title">Footwear</h1>
        <div className="cat-cards">
          <div>
            <div className="inventory-card">
              <h3>Yeezys</h3>
              <br></br>
              <p>$300</p>
              <br></br>
              <Link to="/categories/footwear">
                <GiConverseShoe id="mini-icon" />
              </Link>
              <hr></hr>
              <br></br>
              <p>definitely not a fake off brand</p>
            </div>
            <button className="btn" id="buy-btn" type="submit">
              Purchase
            </button>
          </div>
          <div>
            <div className="inventory-card">
              <h3>Penny Loafers</h3>
              <br></br>
              <p>$50</p>
              <br></br>
              <Link to="/categories/footwear">
                <GiConverseShoe id="mini-icon" />
              </Link>
              <hr></hr>
              <br></br>
              <p>they were my fathers</p>
            </div>
            <button className="btn" id="buy-btn" type="submit">
              Purchase
            </button>
          </div>
          <div>
            <div className="inventory-card">
              <h3>Nike Air Maxs</h3>
              <br></br>
              <p>$900</p>
              <br></br>
              <Link to="/categories/footwear">
                <GiConverseShoe id="mini-icon" />
              </Link>
              <hr></hr>
              <br></br>
              <p>i never wear these anymore, reasonable price</p>
            </div>
            <button className="btn" id="buy-btn" type="submit">
              Purchase
            </button>
          </div>
          <div>
            <div className="inventory-card">
              <h3>Jordan 3s</h3>
              <br></br>
              <p>$700</p>
              <br></br>
              <Link to="/categories/footwear">
                <GiConverseShoe id="mini-icon" />
              </Link>
              <hr></hr>
              <br></br>
              <p>authentic, never worn</p>
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

export default Footwear;
