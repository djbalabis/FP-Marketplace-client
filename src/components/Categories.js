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

export const Categories = () => {
  return (
    <div id="category">
      <main>
        <div id="categoryCard">
          {/* <h1 className="title">Categories</h1> */}
          <div className="cat-cards">
            <div className="category-card">
              <h3>Free</h3>
              <Link to="/categories/free">
                <BiMoney className="icon" />
              </Link>
            </div>
            <div className="category-card">
              <h3>Tools</h3>
              <Link to="/categories/tools">
                <GoTools className="icon" />
              </Link>
            </div>
            <div className="category-card">
              <h3>Recreation</h3>
              <Link to="/categories/recreation">
                <MdSportsEsports className="icon" />
              </Link>
            </div>
            <div className="category-card">
              <h3>Footwear</h3>
              <Link to="/categories/footwear">
                <GiConverseShoe className="icon" />
              </Link>
            </div>
            <div className="category-card">
              <h3>Furniture</h3>
              <Link to="/categories/furniture">
                <MdOutlineChair className="icon" />
              </Link>
            </div>
            <div className="category-card">
              <h3>Fitness</h3>
              <Link to="/categories/fitness">
                <GiWeightLiftingUp className="icon" />
              </Link>
            </div>
            <div className="category-card">
              <h3>Electronics</h3>
              <Link to="/categories/electronics">
                <GiBoombox className="icon" />
              </Link>
            </div>
            <div className="category-card">
              <h3>Services</h3>
              <Link to="/categories/services">
                <GiLargePaintBrush className="icon" />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Categories;
