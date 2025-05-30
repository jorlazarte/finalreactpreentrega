import React from 'react'

import { useAuth } from '../context/AuthContext';

const About = () => {

	const { logout, login, setUser } = useAuth()
	
	return (
			<>
					<div className="main-containerAbout">
						<div className="contImg">
							<div className="contImg-backImg">
							</div>
						</div>
						<div className="contTxt">
								<div className="contAboutTxt">
									<div className="contText">
										<label className="aboutTitle">Imagenes de referencia.</label>
										<p>El Marketplace es una plataforma de comercio electrónico donde las Personas Usuarias pueden vender 
										y comprar productos usando distintas soluciones de pago y envío.</p>
										<p>En Marketplace VIS, conectamos a las personas interesadas en realizar transacciones con vehículos, inmuebles y servicios con posibles vendedores.</p>
										<p>También ofrecemos otros servicios como Mercado Shops, Mercado Ads, Mercado Créditos, entre muchos otros, todos con el mismo fin: <br />
											democratizar el comercio y los servicios financieros en la región.</p>
									</div>
									<div className="contactSocial">
										<i className="linkSocial fa-brands fa-facebook fa-2x"></i>
										<i className="linkSocial fa-brands fa-twitter fa-2x"></i>
										<i className="linkSocial fa-brands fa-google-plus-g fa-2x"></i>
										<i className="linkSocial fa-brands fa-square-instagram fa-2x"></i>
										<i className="linkSocial fa-brands fa-tiktok fa-2x"></i>
									</div>
								</div>
						</div>
					</div>
			</>
			)		
}

export default About