import React from 'react'
import './styles/products.css'

const Product = ({ data }) => {
	//  console.log('product');
	return (
		<div className="card m-2" style={{ width: '18rem' }}>
			<img src={data.thumbnail} className="card-img-top" alt="" />
			<div className="card-body">
				<h5 className="card-title">{data.title}</h5>
				<p className="card-text fw-bold">${data.price}</p>
				<p>{data.address?.state_name}</p>
				<a href={data.permalink} className="btn btn-primary">
					Mas detalles
				</a>
			</div>
		</div>
	)
}

export default Product
