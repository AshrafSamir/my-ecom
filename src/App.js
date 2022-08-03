import { useEffect, useState } from "react";
import "./App.css";
import Logo from "./components/logo/Logo";
import Card from "./components/card/Card";

function App() {
  const [hideLogo, setHideLogo] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setHideLogo(true);
    }, 0);
  }, []);
  return (
    <div className="App">
      {!hideLogo ? (
        <Logo />
      ) : (
        <div className="card-container">
          <Card />
          <Card />
          <Card />
        </div>
      )}
    </div>
  );
}

export default App;
