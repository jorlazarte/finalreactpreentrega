import React from 'react'
import {Link} from 'react-router-dom'
import './ProductList.css'
import loadingImg from '../assets/loading.gif'
const ProductDetail = ({product, supToCart, cart, addToCart}) => {
	
	const itemQty = (cart, product) => {

		const targetObject = cart.find(object => object.id === product.id)
		console.log('targetObject', targetObject)
		console.log('targetObject', targetObject == undefined)

		return (targetObject == undefined?0:targetObject.qty)
	}
	
	return (
			<>
			<div className="det_cont">
				{

					product ? (		
									<>
									<div className="imgCont">
										<img className="img" src={product.image} width="320" height="320" />
									</div>
									<div className="detCont">
										<div>
											<h1>DETALLE:&nbsp;</h1>
											<h3>{product.description}</h3>
										</div>
										<div>
											<h1>PRECIO:&nbsp;</h1>
											<h3>${product.price}.-</h3>
										</div>
										<div className="detailButons">
										  	<button onClick={() => supToCart(product) }>-</button>
										  	<div>{ itemQty(cart, product) }</div>
										  	<button onClick={() => addToCart(product) }>+</button>
										</div>
										<div>
										  	<Link to="/">VOLVER</Link>
										</div>
									</div>
									</>
								) 
							: (
									<div>Producto no encontrado</div>
								)
				}
			</div>
			</>
			)		
}

export default ProductDetail