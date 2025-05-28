import React from 'react'

import Login from '../components/Login'
import About from '../components/About'
import Admin from '../components/Admin'
import Contact from '../components/Contact'
import ProductList from '../components/ProductList'
import ProductDetail from '../components/ProductDetail'
import NotFound from '../components/NotFound'

const Main = ( {titlePage, descPage, page, products, product, cart, addToCart, supToCart, loading, handleNameChange, delCart} ) => {
	console.log('-----------page', page)
	console.log('-----------product', product)
	let pageInd
	/*
	if(page === 'login'){
		pageInd = <Login />
	}else if(page === 'about'){
		console.log('voy a about')
		pageInd = <About />
	}
	*/
	switch (page) {
		case 'productList':
			console.log('____products1')
			pageInd = <ProductList products={products} cart={cart} addToCart={addToCart} supToCart={supToCart} loading={loading} handleNameChange={handleNameChange} />
			console.log('____products2')
		break;
		case 'product':
			console.log('____product')
			pageInd = <ProductDetail product={product} cart={cart} addToCart={addToCart} supToCart={supToCart} delCart={delCart} />
			console.log('____product')
		break;
		case 'login':
			pageInd = <Login />
		break;
		case 'about':
			pageInd = <About />
		break;
		case 'contact':
			pageInd = <Contact />
		break;
		case 'admin':
			pageInd = <Admin />
		break;
		case 'notfound':
			pageInd = <NotFound />
		break;
	}

	return (
			<>
				<main>
					<div className="itemTitle">{titlePage}</div>
					<div className="itemDescription"><p>{descPage}</p></div>
					<div className="itemMain">
						{pageInd}
					</div>
				</main>
			</>
			)		
}

export default Main