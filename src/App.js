import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
	const [color, setColor] = useState('');
	// const [divalue, setdivalue] = useState('')
	const [error, setError] = useState('');
	const [list, setList] = useState(new Values('grey').all(5));

	const handleSubmit = (e) => {
		e.preventDefault();
		try {
			let colors = new Values(color).all(5)
			setList(colors)
			setError(false)
		} catch (error) {
			setError(true)
		}
	}
console.log(list.length)
	return (
		<>
			<section className='container'>
				<h3>Color Generator</h3>
				<form onSubmit={handleSubmit}>
					<input type='text' value={color} onChange={(e) => setColor(e.target.value)}
						placeholder='grey'
						className={`${error ? 'error' : null}`}
					/>
					{/* <input type='text' value={divalue} onChange={(e) => setdivalue(e.target.value)} placeholder='5'
						className={`${error ? 'error' : null}`}
					/> */}
					<button className='btn' type='submit'>
						Submit
					</button>
				</form>
			</section>
			<section className='colors'>
				{list.map((color, index) => {
					console.log(color, index)
					return <SingleColor key={index} {...color} index={index} hexColor={color.hex} />
				})}
			</section>
		</>
	)
}

export default App
