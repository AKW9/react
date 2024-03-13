// Backend API endpoint: https://matcha-and-keyboard-f549965e60e7.herokuapp.com/api/v1/cafes
import './App.css';
import React from 'react';
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
// import Searchbar from "./components/Searchbar/Searchbar";
import CafeList from "./components/CafeList/CafeList";

export default function App() {
  const [cafes, setCafes] = React.useState([]);
  const [keyword, setKeyword] = React.useState("");

  React.useEffect(() => {
    const url = "https://matcha-and-keyboard-f549965e60e7.herokuapp.com/api/v1/cafes";
    const params = (keyword !== "") ? `?title=${keyword}` : "";
    fetch(url + params)
      .then(response => response.json())
      .then((data) => {
        setCafes(data);
      });
  }, [keyword]);

  return (
    <div className='app-frame'>
      <Navbar setKeyword={setKeyword}/>
      <div className="app-body">
        {/* <Searchbar /> */}
        <Sidebar setCafes={setCafes} />
        <CafeList cafes={cafes}/>
      </div>
    </div>
  );
}
