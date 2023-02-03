import React from 'react';

export const NavBar = () => {
    return (
      <div id="navbar">
        <head>
            <title> Marketplace </title>
            <link rel="stylesheet" href="" />
            <meta />
        </head>

        <nav>
            <ul>
                <li> <a href="/">Home</a> </li>
                <li> <a href="/Login">Login</a></li>
                <li> <a href="/Categories">Categories</a> </li>
                <li> <a href="/Inventory">Inventory</a> </li>
                <li> <a href="/Logout">Log Out</a> </li>
            </ul>
        </nav>
      </div>
    )
  };

  export default NavBar;
  