import Home from "./components/Home";
import About from "./components/About";
import Blogs from "./components/Blogs";
import NotFound from "./components/NotFound";
import AddForm from "./components/AddForm";
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navber from "./components/Navber";
import Detail from "./components/Detail";
import { useState, useEffect } from "react";

function App() {

  const [data, setData] = useState([]);
  const fetchAPI = async () => {
    const response = await fetch("https://stockradars.co/assignment/data.php");
    const jsonData = await response.json();
    setData(jsonData);
  };

  useEffect(() => {
    fetchAPI();
  }, []);
  // console.log(data);

  return (
    <BrowserRouter>
      <Navber />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/blogs" element={<Blogs data={data} />}></Route>
          <Route path="*" element={<NotFound/>}></Route>
          <Route path="/home" element={<Navigate to="/" />}></Route>
          <Route path="/info" element={<Navigate to="/about" />}></Route>
          <Route path="/blog/:id" element={<Detail data={data} />} ></Route>
          <Route path="/form" element={<AddForm/>}></Route>
        </Routes>
    </BrowserRouter>

  );
}

export default App
