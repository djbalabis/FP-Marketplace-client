import logo from "./logo.svg";
import "./App.css";
import { Home } from "./Home";
// const client = new ApolloClient({
//   uri: "https://whatever-marketplace-server.herokuapp.com/",
//   cache: new InMemoryCache(),
// });

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
