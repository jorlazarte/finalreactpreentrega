import React from 'react'

import { useAuth } from '../context/AuthContext';

import ContactForm from '../components/ContactForm'

const Contact = () => {

	const { logout, login, setUser } = useAuth()
	
	const descPage = 	"Ingrese usuario y contraseña para ingresar"

	return (
			<>
				<div >
					<ContactForm />
				</div>
			</>
			)		
}

export default Contact