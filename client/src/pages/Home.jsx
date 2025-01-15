import React from 'react'
import Hero from "../components/Hero.jsx";
import Navbar from "../common/Navbar.jsx";
import Client from "../components/Client.jsx";
import Jobs from "./seeker/Jobs.jsx";

function Home() {
  return <>
  
    <Hero/>
    <Client/>
    <Jobs />
  </>
}

export default Home