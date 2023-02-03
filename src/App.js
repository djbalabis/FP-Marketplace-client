import "./App.css";
import { Home } from "./components/Home";
import { NavBar } from "./components/NavBar";
import { SignUp } from "./components/SignUp";
import { Login } from "./components/Login";
import { Categories } from "./components/Categories";
import { Inventory } from "./components/Inventory";
import React, {useState, setState} from 'react';
// const client = new ApolloClient({
//   uri: "https://whatever-marketplace-server.herokuapp.com/",
//   cache: new InMemoryCache(),
// });

function App() {
    const [page, setPage] = useState("Home");

    const [categories] = useState([
      {name: "Home"},
      {name: "Inventory"},
      {name: "Login"},
      {name: "SignUp"},
      {name: "Categories"},
    ]);

    const currentPage = () => {
      switch (page) {
        case "Inventory":
        return <Inventory />;
        case "Categories": 
        return <Categories />;
        case "Login":
        return <Login />;
        case "Signup":
        return <SignUp />;
        // case "NavBar":
        // return <NavBar />;
        default: 
        return <Home />;
        
      }
    };
    return (
    <div className="App">
      <NavBar />
    
    
      <div categories = {categories} page = {page} setPage = {setPage}>{currentPage(page)}</div>
      
     
    </div>
  );
}



export default App;
