import React from "react";
import { MdOutlineChair } from "react-icons/md";
import { Link } from "react-router-dom";

export const Furniture = () => {
  return (
    <div id="category">
      <main>
        <h1 className="title">Furniture</h1>
        <div className="cat-cards">
        <div>
              <div className="inventory-card">
                <h3>Gaming Chair</h3>
                <br></br>
                <p>$100</p>
                <br></br>
                <Link to="/categories/furniture">
                  <MdOutlineChair id="mini-icon" />
                </Link>
                <hr></hr>
                <br></br>
                <p>brand new, hardly used</p>
              </div>
              <button className="btn" id="buy-btn" type="submit">
                Purchase
              </button>
            </div>
            <div>
              <div className="inventory-card">
                <h3>Leather Sofa</h3>
                <br></br>
                <p>$200</p>
                <br></br>
                <Link to="/categories/furniture">
                  <MdOutlineChair id="mini-icon" />
                </Link>
                <hr></hr>
                <br></br>
                <p>5 years old, just recently bought another</p>
              </div>
              <button className="btn" id="buy-btn" type="submit">
                Purchase
              </button>
            </div>
            <div>
              <div className="inventory-card">
                <h3>Kitchen Stools</h3>
                <br></br>
                <p>$50</p>
                <br></br>
                <Link to="/categories/furniture">
                  <MdOutlineChair id="mini-icon" />
                </Link>
                <hr></hr>
                <br></br>
                <p>great for islands</p>
              </div>
              <button className="btn" id="buy-btn" type="submit">
                Purchase
              </button>
            </div>
            <div>
              <div className="inventory-card">
                <h3>King Bed</h3>
                <br></br>
                <p>$500</p>
                <br></br>
                <Link to="/categories/furniture">
                  <MdOutlineChair id="mini-icon" />
                </Link>
                <hr></hr>
                <br></br>
                <p>normal ware & tear</p>
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

export default Furniture;