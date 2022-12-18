import { useState } from "react";
import ButtonAppBar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";

function App() {
  return (
    <div className="App">
      <ButtonAppBar />
      <Content />
    </div>
  );
}

export default App;
