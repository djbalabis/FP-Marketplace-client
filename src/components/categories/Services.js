import React from "react";
import {
  GiLargePaintBrush,
} from "react-icons/gi";
import { Link } from "react-router-dom";

export const Services = () => {
  return (
    <div id="category">
      <main>
        <h1 className="title">Services</h1>
        <div className="cat-cards">
        <div>
              <div className="inventory-card">
                <h3>Web Developer</h3>
                <br></br>
                <p>$500</p>
                <br></br>
                <Link to="/categories/services">
                  <GiLargePaintBrush id="mini-icon" />
                </Link>
                <hr></hr>
                <br></br>
                <p>full-stack website, please message me for more info</p>
              </div>
              <button className="btn" id="buy-btn" type="submit">
                Purchase
              </button>
            </div>
            <div>
              <div className="inventory-card">
                <h3>Barber</h3>
                <br></br>
                <p>$50</p>
                <br></br>
                <Link to="/categories/services">
                  <GiLargePaintBrush id="mini-icon" />
                </Link>
                <hr></hr>
                <br></br>
                <p>15 years experience, hit me up for a consultation</p>
              </div>
              <button className="btn" id="buy-btn" type="submit">
                Purchase
              </button>
            </div>
            <div>
              <div className="inventory-card">
                <h3>Landscaper</h3>
                <br></br>
                <p>$100</p>
                <br></br>
                <Link to="/categories/services">
                  <GiLargePaintBrush id="mini-icon" />
                </Link>
                <hr></hr>
                <br></br>
                <p>full service, please call one week in advance</p>
              </div>
              <button className="btn" id="buy-btn" type="submit">
                Purchase
              </button>
            </div>
            <div>
              <div className="inventory-card">
                <h3>Guitar Lessons</h3>
                <br></br>
                <p>$200</p>
                <br></br>
                <Link to="/categories/services">
                  <GiLargePaintBrush id="mini-icon" />
                </Link>
                <hr></hr>
                <br></br>
                <p>10 years experience, i can teach anyone. Beginner to Advanced Lessons</p>
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

export default Services;