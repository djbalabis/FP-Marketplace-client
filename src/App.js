import logo from "./logo.svg";
import "./App.css";
import { Home } from "./components/Home";
import { NavBar } from "./components/NavBar";
// const client = new ApolloClient({
//   uri: "https://whatever-marketplace-server.herokuapp.com/",
//   cache: new InMemoryCache(),
// });

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
