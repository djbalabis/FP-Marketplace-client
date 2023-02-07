import React from "react";
import { BiMoney } from "react-icons/bi";
import { Link } from "react-router-dom";

export const Free = () => {
  return (
    <div id="category">
      <main>
        <h1 className="title">Free</h1>
        <div className="cat-cards">
        <div>
              <div className="inventory-card">
                <h3>Mini Fridge</h3>
                <br></br>
                <p>$0</p>
                <br></br>
                <Link to="/categories/free">
                  <BiMoney id="mini-icon" />
                </Link>
                <hr></hr>
                <br></br>
                <p>just got a bigger one, pickup only</p>
              </div>
              <button className="btn" id="buy-btn" type="submit">
                Purchase
              </button>
            </div>
            <div>
              <div className="inventory-card">
                <h3>Freezer</h3>
                <br></br>
                <p>$0</p>
                <br></br>
                <Link to="/categories/free">
                  <BiMoney id="mini-icon" />
                </Link>
                <hr></hr>
                <br></br>
                <p>is cold, most of the time...</p>
              </div>
              <button className="btn" id="buy-btn" type="submit">
                Purchase
              </button>
            </div>
            <div>
              <div className="inventory-card">
                <h3>Firewood</h3>
                <br></br>
                <p>$0</p>
                <br></br>
                <Link to="/categories/free">
                  <BiMoney id="mini-icon" />
                </Link>
                <hr></hr>
                <br></br>
                <p>literally cannot give this away, there is too much of it</p>
              </div>
              <button className="btn" id="buy-btn" type="submit">
                Purchase
              </button>
            </div>
            <div>
              <div className="inventory-card">
                <h3>Litter Box</h3>
                <br></br>
                <p>$0</p>
                <br></br>
                <Link to="/categories/free">
                  <BiMoney id="mini-icon" />
                </Link>
                <hr></hr>
                <br></br>
                <p>only used for 5 years, like new</p>
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

export default Free;