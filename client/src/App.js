import React from "react";
import Header from "../src/components/Header-Welcome";
import StickyFooter from "../src/components/Footer";
import Welcome from "./pages/Welcome";





function App() {
  
  return <div>
    <Header />
    
    <Welcome />
    
    <StickyFooter />
  </div>;
}

export default App;
