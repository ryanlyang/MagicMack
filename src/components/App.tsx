import { useEffect, useState } from "react";
// import type { Schema } from "../../amplify/data/resource";
// import { generateClient } from "aws-amplify/data";
import Header from "./Header";
import "../styles/index.css"
import { Outlet } from "react-router-dom";



function App() {


  return (
    <div className="all_container">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
