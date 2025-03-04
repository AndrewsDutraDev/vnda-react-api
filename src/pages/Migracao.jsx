import React, { useContext } from "react";
import { MyContext } from "../components/tokenContext";

import { BannerAPI } from "../components/bannerApi";

function Migracao() {
	const token = useContext(MyContext);
	return (
		<>
			<div>
				<BannerAPI token={token}/>
			</div>
		</>
	)
}

export default Migracao