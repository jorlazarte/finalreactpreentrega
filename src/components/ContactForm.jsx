import React from 'react'

const ContactForm = () => {
	return (
			<>
				<div>Nombre</div>
				<div><input type="text" /></div>
				<div>Email</div>
				<div><input type="text" /></div>
				<div>Comentario</div>
				<div><textarea cols="45" rows="15" /></div>
				<div><button>Enviar</button></div>
			</>
			)		
}

export default ContactForm