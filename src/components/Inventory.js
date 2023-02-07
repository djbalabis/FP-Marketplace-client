import React from "react";
import { BiMoney } from "react-icons/bi";
import { GoTools } from "react-icons/go";
import { MdSportsEsports } from "react-icons/md";
import {
  GiConverseShoe,
  GiWeightLiftingUp,
  GiBoombox,
  GiLargePaintBrush,
} from "react-icons/gi";
import { MdOutlineChair } from "react-icons/md";
import { Link } from "react-router-dom";

export const Inventory = () => {
  return (
    <div id="category">
      <main>
        {/* <h1 className="title">Inventory</h1> */}
        <div className="cat-cards">
            <div>
              <div className="inventory-card">
                <h3>Sony B-7III</h3>
                <br></br>
                <p>$1000</p>
                <br></br>
                <Link to="/categories/electronics">
                  <GiBoombox id="mini-icon"/>
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
                  <GiBoombox id="mini-icon"/>
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
                  <GiBoombox id="mini-icon"/>
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
                  <GiBoombox id="mini-icon"/>
                </Link>
                <hr></hr>
                <br></br>
                <p>lightly used, no damage</p>
              </div>
              <button className="btn" id="buy-btn" type="submit">
                Purchase
              </button>
            </div>
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

export default Inventory;
