import React, { useEffect } from "react";
import { useState } from 'react';
import {Routes, Route} from 'react-router-dom';
import { UidContext } from "./components/AppContext";
import Home from './pages/Home';
import Profil from './pages/Profil';
import axios from "axios";

function App() {
  const [uid, setUid] = useState(null)

  useEffect(()=>{
    const fetchUid = async() =>{
    await axios ({
      method : "get",
      url: `${process.env.REACT_APP_API_URL}/jwtid`,
      withCredentials: true,
    })
    .then((res) => setUid(res.data))
    .catch((err) => console.log("No token!"));
  };
  fetchUid();
  },[uid]);

  return (
    <>
      <UidContext.Provider value={uid}>
      <Routes>
        <Route path='/' element = {<Profil />} />
        <Route path='/home' element = {<Home />} />
      </Routes>
      </UidContext.Provider>
    </>
  );
}
export default App;