import React from "react";
import { Link } from "react-router-dom";
import MP3dark from "../assets/MP3-dark.png";
import Search from "../assets/search-glass.png";

export const NavBar = () => {
  return (
    <div className="navbar">
      <div>
        <Link to="/"><img src={MP3dark} alt="Logo" className="logo" /></Link>
      </div>
      <div class="search-container">
      <form action="/" method="GET" className="form">
        <input type="search" placeholder="Search" className="search-field" />
        <button type="submit" className="search-button">
          <img src={Search} alt="searching-glass" />
        </button>
      </form>
    </div>
      <div className="nav-links">
        <Link className="links" to="/">
          Home
        </Link>
        <Link className="links" to="/categories">
          Categories
        </Link>
        <Link className="links" to="/inventory">
          Inventory
        </Link>
        <Link className="links" to="/login">
          Sign in
        </Link>
        {/* <Link className="links" to="/signup">
          Sign up
        </Link> */}
      </div>
      {/* <div className="toggleButton">
        <button></button>
      </div> */}
    </div>
  );
};

// export const NavBar = () => {
//       return (
//           <div id="navbar">
//             <head>
//             <title> Marketplace </title>
//             <link rel="stylesheet" href="" />
//             <meta />
//         </head>

//         <nav>
//             <ul>
//                 <li> <a href="/">Home</a> </li>
//                 <li> <a href="/Login">Login</a></li>
//                 <li> <a href="/Categories">Categories</a> </li>
//                 <li> <a href="/Inventory">Inventory</a> </li>
//                 <li> <a href="/Logout">Log Out</a> </li>
//             </ul>
//         </nav>
//       </div>
//     )
//   };

export default NavBar;

//TODO future development

// function NavBar(props)  {
//   return (
//     <header>
//       <nav>
//         <ul className="flex-row" style={{ justifyContent: "flex-end" }}>
//           {props.categories.map((category) => {
//             return (
//               <li key={category.name}>
//                 <a
//                   href={"#" + category.name.toLowerCase()}
//                   onClick={() => {
//                     props.setPage(category.name);
//                   }}
//                   className={`mx-1 ${
//                     props.page === category.name && "navActive"
//                   }`}
//                 >
//                   {category.name}
//                 </a>
//               </li>
//             );
//           })}
//         </ul>
//       </nav>
//     </header>
//   );
// }
