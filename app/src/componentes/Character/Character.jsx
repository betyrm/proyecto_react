import React from 'react'
import './Character.css'

import Card from 'react-bootstrap/Card'

 const Character = ({ personaje }) => {
	
	if (personaje.lenght === 0) return 
		<p>No encontro personaje</p>
	
	return (
		<>
		<Card style={{ width: '18rem' }}>
			<Card.Img variant="top" src={personaje.image} alt={personaje.name} />
				<Card.Body>
				<Card.Title>{personaje.name}</Card.Title>
				<Card.Text>
//           		{personaje.status}
					{personaje.species} 
//         		</Card.Text>
					
			</Card.Body>	
		</Card>
		</>
	)
}
export  { Character }
