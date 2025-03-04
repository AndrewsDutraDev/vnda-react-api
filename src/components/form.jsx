import styles from './Form.module.css';

import React, { useContext } from "react";
import { MyContext } from "./tokenContext";

export function Form(){
	const token = useContext(MyContext);
  return(
		<>
			<div className={styles.form}>
				<form method="POST">
					<fieldset>
						<label htmlFor="token_origin">
							TOKEN DA LOJA DE ORIGEM
						</label>
						<input type="text" id="token_origin" onChange={(event) => token.setTokenOrigin(event.target.value)} value={token.token_origin}/>						
					</fieldset>

          <fieldset>
						<label htmlFor="store_origin">
							URL DA LOJA DE ORIGEM
						</label>
						<input type="text" id="store_origin" onChange={(event) => token.setStoreOrigin(event.target.value)} value={token.store_origin}/>
					</fieldset>

					<fieldset>
						<label htmlFor="token_target">
							TOKEN DA LOJA ALVO
						</label>
						<input type="text" id="token_target" onChange={(event) => token.setTokenTarget(event.target.value)} value={token.token_target}/>
					</fieldset>

					<fieldset>
						<label htmlFor="store_target">
							URL DA LOJA ALVO
						</label>
						<input type="text" id="store_target" onChange={(event) => token.setStoreTarget(event.target.value)} value={token.store_target}/>
					</fieldset>
					<a href="migracao" className="button-default">Salvar</a>
				</form>
			</div>
		</>
	)
}