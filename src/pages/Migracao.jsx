import React, { useContext } from "react";
import { MyContext } from "../components/tokenContext";

function Migracao() {
	const token = useContext(MyContext);
	return (
		<>
			<div>
				Migracao
			</div>
		</>
	)
}

export default Migracao