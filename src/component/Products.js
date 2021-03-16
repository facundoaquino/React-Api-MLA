import React from 'react'
import Product from './Product'
import './styles/products.css'

// con  memo el componente solo se va a llamar si las propertys cambian
const Products = React.memo(({ data = [] }) => {
	return (
		<div className="products__container">
			{data.length > 0 ? data.map((product) => <Product key={product.id} data={product} />) : null}
		</div>
	)
})

export default Products
