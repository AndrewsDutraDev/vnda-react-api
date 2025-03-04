import React, { createContext, useState, useEffect } from "react";

export const MyContext = createContext();

export const TokenContext = ({ children }) => {
  // const [api_url_stg, setApiUrlStg] = useState('');

	const [token_origin, setTokenOrigin] = useState(() =>{
		const savedData = localStorage.getItem('token_origin');
    return savedData ? JSON.parse(savedData) : '';
	});

	const [store_origin, setStoreOrigin] = useState(() =>{
		const savedData = localStorage.getItem('store_origin');
    return savedData ? JSON.parse(savedData) : '';
	});

	const [token_target, setTokenTarget] = useState(() =>{
		const savedData = localStorage.getItem('token_target');
    return savedData ? JSON.parse(savedData) : '';
	});

	const [store_target, setStoreTarget] = useState(() =>{
		const savedData = localStorage.getItem('store_target');
    return savedData ? JSON.parse(savedData) : '';
	});

	useEffect(() => {
		window.localStorage.setItem('token_origin', JSON.stringify(token_origin));
	}, [token_origin]);

	useEffect(() => {
		window.localStorage.setItem('store_origin', JSON.stringify(store_origin));
	}, [store_origin]);

	useEffect(() => {
		window.localStorage.setItem('token_target', JSON.stringify(token_target));
	}, [token_target]);

	useEffect(() => {
		window.localStorage.setItem('store_target', JSON.stringify(store_target));
	}, [store_target]);

  return (
    <MyContext.Provider
      value={{
        token_origin,
        setTokenOrigin,
        store_origin,
        setStoreOrigin,
        token_target,
        setTokenTarget,
        store_target,
        setStoreTarget
      }}
    >
      {children}
    </MyContext.Provider>
  );
};