import React from 'react'

import { useAuth } from '../context/AuthContext';

import '../components/styles.css'

const Contact = () => {

	const { logout, login, setUser } = useAuth()
	
	return (
			<>
					<div >
						Bienvenido ADMIN<br />
						<p>PANTALLA DE ADMINISTRADOR</p>
						<div className="admin"></div>
						<p>Sonría que lo estamos observando!</p>
					</div>
			</>
			)		
}

export default Contact