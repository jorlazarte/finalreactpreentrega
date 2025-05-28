import React from 'react'

import { useAuth } from '../context/AuthContext';

const Login = () => {

	const { logout, login, setUser, loading } = useAuth()
	
	return (
			<>
				<div className="log_cont">
					<div className="log_img">
						<div className="log_imgLogo"></div>
					</div>
					<div className="log_item itemLbl">Usuario</div>
					<div className="log_item itemInp">
						<input type="text" className="log_item_inp" onChange={(e) => setUser(e.target.value)} />
					</div>
					<div className="log_item itemLbl">Password:</div>
					<div className="log_item itemInp">
						<input type="text" className="log_item_inp" />
					</div>
					<div className="log_itemBtn">
						{loading ? <div><p>Cargando...</p></div> : <button className="btnLogin" onClick={login}>Login</button>}
					</div>

					{/*
						<div className="itemCont">
							<div className="itemImg"></div>
						</div>
						<div className="item">Usuario:</div>
						<div className="item"><input type="text" onChange={(e) => setUser(e.target.value)} /></div>
						<div className="item">Password:</div>
						<div className="item"><input type="text" /></div>
						<div className="item">
							{loading ? <p>Cargando...</p> : <button className="btnLogin" onClick={login}>Login</button>}
						</div>
					*/}
				</div>
			</>
			)		
}

export default Login