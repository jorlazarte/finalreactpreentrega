import React from 'react'

import { BrowserRouter as Router, Route, Link, useLocation } from 'react-router-dom';

import Header from '../components/statics/Header'
import Main from '../components/Main'
import Footer from '../components/statics/Footer'

import ProductDetail from '../components/ProductDetail'

import '../components/styles.css'

import loadingImg from '../assets/loading.gif'

import { useParams } from 'react-router-dom'

const Product = ( {products, cart, delCart, addToCart, supToCart, loading, handleNameChange} ) => {
	const { id } = useParams( )
	console.log('products____', products)
	console.log('id____', id)
	let product = products.find( item => item.id == id )
	console.log('product___', product)

	//console.log('ProductPage',  products)
	const descPage = product.name
	return (
			<>
				<Header cart={cart} addToCart={addToCart} delCart={delCart} />
				<Main titlePage="Detalle del producto" descPage={descPage} page="product" cart={cart} product={product} loading={loading} addToCart={addToCart} supToCart={supToCart} delCart={delCart} />
				<Footer />
			</>
			)		
}

export default Product