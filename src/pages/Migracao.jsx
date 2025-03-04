import React, { useContext } from "react";
import { MyContext } from "../components/tokenContext";

function Migracao() {
	const token = useContext(MyContext);
	return (
		<>
			<div className="container">
				Migracao
			</div>
		</>
	)
}

export default Migracao