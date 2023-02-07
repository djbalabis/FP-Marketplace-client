import React from "react";
import { GoTools } from "react-icons/go";
import { Link } from "react-router-dom";

export const Tools = () => {
  return (
    <div id="category">
      <main>
        <h1 className="title">Tools</h1>
        <div className="cat-cards">
        <div>
              <div className="inventory-card">
                <h3>Mjolnir</h3>
                <br></br>
                <p>$5</p>
                <br></br>
                <Link to="/categories/tools">
                  <GoTools id="mini-icon" />
                </Link>
                <hr></hr>
                <br></br>
                <p>Are you worthy?</p>
              </div>
              <button className="btn" id="buy-btn" type="submit">
                Purchase
              </button>
            </div>
            <div>
              <div className="inventory-card">
                <h3>Table-Saw</h3>
                <br></br>
                <p>$100</p>
                <br></br>
                <Link to="/categories/tools">
                  <GoTools id="mini-icon" />
                </Link>
                <hr></hr>
                <br></br>
                <p>brand new, watch your fingers</p>
              </div>
              <button className="btn" id="buy-btn" type="submit">
                Purchase
              </button>
            </div>
            <div>
              <div className="inventory-card">
                <h3>Cordless Drill</h3>
                <br></br>
                <p>$50</p>
                <br></br>
                <Link to="/categories/tools">
                  <GoTools id="mini-icon" />
                </Link>
                <hr></hr>
                <br></br>
                <p>only a few years old, works like new!</p>
              </div>
              <button className="btn" id="buy-btn" type="submit">
                Purchase
              </button>
            </div>
            <div>
              <div className="inventory-card">
                <h3>Orbital Sander</h3>
                <br></br>
                <p>$90</p>
                <br></br>
                <Link to="/categories/tools">
                  <GoTools id="mini-icon" />
                </Link>
                <hr></hr>
                <br></br>
                <p>lightly used, comes with extra sanding paper</p>
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

export default Tools;