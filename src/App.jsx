import './App.css'
// import React, { useContext } from "react";
// import { MyContext } from "./components/tokenContext";

import { Form } from './components/form';
import './global.css'

function App() {
  // const token = useContext(MyContext);
  return (
    <>
			<div className="container">
      	<Form/>
				{/* {token.token_origin} */}
			</div>
    </>
  )
}

export default App
