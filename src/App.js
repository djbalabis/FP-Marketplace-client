import "./App.css";
import { Home } from "./components/Home";
import { NavBar } from "./components/NavBar";
import { SignUp } from "./components/SignUp";
import { Login } from "./components/Login";
// const client = new ApolloClient({
//   uri: "https://whatever-marketplace-server.herokuapp.com/",
//   cache: new InMemoryCache(),
// });

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <SignUp />
      <Login />
    </div>
  );
}

export default App;
