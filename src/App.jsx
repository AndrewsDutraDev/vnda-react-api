import './App.css'
// import React, { useContext } from "react";
// import { MyContext } from "./components/tokenContext";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Migracao from './pages/Migracao';

import './global.css'

function App() {
  // const token = useContext(MyContext);
  return (
    <>
			<Router>
				<div>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/migracao" element={<Migracao />} />
					</Routes>
				</div>
			</Router>
    </>
  )
}

export default App
