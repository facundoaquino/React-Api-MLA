import React, { useState } from 'react'
import getProducts from './helpers/getProducts'
import Loading from './Loading'
import Products from './Products'

import './styles/card.css'

const Card = () => {
	const [text, setText] = useState('')

	const [charge, setCharge] = useState({ loading: false, data: null })

	const handleChange = (e) => {
		setText(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		setCharge({ ...charge, loading: true })

		getProducts(text).then((data) => {
			setCharge({ loading: false, data: data.results })
			setText('')
		})
	}

	return (
		<>
			<form onSubmit={handleSubmit} className="form__container">
				<div className="mb-3">
					<label htmlFor="exampleInputEmail1" className="form-label">
						Busca tu producto
					</label>
					<input
						onChange={handleChange}
						autoComplete="off"
						type="text"
						value={text}
						className="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
					/>
				</div>

				<button className=" btn btn-primary">Buscar</button>
			</form>

			{charge.loading ? <Loading /> : charge.data  ? <Products data={charge.data} /> : null}
		</>
	)
}

export default Card
