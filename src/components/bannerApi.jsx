import axios from "axios";

import styles from './FormAPI.module.css';

export function BannerAPI(props){

	// const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  const getBanners = async () => {
    // setLoading(true); // Inicia o carregamento
    // setError(null); // Reseta o erro, caso haja

		const headers = {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${props.token.token_origin}`,
			'X-Shop-Host': `${props.token.store_origin}`
		}
	
		try {
			const response = await axios.get('https://api.sandbox.vnda.com.br/api/v2/banners', { headers });
	
			const banners = response.data;
			console.log('Dados recebidos com sucesso', banners);
			return banners;
	
		} catch (error) {
			console.log('Error: ' + error)
			const errorMessage = `Erro ao buscar os banners: ${error.response ? JSON.stringify(error.response.data) : error.message}`;
			console.log(errorMessage);
		}
    
  };

	return (
		<>
			{/* Banner API PROPS {props.token.token_origin} */}
			<div className={styles.formApi}>
				<h2>Migrar banners</h2>
				<p>
					Loja origem: {props.token.store_origin}
				</p>

				<p>
					Loja destino: {props.token.store_target}
				</p>

				<button type="button" className="button-default" onClick={getBanners}>
					Migrar banners
				</button>
			</div>
		</>
	)
}