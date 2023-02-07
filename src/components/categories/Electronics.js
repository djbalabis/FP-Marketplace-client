import React from "react";
import { GiBoombox } from "react-icons/gi";
import { Link } from "react-router-dom";

export const Electronics = () => {
  return (
    <div id="category">
      <main>
        <h1 className="title">Electronics</h1>
        <div className="cat-cards">
          <div>
            <div className="inventory-card">
              <h3>Sony B-7III</h3>
              <br></br>
              <p>$1000</p>
              <br></br>
              <Link to="/categories/electronics">
                <GiBoombox id="mini-icon" />
              </Link>
              <hr></hr>
              <br></br>
              <p>Like new</p>
            </div>
            <button className="btn" id="buy-btn" type="submit">
              Purchase
            </button>
          </div>
          <div>
            <div className="inventory-card">
              <h3>Playstation 5</h3>
              <br></br>
              <p>$800</p>
              <br></br>
              <Link to="/categories/electronics">
                <GiBoombox id="mini-icon" />
              </Link>
              <hr></hr>
              <br></br>
              <p>microsoft approved</p>
            </div>
            <button className="btn" id="buy-btn" type="submit">
              Purchase
            </button>
          </div>
          <div>
            <div className="inventory-card">
              <h3>Xbox Series S</h3>
              <br></br>
              <p>$700</p>
              <br></br>
              <Link to="/categories/electronics">
                <GiBoombox id="mini-icon" />
              </Link>
              <hr></hr>
              <br></br>
              <p>factory-sealed, includes Halo Infinite</p>
            </div>
            <button className="btn" id="buy-btn" type="submit">
              Purchase
            </button>
          </div>
          <div>
            <div className="inventory-card">
              <h3>iPhone 11</h3>
              <br></br>
              <p>$900</p>
              <br></br>
              <Link to="/categories/electronics">
                <GiBoombox id="mini-icon" />
              </Link>
              <hr></hr>
              <br></br>
              <p>lightly used, no damage</p>
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

export default Electronics;
