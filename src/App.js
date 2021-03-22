import Navigation from "./component/Navigation";
import Home from "./pages/Home";
import History from "./pages/History";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <History />
    </div>
  );
}

export default App;
