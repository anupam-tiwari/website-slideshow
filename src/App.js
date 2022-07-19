import { useState } from "react";
import Navbar from "./components/Navbar";
import Renderer from "./components/Renderer";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";

function App() {
  const [websiteNum, setWebsiteNum] = useState('')
  return (
   <>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/slideshow' element={<Renderer></Renderer>}></Route>
    </Routes>
   </>
  );
}

export default App;
