import './App.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Migracao from './pages/Migracao';

function App() {
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
