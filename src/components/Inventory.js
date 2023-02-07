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

export default Inventory;
