import { useState } from "react";
import "./App.css";
import { Button } from "antd";
import SiteLayout from "./component/Layout";
import { Routes, Route, Outlet, Link } from "react-router-dom";
function App() {
  const [count, setCount] = useState(0);

  return (
    <SiteLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </SiteLayout>
  );
}

function Home() {
  return <div>Home</div>;
}

function Post() {
  return <div>Post</div>;
}

export default App;
