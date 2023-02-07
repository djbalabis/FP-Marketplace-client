import React from "react";
import { MdSportsEsports } from "react-icons/md";
import { Link } from "react-router-dom";

export const Recreation = () => {
  return (
    <div id="category">
      <main>
        <h1 className="title">Recreation</h1>
        <div className="cat-cards">
        <div>
              <div className="inventory-card">
                <h3>BMX Bike</h3>
                <br></br>
                <p>$50</p>
                <br></br>
                <Link to="/categories/recreation">
                  <MdSportsEsports id="mini-icon" />
                </Link>
                <hr></hr>
                <br></br>
                <p>i have recently upgraded to a car</p>
              </div>
              <button className="btn" id="buy-btn" type="submit">
                Purchase
              </button>
            </div>
            <div>
              <div className="inventory-card">
                <h3>Unicycle</h3>
                <br></br>
                <p>$30</p>
                <br></br>
                <Link to="/categories/recreation">
                  <MdSportsEsports id="mini-icon" />
                </Link>
                <hr></hr>
                <br></br>
                <p>its like a bike but with one wheel, i think</p>
              </div>
              <button className="btn" id="buy-btn" type="submit">
                Purchase
              </button>
            </div>
            <div>
              <div className="inventory-card">
                <h3>Golf Clubs</h3>
                <br></br>
                <p>$100</p>
                <br></br>
                <Link to="/categories/recreation">
                  <MdSportsEsports id="mini-icon" />
                </Link>
                <hr></hr>
                <br></br>
                <p>they were a gift, and i wasn't very good</p>
              </div>
              <button className="btn" id="buy-btn" type="submit">
                Purchase
              </button>
            </div>
            <div>
              <div className="inventory-card">
                <h3>Kayak</h3>
                <br></br>
                <p>$250</p>
                <br></br>
                <Link to="/categories/recreation">
                  <MdSportsEsports id="mini-icon" />
                </Link>
                <hr></hr>
                <br></br>
                <p>like new, two seater, no leaks</p>
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

export default Recreation;